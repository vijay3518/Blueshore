import type { CSSProperties } from "react";

export type ButtonCelebrationVariant = "confetti" | "scholar" | "passport" | "plane" | "wave";

const confetti = [
  ["#f4a800", -52, -58, -22, 0],
  ["#2196f3", -30, -74, 18, 45],
  ["#ffffff", -12, -48, -42, 90],
  ["#0c6b6a", 14, -76, 35, 135],
  ["#f4a800", 34, -54, 72, 180],
  ["#ffffff", 56, -68, -68, 225],
  ["#2196f3", -64, -34, 82, 270],
  ["#f4a800", 66, -30, 24, 315],
] as const;

function ConfettiPieces() {
  return (
    <>
      {confetti.map(([color, x, y, rotation, delay], index) => (
        <span
          key={`${color}-${index}`}
          className="btn-fx-piece"
          style={
            {
              "--fx-c": color,
              "--fx-x": `${x}px`,
              "--fx-y": `${y}px`,
              "--fx-r": `${rotation}deg`,
              "--fx-delay": `${delay}ms`,
            } as CSSProperties
          }
        />
      ))}
    </>
  );
}

export function ButtonCelebration({ variant }: { variant: ButtonCelebrationVariant }) {
  if (variant === "scholar") {
    return (
      <span className="btn-fx-visual btn-fx-visual--scholar" aria-hidden="true">
        <span className="btn-fx-cap" />
        <span className="btn-fx-student btn-fx-student--a" />
        <span className="btn-fx-student btn-fx-student--b" />
        <span className="btn-fx-student btn-fx-student--c" />
        <ConfettiPieces />
      </span>
    );
  }

  if (variant === "passport") {
    return (
      <span className="btn-fx-visual btn-fx-visual--passport" aria-hidden="true">
        <span className="btn-fx-stamp">APPROVED</span>
        <ConfettiPieces />
      </span>
    );
  }

  if (variant === "plane") {
    return (
      <span className="btn-fx-visual btn-fx-visual--plane" aria-hidden="true">
        <span className="btn-fx-plane-trail" />
        <svg className="btn-fx-plane" viewBox="0 0 32 32" focusable="false">
          <path
            d="M3.8 17.2 28.1 5.8c1.2-.6 2.3.7 1.7 1.8L18.4 28.2l-3.9-8.3-8.5 3.4-2.2-6.1Z"
            fill="currentColor"
          />
        </svg>
      </span>
    );
  }

  if (variant === "wave") {
    return (
      <span className="btn-fx-visual btn-fx-visual--wave" aria-hidden="true">
        <span className="btn-fx-wave btn-fx-wave--a" />
        <span className="btn-fx-wave btn-fx-wave--b" />
        <span className="btn-fx-wave btn-fx-wave--c" />
      </span>
    );
  }

  return (
    <span className="btn-fx-visual btn-fx-visual--confetti" aria-hidden="true">
      <ConfettiPieces />
    </span>
  );
}
