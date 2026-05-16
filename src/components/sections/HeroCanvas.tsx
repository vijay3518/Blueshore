"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";

/* ─── Globe wireframe ──────────────────────────────────────────── */
function WireGlobe() {
  const mesh = useRef<THREE.Mesh>(null);
  const timer = useMemo(() => new THREE.Timer(), []);

  useFrame(() => {
    if (!mesh.current) return;
    timer.update(performance.now());
    mesh.current.rotation.y = timer.getElapsed() * 0.12;
    mesh.current.rotation.x = 0.2;
    mesh.current.rotation.z = Math.sin(timer.getElapsed() * 0.5) * 0.1;
  });
  return (
    <mesh ref={mesh} position={[3.5, -2.8, -1]}>
      <sphereGeometry args={[4.2, 32, 32]} />
      <meshStandardMaterial
        color="#1687d9"
        wireframe
        transparent
        opacity={0.25}
        emissive="#1687d9"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

/* ─── Camera subtle sway ───────────────────────────────────────── */
function CameraRig() {
  const camera = useThree((state) => state.camera);

  useFrame(({ mouse }) => {
    const x = camera.position.x + (mouse.x * 0.4 - camera.position.x) * 0.04;
    const y = camera.position.y + (mouse.y * 0.2 - camera.position.y) * 0.04;

    camera.position.set(x, y, camera.position.z);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Main exported Canvas component ──────────────────────────── */
export function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <Canvas
        camera={{ position: [0, 1, 7], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[4, 6, 4]} intensity={40} color="#ffffff" />
          <pointLight position={[-4, -2, 3]} intensity={20} color="#1687d9" />
          <pointLight position={[0, -4, -2]} intensity={15} color="#f4a800" />

          <CameraRig />

          <WireGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
