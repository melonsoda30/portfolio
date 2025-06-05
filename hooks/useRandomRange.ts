export function useRandomRange(range: number[]) {
  return Math.random() * (range[1] - range[0]) + range[0];
}
