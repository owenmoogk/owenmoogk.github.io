export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

export async function loadSplashes() {
  const response = await fetch('/assets/splashes.json');
  const json = await response.json() as string[];
  return json;
}
