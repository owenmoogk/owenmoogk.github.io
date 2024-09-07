export type Asset = {
  name?: string;
  link?: string;
};

export async function fetchAssets() {
  const response = await fetch('./publicAssets.json');
  const json = (await response.json()) as Asset[];
  return json;
}
