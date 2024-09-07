export type StringDictionary = Record<string, string>;

export type UnknownDictionary = Record<string, unknown>;

export async function fetchWorkData() {
  const response = await fetch('/assets/work.json');
  const json = (await response.json()) as UnknownDictionary;
  return json;
}
