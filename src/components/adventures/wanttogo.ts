import type { Adventure } from './places';

export type WantToGo = Adventure & { mapLink: string };

export const wantToGo: WantToGo[] = [
  {
    name: 'Mt Everest',
    coords: [27.9881, 86.925],
    mapLink:
      'https://www.google.com/maps/place/Mt+Everest/data=!4m2!3m1!1s0x39e854a215bd9ebd:0x576dcf806abbab2',
  },
  {
    name: 'Sydney',
    coords: [-33.8688, 151.2093],
    mapLink:
      'https://www.google.com/maps/place/Sydney/data=!4m2!3m1!1s0x6b129838f39a743f:0x3017d681632a850',
  },
  {
    name: 'Chiang Mai',
    coords: [18.7883, 98.9853],
    mapLink:
      'https://www.google.com/maps/place/Chiang+Mai/data=!4m2!3m1!1s0x30da3a7e90bb6f5d:0x98d46270a59b4367',
  },
  {
    name: 'Mount Fuji',
    coords: [35.3606, 138.7274],
    mapLink:
      'https://www.google.com/maps/place/Mount+Fuji/data=!4m2!3m1!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df',
  },
  {
    name: 'Yogyakarta',
    coords: [-7.7956, 110.3695],
    mapLink:
      'https://www.google.com/maps/place/Yogyakarta/data=!4m2!3m1!1s0x2e7a5787bd5b6bc5:0x21723fd4d3684f71',
  },
  {
    name: 'Ijen',
    coords: [-8.058, 114.2419],
    mapLink:
      'https://www.google.com/maps/place/Ijen/data=!4m2!3m1!1s0x2dd149f2110ae607:0x7c04ef029d5e39bc',
  },
  {
    name: 'Mt Bromo',
    coords: [-7.9417, 112.9533],
    mapLink:
      'https://www.google.com/maps/place/Mt+Bromo/data=!4m2!3m1!1s0x2dd637aaab794a41:0xada40d36ecd2a5dd',
  },
  {
    name: 'Mount Rinjani',
    coords: [-8.4116, 116.4142],
    mapLink:
      'https://www.google.com/maps/place/Mount+Rinjani/data=!4m2!3m1!1s0x2dcc2d800216cccf:0x3c03cdbf11d30a1e',
  },
  {
    name: 'Nazaré',
    coords: [39.6012, -9.0701],
    mapLink:
      'https://www.google.com/maps/place/Nazar%C3%A9/data=!4m2!3m1!1s0xd18a8232f6ad417:0x3d2d871af42106f',
  },
  {
    name: 'Pastéis de Belém',
    coords: [38.6977, -9.2035],
    mapLink:
      'https://www.google.com/maps/place/Past%C3%A9is+de+Bel%C3%A9m/data=!4m2!3m1!1s0xd1ecb452efd715b:0xffeff6c6b46d9665',
  },
  {
    name: 'LX Factory',
    coords: [38.6999, -9.1786],
    mapLink:
      'https://www.google.com/maps/place/LX+Factory/data=!4m2!3m1!1s0xd1934af61dedbe5:0x33ebaaaa14f543ac',
  },
  {
    name: 'Castelo de São Jorge',
    coords: [38.7139, -9.1335],
    mapLink:
      'https://www.google.com/maps/place/Castelo+de+S%C3%A3o+Jorge/data=!4m2!3m1!1s0xd193477b40ec39b:0xb4c0704199e433d7',
  },
  {
    name: 'Alfama',
    coords: [38.7117, -9.1302],
    mapLink:
      'https://www.google.com/maps/place/Alfama/data=!4m2!3m1!1s0xd19347613ee43b5:0xc37964f5e5b83e8',
  },
  {
    name: 'Jerónimos Monastery',
    coords: [38.6979, -9.2063],
    mapLink:
      'https://www.google.com/maps/place/Jer%C3%B3nimos+Monastery/data=!4m2!3m1!1s0xd1ecb42c3c29c4b:0x87755d348e96ebed',
  },
  {
    name: 'Belém Tower',
    coords: [38.6916, -9.2158],
    mapLink:
      'https://www.google.com/maps/place/Bel%C3%A9m+Tower/data=!4m2!3m1!1s0xd1ecb42c3c29c4b:0x3002dcadcf52513f',
  },
  {
    name: 'Magritte Museum',
    coords: [50.842, 4.3584],
    mapLink:
      'https://www.google.com/maps/place/Magritte+Museum/data=!4m2!3m1!1s0x47c3c4874b60893d:0x24d2e9ab20bdf686',
  },
  {
    name: 'Royal Palace of Brussels',
    coords: [50.8418, 4.3622],
    mapLink:
      'https://www.google.com/maps/place/Royal+Palace+of+Brussels/data=!4m2!3m1!1s0x47c3c48149a75883:0x33668b0b929c7a3d',
  },
  {
    name: 'Atomium',
    coords: [50.8949, 4.3415],
    mapLink:
      'https://www.google.com/maps/place/Atomium/data=!4m2!3m1!1s0x47c3c3ac00000001:0x5293071d68a63709',
  },
  {
    name: 'Grand Place',
    coords: [50.8467, 4.3525],
    mapLink:
      'https://www.google.com/maps/place/Grand+Place/data=!4m2!3m1!1s0x47c3c47f4614f1f1:0xb03c355d8fe2cfb6',
  },
  {
    name: 'Cardiff Bay',
    coords: [51.4633, -3.1639],
    mapLink:
      'https://www.google.com/maps/place/Cardiff+Bay/data=!4m2!3m1!1s0x486e1815b6750763:0x599bee84ff6f9149',
  },
  {
    name: 'Bodleian Library',
    coords: [51.754, -1.2547],
    mapLink:
      'https://www.google.com/maps/place/Bodleian+Library/data=!4m2!3m1!1s0x4876c6a223357d37:0x8e6c0d1b699d1702',
  },
  {
    name: 'The Roman Baths',
    coords: [51.3811, -2.3593],
    mapLink:
      'https://www.google.com/maps/place/The+Roman+Baths/data=!4m2!3m1!1s0x48718113ded530b5:0xe46be6814f1224d',
  },
  {
    name: 'The Shard',
    coords: [51.5045, -0.0865],
    mapLink:
      'https://www.google.com/maps/place/The+Shard/data=!4m2!3m1!1s0x4876035a0a9271d3:0xbdf26ba73efb7b',
  },
  {
    name: 'Buckingham Palace',
    coords: [51.5014, -0.1419],
    mapLink:
      'https://www.google.com/maps/place/Buckingham+Palace/data=!4m2!3m1!1s0x48760520cd5b5eb5:0xa26abf514d902a7',
  },
  {
    name: 'Westminster Abbey',
    coords: [51.4993, -0.1273],
    mapLink:
      'https://www.google.com/maps/place/Westminster+Abbey/data=!4m2!3m1!1s0x487604c4ba43352f:0xda8effa2059b537a',
  },
  {
    name: 'Tower of London',
    coords: [51.5081, -0.0759],
    mapLink:
      'https://www.google.com/maps/place/Tower+of+London/data=!4m2!3m1!1s0x48760349331f38dd:0xa8bf49dde1d56467',
  },
  {
    name: 'McLaren Technology Centre',
    coords: [51.3458, -0.5488],
    mapLink:
      'https://www.google.com/maps/place/McLaren+Technology+Centre/data=!4m2!3m1!1s0x487677e28048e827:0xcb860bf3af5f1787',
  },
  {
    name: 'Miejsce Pamięci i Muzeum Auschwitz II-Birkenau',
    coords: [50.0359, 19.1783],
    mapLink:
      'https://www.google.com/maps/place/Miejsce+Pami%C4%99ci+i+Muzeum+Auschwitz+II-Birkenau/data=!4m2!3m1!1s0x47169585b5872e05:0xf380c2159aa1d6a7',
  },
  {
    name: 'Rynek Główny',
    coords: [50.0616, 19.9373],
    mapLink:
      'https://www.google.com/maps/place/Rynek+G%C5%82%C3%B3wny/data=!4m2!3m1!1s0x47165b120455da67:0xc3c7f5071b750d33',
  },
  {
    name: 'Ancient Agora of Athens',
    coords: [37.9747, 23.7221],
    mapLink:
      'https://www.google.com/maps/place/Ancient+Agora+of+Athens/data=!4m2!3m1!1s0x14a1bd22f5097987:0x422934da31aa5dc8',
  },
  {
    name: 'Temple of Olympian Zeus',
    coords: [37.9693, 23.7331],
    mapLink:
      'https://www.google.com/maps/place/Temple+of+Olympian+Zeus/data=!4m2!3m1!1s0x14a1bd169b9c6429:0x5519bb221fe94255',
  },
  {
    name: 'Plaka',
    coords: [37.9726, 23.7301],
    mapLink:
      'https://www.google.com/maps/place/Plaka/data=!4m2!3m1!1s0x14a1bd170bda3a31:0x50a33e9d3910ddb1',
  },
  {
    name: 'Parthenon',
    coords: [37.9715, 23.7267],
    mapLink:
      'https://www.google.com/maps/place/Parthenon/data=!4m2!3m1!1s0x14a1bd19ca39ee61:0x1b3fa079b878a218',
  },
  {
    name: 'Acriculture',
    coords: [37.9718, 23.7257],
    mapLink:
      'https://www.google.com/maps/place/Acropolis/data=!4m2!3m1!1s0x14a1bd115926d4b3:0xc1b7afae2bd1b7ea',
  },
  {
    name: "St. Stephen's Basilica",
    coords: [47.5009, 19.054],
    mapLink:
      "https://www.google.com/maps/place/St.+Stephen's+Basilica/data=!4m2!3m1!1s0x4741c15e3aa3cdf7:0xdd42fcacae7fbccb",
  },
  {
    name: 'Széchenyi Thermal Bath',
    coords: [47.5186, 19.0819],
    mapLink:
      'https://www.google.com/maps/place/Sz%C3%A9chenyi+Thermal+Bath/data=!4m2!3m1!1s0x4741db8605675577:0xcbc0c308b68d2412',
  },
  {
    name: "Fisherman's Bastion",
    coords: [47.5024, 19.0348],
    mapLink:
      "https://www.google.com/maps/place/Fisherman's+Bastion/data=!4m2!3m1!1s0x4741dc227fb4a99d:0x2f263ca844235e46",
  },
  {
    name: 'St. Vitus Cathedral',
    coords: [50.0909, 14.4005],
    mapLink:
      'https://www.google.com/maps/place/St.+Vitus+Cathedral/data=!4m2!3m1!1s0x470b951e38024f5b:0x69ad3850f2d989a2',
  },
  {
    name: 'Prague Castle',
    coords: [50.0909, 14.4001],
    mapLink:
      'https://www.google.com/maps/place/Prague+Castle/data=!4m2!3m1!1s0x470b951e6c24b7c3:0x2acf3c88af12259f',
  },
  {
    name: 'Cliffs of Moher',
    coords: [52.9715, -9.4309],
    mapLink:
      'https://www.google.com/maps/place/Cliffs+of+Moher/data=!4m2!3m1!1s0x485b01af0bb881f3:0x283a469048b8c0e6',
  },
  {
    name: 'Salthill Prom',
    coords: [53.262, -9.0705],
    mapLink:
      'https://www.google.com/maps/place/Salthill+Prom/data=!4m2!3m1!1s0x485b97c43e38aa39:0x7367717c8fa8fca3',
  },
  {
    name: 'Galway',
    coords: [53.2707, -9.0568],
    mapLink:
      'https://www.google.com/maps/place/Galway/data=!4m2!3m1!1s0x485b93955a2d5bff:0x32b1b440a495281',
  },
  {
    name: 'Guinness Storehouse',
    coords: [53.3419, -6.2867],
    mapLink:
      'https://www.google.com/maps/place/Guinness+Storehouse/data=!4m2!3m1!1s0x48670e8440c5056b:0xb31933927505e7a2',
  },
  {
    name: 'Amsterdam',
    coords: [52.3676, 4.9041],
    mapLink:
      'https://www.google.com/maps/place/Amsterdam/data=!4m2!3m1!1s0x47c63fb5949a7755:0x6600fd4cb7c0af8d',
  },
  {
    name: 'Grindelwald',
    coords: [46.6242, 8.0357],
    mapLink:
      'https://www.google.com/maps/place/Grindelwald/data=!4m2!3m1!1s0x478f9eab18c79217:0xbfaa5c0f42972f65',
  },
  {
    name: 'First Mountain Cart',
    coords: [46.5991, 8.034],
    mapLink:
      'https://www.google.com/maps/place/First+Mountain+Cart/data=!4m2!3m1!1s0x478f9a34bff04161:0x79c9a89a7a0b37a5',
  },
  {
    name: 'Sagrada Família',
    coords: [41.4036, 2.1744],
    mapLink:
      'https://www.google.com/maps/place/Sagrada+Fam%C3%ADlia/data=!4m2!3m1!1s0x12a4a2db868f209b:0xdd709ffba518881c',
  },
  {
    name: 'Park Güell',
    coords: [41.4145, 2.1527],
    mapLink:
      'https://www.google.com/maps/place/Park+G%C3%BCell/data=!4m2!3m1!1s0x12a4a2ae52d441ab:0x899a0ba01aaace58',
  },
  {
    name: 'Gothic Quarter',
    coords: [41.3829, 2.1768],
    mapLink:
      'https://www.google.com/maps/place/Gothic+Quarter/data=!4m2!3m1!1s0x12a4a2f8901e0681:0xb7e57ec538cda7af',
  },
  {
    name: 'Rhine Gorge',
    coords: [50.1667, 7.7],
    mapLink:
      'https://www.google.com/maps/place/Rhine+Gorge/data=!4m2!3m1!1s0x47be75c437e2d05f:0x98878ec60abf8db5',
  },
  {
    name: 'Colosseo',
    coords: [41.8902, 12.4922],
    mapLink:
      'https://www.google.com/maps/place/Colosseo/data=!4m2!3m1!1s0x132f61b6fc6433df:0x165f79d5d2332163',
  },
  {
    name: 'Saint Peter’s Basilica',
    coords: [41.9022, 12.4539],
    mapLink:
      'https://www.google.com/maps/place/Saint+Peter%E2%80%99s+Basilica/data=!4m2!3m1!1s0x132f6061b7149b59:0x724bf077cd875283',
  },
  {
    name: 'Mt Etna',
    coords: [37.75, 14.9934],
    mapLink:
      'https://www.google.com/maps/place/Mt+Etna/data=!4m2!3m1!1s0x1316aa3714a7a0eb:0x1d0b042aa5c52a70',
  },
  {
    name: 'Sistine Chapel',
    coords: [41.9029, 12.4545],
    mapLink:
      'https://www.google.com/maps/place/Sistine+Chapel/data=!4m2!3m1!1s0x132f6065c523afdb:0xab16c8877fb53e22',
  },
  {
    name: 'Mount Saint Mary',
    coords: [54.1239, 18.553],
    mapLink:
      'https://www.google.com/maps/place/Mount+Saint+Mary/data=!4m2!3m1!1s0x477acc8168a67861:0xd3cab065578b9d2',
  },
  {
    name: 'The Storr',
    coords: [57.5078, -6.1823],
    mapLink:
      'https://www.google.com/maps/place/The+Storr/data=!4m2!3m1!1s0x488dcd47018d8697:0x69288a895e431915',
  },
  {
    name: 'Fairy Pools',
    coords: [57.2502, -6.2562],
    mapLink:
      'https://www.google.com/maps/place/Fairy+Pools/data=!4m2!3m1!1s0x488c396da115dd11:0x7ecbb9919bacf17d',
  },
  {
    name: 'Kfar Hanokdim',
    coords: [31.3727, 35.3983],
    mapLink:
      'https://www.google.com/maps/place/Kfar+Hanokdim/data=!4m2!3m1!1s0x15030150a8702d85:0x99355c430d1e02e9',
  },
  {
    name: 'Rome',
    coords: [41.9028, 12.4964],
    mapLink:
      'https://www.google.com/maps/place/Rome/data=!4m2!3m1!1s0x132f6196f9928ebb:0xb90f770693656e38',
  },
  {
    name: 'Reykjavík',
    coords: [64.1466, -21.9426],
    mapLink:
      'https://www.google.com/maps/place/Reykjav%C3%ADk/data=!4m2!3m1!1s0x48d674b9eedcedc3:0xec912ca230d26071',
  },
  {
    name: 'Rovaniemi',
    coords: [66.5039, 25.7294],
    mapLink:
      'https://www.google.com/maps/place/Rovaniemi/data=!4m2!3m1!1s0x442b4bbd76772553:0x158088adb48841c4',
  },
  {
    name: 'Basilique du Sacré-Cœur de Montmartre',
    coords: [48.8867, 2.343],
    mapLink:
      'https://www.google.com/maps/place/Basilique+du+Sacr%C3%A9-C%C5%93ur+de+Montmartre/data=!4m2!3m1!1s0x47e66e4334868de3:0xcfc3870abe2b8519',
  },
  {
    name: "The Eagle's Nest",
    coords: [47.6112, 13.0421],
    mapLink:
      "https://www.google.com/maps/place/The+Eagle's+Nest/data=!4m2!3m1!1s0x4776eb69a0839185:0xee0ed7dfba05b0ab",
  },
  {
    name: 'Burg Hohenwerfen',
    coords: [47.4831, 13.1896],
    mapLink:
      'https://www.google.com/maps/place/Burg+Hohenwerfen/data=!4m2!3m1!1s0x4776c4b39393290b:0xc963430affbd6793',
  },
  {
    name: 'Hallstatt',
    coords: [47.5622, 13.6493],
    mapLink:
      'https://www.google.com/maps/place/Hallstatt/data=!4m2!3m1!1s0x4771366f6e414663:0x16c165596a26c1ad',
  },
  {
    name: 'Zugspitze',
    coords: [47.4212, 10.9847],
    mapLink:
      'https://www.google.com/maps/place/Zugspitze/data=!4m2!3m1!1s0x479d02ee5107876d:0x34e257ebca223d97',
  },
  {
    name: 'Amalienborg Palace',
    coords: [55.6841, 12.5932],
    mapLink:
      'https://www.google.com/maps/place/Amalienborg+Palace/data=!4m2!3m1!1s0x46525322363e0673:0x5cf17fab9d15553f',
  },
  {
    name: 'Nyhavn',
    coords: [55.6799, 12.5918],
    mapLink:
      'https://www.google.com/maps/place/Nyhavn/data=!4m2!3m1!1s0x46525322aa676daf:0x99c2a00928e5eaeb',
  },
  {
    name: 'Rosenborg Castle',
    coords: [55.6854, 12.5776],
    mapLink:
      'https://www.google.com/maps/place/Rosenborg+Castle/data=!4m2!3m1!1s0x4652531b429e531d:0x52359c3345281b3c',
  },
  {
    name: 'Tivoli Gardens',
    coords: [55.6737, 12.5681],
    mapLink:
      'https://www.google.com/maps/place/Tivoli+Gardens/data=!4m2!3m1!1s0x4652531280f6eaf3:0xd9b50b0db50b27b0',
  },
  {
    name: 'Prospera',
    coords: [-13.8433, -171.75],
    mapLink:
      'https://www.google.com/maps/place/Prospera/data=!4m2!3m1!1s0x8f69e5f7b1760133:0x75253ee1d30680d9',
  },
  {
    name: 'Tuvalu',
    coords: [-8.5243, 179.1941],
    mapLink:
      'https://www.google.com/maps/place/Tuvalu/data=!4m2!3m1!1s0x6fc19cb959b1a04d:0x8f6754680707122e',
  },
  {
    name: 'Adventure Snake Canyon Oman',
    coords: [23.1583, 57.0922],
    mapLink:
      'https://www.google.com/maps/place/Adventure+Snake+canyon+oman/data=!4m2!3m1!1s0x3e8e90a66f43c4cd:0x9536bb7e5e7bdf9',
  },
  {
    name: "Shade's Main Beach",
    coords: [39.3701, -74.4188],
    mapLink:
      "https://www.google.com/maps/place/Shade's+Main+Beach/data=!4m2!3m1!1s0x882b899972f6bc31:0x191d67d61c799485",
  },
  {
    name: 'Martignano',
    coords: [42.1167, 12.3167],
    mapLink:
      'https://www.google.com/maps/place/Martignano/data=!4m2!3m1!1s0x478270d5a96eea01:0x369b46534851a1a7',
  },
  {
    name: 'Davos',
    coords: [46.8043, 9.8372],
    mapLink:
      'https://www.google.com/maps/place/Davos/data=!4m2!3m1!1s0x4784a110df64a59d:0xd0330689df2d96d8',
  },
  {
    name: 'Swiss Science Center Technorama',
    coords: [47.5135, 8.7249],
    mapLink:
      'https://www.google.com/maps/place/Swiss+Science+Center+Technorama/data=!4m2!3m1!1s0x479a9a1b968a4bc3:0x678bdfb0adfd4300',
  },
  {
    name: 'Zermatt',
    coords: [46.0207, 7.7491],
    mapLink:
      'https://www.google.com/maps/place/Zermatt/data=!4m2!3m1!1s0x478f35a2292ee5cd:0x400ff8840196f70',
  },
  {
    name: 'Geierlay Suspension Bridge',
    coords: [50.0904, 7.3418],
    mapLink:
      'https://www.google.com/maps/place/Geierlay+Suspension+Bridge/data=!4m2!3m1!1s0x47be1507c59d1f55:0x9b6357ab0ab28c0f',
  },
  {
    name: 'Heidelberg',
    coords: [49.3988, 8.6724],
    mapLink:
      'https://www.google.com/maps/place/Heidelberg/data=!4m2!3m1!1s0x4797c1050eccdccd:0xefe6ea0044243ad7',
  },
  {
    name: 'Heidehöhe',
    coords: [50.8167, 6.1167],
    mapLink:
      'https://www.google.com/maps/place/Heideh%C3%B6he/data=!4m2!3m1!1s0x47a787f56a4b7253:0xefb5080b21988e29',
  },
  {
    name: 'Dresden',
    coords: [51.0504, 13.7373],
    mapLink:
      'https://www.google.com/maps/place/Dresden/data=!4m2!3m1!1s0x4709cf29101ad6a9:0x421b1cb4288feb0',
  },
  {
    name: 'Kongresshalle',
    coords: [52.525, 13.3696],
    mapLink:
      'https://www.google.com/maps/place/Kongresshalle/data=!4m2!3m1!1s0x479f59d82a284ae5:0xdeba1ae5c4a491b5',
  },
  {
    name: 'Waitomo Glowworm Caves',
    coords: [-38.2607, 175.1033],
    mapLink:
      'https://www.google.com/maps/place/Waitomo+Glowworm+Caves/data=!4m2!3m1!1s0x6d6cb77ef3e3547d:0x922cb1e1fd309ff2',
  },
];
