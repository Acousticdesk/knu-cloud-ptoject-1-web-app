export function timeout(ms: number) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
