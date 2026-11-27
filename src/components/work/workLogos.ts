const LOGO_FILES: Record<string, string> = {
  basepowercompany: 'basepowercompany.jpg',
  busplannersoftware: 'busplannersoftware.jpg',
  'deca-inc-': 'deca-inc-.jpg',
  'first-2': 'first-2.jpg',
  'hub-for-neuroengineering-solutions':
    'hub-for-neuroengineering-solutions.jpg',
  'merry-hill-golf-club': 'merry-hill-golf-club.jpg',
  'parkwood-mennonite-home-inc': 'parkwood-mennonite-home-inc.svg',
  qampio: 'qampio.jpg',
  'qc-career-school': 'qc-career-school.jpg',
  'rfa-space': 'rfa-space.jpg',
  shadcanada: 'shadcanada.jpg',
  'university-of-waterloo-formula-motorsports':
    'university-of-waterloo-formula-motorsports.jpg',
  uwaterloo: 'uwaterloo.jpg',
  'virtu-financial': 'virtu-financial.jpg',
  wrmth: 'wrmth.jpg',
  'the-college-board': 'the-college-board.jpg',
  jamhacks: 'jamhacks.jpg',
  'government-of-ontario': 'government-of-ontario.jpg',
  'smart-serve-ontario': 'smart-serve-ontario.jpg',
  'waterloo-region-district-school-board':
    'waterloo-region-district-school-board.jpg',
  'bluevale-collegiate-institute': 'bluevale-collegiate-institute.gif',
  'waterloo-minor-baseball': 'waterloo-minor-baseball.png',
  'duke-of-edinburgh': 'duke-of-edinburgh.png',
  freecodecamp: 'freecodecamp.png',
  'canada-safety-training-centre': 'canada-safety-training-centre.png',
  'canadian-red-cross': 'canadian-red-cross.svg',
};

const NAME_TO_SLUG: Record<string, string> = {
  'University of Waterloo': 'uwaterloo',
  'Shad Canada': 'shadcanada',
  'Bluevale Collegiate Institute': 'bluevale-collegiate-institute',
  'Waterloo Minor Baseball Association': 'waterloo-minor-baseball',
  'Duke of Edinburgh': 'duke-of-edinburgh',
  'College Board': 'the-college-board',
  'Waterloo Region District School Board':
    'waterloo-region-district-school-board',
  'Jamhacks V': 'jamhacks',
  'Canadian Red Cross': 'canadian-red-cross',
  'Ontario Government | Gouvernement de l’Ontario': 'government-of-ontario',
  'Smart Serve Ontario': 'smart-serve-ontario',
  freeCodeCamp: 'freecodecamp',
  'Canada Safety Training Centre': 'canada-safety-training-centre',
};

export function getLinkedInSlug(url?: string) {
  return url?.match(/linkedin\.com\/(?:company|school)\/([^/?#]+)/)?.[1];
}

export function getLogo(name: string, url?: string) {
  const slug = getLinkedInSlug(url);
  const file =
    (slug && LOGO_FILES[slug]) ?? LOGO_FILES[NAME_TO_SLUG[name.trim()] ?? ''];
  return file ? `/assets/work-logos/${file}` : undefined;
}
