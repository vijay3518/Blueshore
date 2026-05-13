"use client";

import { DESTINATION_PINS, type DestinationPin } from "@/lib/constants";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Html, OrbitControls, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState } from "react";
import type { Mesh, MeshPhongMaterial } from "three";
import { latLngToVector3 } from "./latLng";

const EARTH_TEXTURES = {
  map: "/textures/earth_atmos_2048.jpg",
  normalMap: "/textures/earth_normal_2048.jpg",
  specularMap: "/textures/earth_specular_2048.jpg",
  cloudsMap: "/textures/earth_clouds_2048.png",
} as const;

function EarthSphere() {
  const [map, normalMap, specularMap] = useTexture([
    EARTH_TEXTURES.map,
    EARTH_TEXTURES.normalMap,
    EARTH_TEXTURES.specularMap,
  ]);

  const materialRef = useRef<MeshPhongMaterial | null>(null);

  useFrame(() => {
    if (!materialRef.current) return;
    // Keep highlights subtle (we want "premium" not "plastic").
    materialRef.current.shininess = 12;
    materialRef.current.specular.set("#3b82f6");
  });

  return (
    <mesh
      // Don't let the globe surface steal hover/clicks from pins.
      raycast={() => null}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        ref={materialRef}
        map={map}
        normalMap={normalMap}
        normalScale={[0.85, 0.85]}
        specularMap={specularMap}
      />
    </mesh>
  );
}

function Atmosphere() {
  return (
    <mesh
      scale={1.045}
      // Atmosphere is purely visual; keep pins easy to hover.
      raycast={() => null}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshBasicMaterial color="#2196F3" transparent opacity={0.08} />
    </mesh>
  );
}

function Clouds({ paused }: { paused: boolean }) {
  const clouds = useTexture(EARTH_TEXTURES.cloudsMap);
  const meshRef = useRef<Mesh | null>(null);
  const reduced = useReducedMotion();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    if (reduced || paused) return;
    meshRef.current.rotation.y += delta * 0.035;
  });

  return (
    <mesh
      ref={meshRef}
      scale={1.012}
      // Clouds are purely visual; keep pins easy to hover.
      raycast={() => null}
    >
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={clouds}
        transparent
        opacity={0.28}
        depthWrite={false}
      />
    </mesh>
  );
}

function Pin({
  pin,
  active,
  onHover,
}: {
  pin: DestinationPin;
  active: boolean;
  onHover: (p: DestinationPin | null) => void;
}) {
  const pos = useMemo(
    () => latLngToVector3(pin.lat, pin.lng, 2.06),
    [pin.lat, pin.lng],
  );

  return (
    <group position={pos}>
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(pin);
        }}
        onPointerOut={() => onHover(null)}
      >
        <sphereGeometry args={[0.06, 20, 20]} />
        <meshStandardMaterial
          color="#F4A800"
          emissive="#F4A800"
          emissiveIntensity={active ? 0.95 : 0.48}
        />
      </mesh>
      <pointLight
        color="#F4A800"
        intensity={active ? 1.75 : 0.55}
        distance={3}
        position={[0, 0.1, 0]}
      />
      {active ? (
        <Html distanceFactor={12} position={[0, 0.35, 0]} center>
          <div className="w-[240px] rounded-2xl border border-white/40 bg-bs-navy/95 p-4 text-left text-xs text-white shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="text-lg">{pin.flag}</span>
              <span>{pin.country}</span>
            </div>
            <p className="mt-2 text-[11px] text-white/75">
              Avg. visa timeline:{" "}
              <span className="font-semibold text-bs-gold">{pin.avgVisaWeeks}</span>
            </p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-bs-gold">
              Top Universities
            </p>
            <ul className="mt-1 space-y-1 text-[11px] text-white/85">
              {pin.universities.map((u) => (
                <li key={u}>• {u}</li>
              ))}
            </ul>
          </div>
        </Html>
      ) : null}
    </group>
  );
}

function Scene({
  hoverPin,
  setHoverPin,
  paused,
}: {
  hoverPin: DestinationPin | null;
  setHoverPin: (p: DestinationPin | null) => void;
  paused: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <>
      <color attach="background" args={["#041032"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[6, 5, 4]} intensity={1.25} />
      <directionalLight position={[-6, -3, -2]} intensity={0.35} />
      <Atmosphere />
      <EarthSphere />
      <Clouds paused={paused || reduced} />
      {DESTINATION_PINS.map((pin) => (
        <Pin
          key={pin.id}
          pin={pin}
          active={hoverPin?.id === pin.id}
          onHover={setHoverPin}
        />
      ))}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={3.1}
        maxDistance={5.2}
        autoRotate={!reduced && !hoverPin && !paused}
        autoRotateSpeed={0.55}
      />
    </>
  );
}

export function GlobeCanvas() {
  const [hoverPin, setHoverPin] = useState<DestinationPin | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="h-[min(72vh,560px)] w-full"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => {
        setPaused(false);
        setHoverPin(null);
      }}
    >
      <Canvas
        camera={{ position: [0, 0.35, 5.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene hoverPin={hoverPin} setHoverPin={setHoverPin} paused={paused} />
        </Suspense>
      </Canvas>
    </div>
  );
}
