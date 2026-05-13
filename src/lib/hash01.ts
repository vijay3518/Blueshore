/** Deterministic 0..1 value for stable animation offsets (pure; avoids Math.random in render). */
export function hash01(i: number, salt = 0): number {
  const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453123;
  return x - Math.floor(x);
}
