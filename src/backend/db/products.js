/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
 import {AmazfitGtr, AmazfitGts, CasioBlue, CasioBrown, CasioWhite, FossilBlack, PoliceBlue, FossilGreen, FossilBlue, PoliceBlack, PoliceGolden} from "../../images/ImageExp"


export const products = [
  {
    _id: 'fossil-green-analog-watch-010',
    name: "Fossil Green Analog Watch",
    brand: 'Fossil',
    originalPrice: 19995,
    discountPrice: 13996,
    imageSrc: FossilGreen,
    inStock: true,
    fastDelivery: true,
    categoryName: "Analog",
    rating: 4.7,
		label: 'Bestseller',
		features:[
      '10.3 mm case thickness',
      'Ceramic band material',
      '36 mm case diameter',
      'Upto 100 meters water resistant depth'
    ],
		description: 'This 36mm FB-01 watch features a green glossy dial, three-hand movement and green ceramic bracelet.'
  },
  {
    _id: 'fossil-black-analog-watch-012',
    name: "Fossil Black Analog Watch",
    brand: 'Fossil',
    originalPrice: 13495,
    discountPrice: 8097,
    imageSrc: FossilBlack,
    inStock: true,
    fastDelivery: true,
    categoryName: "Analog",
    rating: 4,
		label: 'Bestseller',
		features:[
      '12 mm case thickness',
      'Stainless steel band material',
      '42 mm case diameter',
      'Upto 100 meters water resistant depth'
    ],
		description: 'This 42mm Fossil Blue watch features a black sunray dial, three-hand date movement and two-tone stainless steel bracelet.'
  },
  {
    _id: 'fossil-blue-chronograph-watch-013',
    name: "Fossil Blue Chronograph Watch",
    brand: 'Fossil',
    originalPrice: 13495,
    discountPrice: 8097,
    imageSrc: FossilBlue,
    inStock: true,
    fastDelivery: false,
    categoryName: "Chronograph",
    rating: 3,
		label: 'New Arrival',
		features:[
      '12 mm case thickness',
      'Leather band material',
      '44 mm case diameter',
      'Upto 50 meters water resistant depth'
    ],
		description: 'The Neutra Chrono gift set features a blue satin dial with roman numerals at the 12 and 6 hr mark, chronograph movement and a brown leather strap for a bold, one-of-a-kind look.'
  },
  {
    _id: 'police-black-analog-watch-014',
    name: "Police Black Analog Watch",
    brand: 'Police',
    originalPrice: 12995,
    discountPrice: 9096,
    imageSrc: PoliceBlack,
    inStock: true,
    fastDelivery: true,
    categoryName: "Analog",
    rating: 4.8,
		label: 'Bestseller',
		features:[
      '12 mm case thickness',
      'Stainless steel band material',
      '43 mm case diameter',
      'Upto 50 meters water resistant depth'
    ],
		description: 'Police Mens 43 mm Urban Rebel Black Dial Stainless Steel Analog Watch'
  },
  {
    _id: 'police-golden-analog-watch-015',
    name: "Police Golden Analog Watch",
    brand: 'Police',
    originalPrice: 12995,
    discountPrice: 9096,
    imageSrc: PoliceGolden,
    inStock: true,
    fastDelivery: true,
    categoryName: "Analog",
    rating: 4,
		features:[
      '10 mm case thickness',
      'Leather band material',
      '45 mm case diameter',
      'Upto 50 meters water resistant depth'
    ],
		description: 'Police Mens 45 mm Urban Rebel Gun Dial Leather Analog Watch'
  },
  {
    _id: 'police-blue-analog-watch-016',
    name: "Police Blue Analog Watch",
    brand: 'Police',
    originalPrice: 9195,
    discountPrice: 5517,
    imageSrc: PoliceBlue,
    inStock: true,
    fastDelivery: false,
    categoryName: "Analog",
    rating: 3.5,
		features:[
      '10 mm case thickness',
      'Leather band material',
      '45 mm case diameter',
      'Upto 50 meters water resistant depth'
    ],
		description: ' The trendy bracelet strap of this watch is crafted from metallic material for durability, while its round dial ups the style quotient. '
  },
  {
    _id: 'casio-white-chronograph-watch-017',
    name: "Casio White Chronograph Watch",
    brand: 'Casio',
    originalPrice: 13995,
    discountPrice: 8397,
    imageSrc: CasioWhite,
    inStock: true,
    fastDelivery: true,
    categoryName: "Chronograph",
    rating: 4,
		features:[
      '12 mm case thickness',
      'Stainless steel band material',
      '50 mm case diameter',
      'Upto 100 meters water resistant depth'
    ],
		description: 'Fashioned with a two-toned dial and strap, it ensures a chic vibe. Further adding to the utility is its water resisting capacity up to 100 meters.'
  },
  {
    _id: 'casio-blue-chronograph-watch-018',
    name: "Casio Blue Chronograph Watch",
    brand: 'Casio',
    originalPrice: 11995,
    discountPrice: 8396,
    imageSrc: CasioBlue,
    inStock: true,
    fastDelivery: false,
    categoryName: "Chronograph",
    rating: 3.9,
		label: 'New Arrival',
		features:[
      '14 mm case thickness',
      'Stainless steel band material',
      '42 mm case diameter',
      'Upto 100 meters water resistant depth'
    ],
		description: 'Featuring a round dial, it also sports three sub dials that not only enhance its appeal but also perform multiple tasks at the same time.'
  },
  {
    _id: 'casio-brown-chronograph-watch-019',
    name: "Casio Brown Chronograph Watch",
    brand: 'Casio',
    originalPrice: 9995,
    discountPrice: 6996,
    imageSrc: CasioBrown,
    inStock: true,
    fastDelivery: true,
    categoryName: "Chronograph",
    rating: 4.2,
		label: 'Bestseller',
		features:[
      '12 mm case thickness',
      'Leather band material',
      '48 mm case diameter',
      'Upto 100 meters water resistant depth'
    ],
		description: ' The brown dial with roman markers and stylish hands in a contrasting shade lend it a smart look that will complement your casual wear.'
  },
  {
    _id: 'amazfit-gtr-2-smartwatch-020',
    name: "Amazfit GTR 2 SmartWatch",
    brand: 'Amazfit',
    originalPrice: 13499,
    discountPrice: 10000,
    imageSrc: AmazfitGtr,
    inStock: true,
    fastDelivery: false,
    categoryName: "Smartwatch",
    rating: 4.5,
		label: 'Bestseller',
		features:[
      '12 mm case thickness',
      'Leather band material',
      '46 mm case diameter',
      'Upto 50 meters water resistant depth'
    ],
		description: ' 1.39 Inches HD Amoled Display With 454 X 454 Resolution, 3D Gorilla Glass 3 + Anti-Fingerprint Coating And Odlc Coating.'
  },
  {
    _id: 'amazfit-gts-3-smartwatch-021',
    name: "Amazfit GTS 3 SmartWatch",
    brand: 'Amazfit',
    originalPrice: 13999,
    discountPrice: 11000,
    imageSrc: AmazfitGts,
    inStock: true,
    fastDelivery: false,
    categoryName: "Smartwatch",
    rating: 4.2,
		features:[
      '12 mm case thickness',
      'Leather band material',
      '42 mm case diameter',
      'Upto 50 meters water resistant depth'
    ],
		description: '1.75-Inch Square Ultra HD Amoled Display With 341 Ppi Screen Of The Amazfit Gts 3 Shows You Exactly What You Want, When You Want It, And Is Visible Even Under Bright Sunlight With 72.4% Screen-To-Body Ratio And Peak Brightness Of 1000 Nits. '
  },
]
 