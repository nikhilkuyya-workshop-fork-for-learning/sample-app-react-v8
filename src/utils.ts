export function wait(duration: number): void {
  const start = performance.now();
  while(performance.now() <  start + duration){}

}
