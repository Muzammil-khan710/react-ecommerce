import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */
 import { ArmaniAnalogWatch, ArmaniChronoWatch, BovetAutomaticWatch, CasioChronoWatch, HrxSmartWatch, MiSmartWatch, OnePlusSmartWatch, RadoAnalogWatch, RiderAnalogWatch, SeikoAutomaticWatch} from "../../images/ImageExp"


export const products = [
  {
    _id: uuid(),
    name: "Casio Chronograph Watch",
    originalPrice: 15000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 9000,
    badgeMessage: "40% off",
    imageSrc: CasioChronoWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "Chronograph",
    rating: 4.8
  },
  {
    _id: uuid(),
    name: "Armani Chronograph watch",
    originalPrice: 20000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 15000,
    badgeMessage: "30% off",
    imageSrc: ArmaniChronoWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "Chronograph",
    rating: 3.1
  },
  {
    _id: uuid(),
    name: "Mi band 5",
    originalPrice: 6500,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 4500,
    badgeMessage: "30% off",
    imageSrc: MiSmartWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "SmartWatch",
    rating: 5.0
  },
  {
    _id: uuid(),
    name: "HRX smart watch ",
    originalPrice: 7000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 5900,
    badgeMessage: "30% off",
    imageSrc: HrxSmartWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "SmartWatch",
    rating: 3.9
  },
  {
    _id: uuid(),
    name: "Oneplus smart watch",
    originalPrice: 20000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 18000,
    badgeMessage: "30% off",
    imageSrc: OnePlusSmartWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "SmartWatch",
    rating: 4.0
  },
  {
    _id: uuid(),
    name: "Rider analog watch",
    originalPrice: 25000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 19900,
    badgeMessage: "40% off",
    imageSrc: RiderAnalogWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "Analog",
    rating: 2.5
  },
  {
    _id: uuid(),
    name: "Armani analog watch",
    originalPrice: 30000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 15000,
    badgeMessage: "50% off",
    imageSrc: ArmaniAnalogWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "Analog",
    rating: 3.0
  },
  {
    _id: uuid(),
    name: "Rado analog watch",
    originalPrice: 40000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 30000,
    badgeMessage: "20% off",
    imageSrc: RadoAnalogWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "Analog",
    rating: 4.6
  },
  {
    _id: uuid(),
    name: "Bovet automatic watch",
    originalPrice: 45000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 40000,
    badgeMessage: "15% off",
    imageSrc: BovetAutomaticWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "Automatic",
    rating: 4.9
  },
  {
    _id: uuid(),
    name: "Seiko automatic watch",
    originalPrice: 35000,
    hasOffer: true,
    hasDiscount: true,
    discountPrice: 20000,
    badgeMessage: "25% off",
    imageSrc: SeikoAutomaticWatch,
    inStock: true,
    fastDelivery: true,
    categoryName: "Automatic",
    rating: 4.0
  }
]
 