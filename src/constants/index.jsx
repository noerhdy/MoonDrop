import imageProductBlack1 from "../assets/imgProduct/b_1.webp";
import imageProductBlack2 from "../assets/imgProduct/b_2.webp";
import imageProductBlack3 from "../assets/imgProduct/b_3.webp";
import imageProductWhite1 from "../assets/imgProduct/w_1.webp";
import imageProductWhite2 from "../assets/imgProduct/w_2.webp";
import imageProductWhite3 from "../assets/imgProduct/w_3.webp";

export const dataProducts = [
  {
    id: 1,
    color: "black",
    name: "MOONDROP SPACE TRAVEL BLACK",
    price: 25.99,
    discountPrice: 29.99,
    images: [imageProductBlack1, imageProductBlack2, imageProductBlack3], // Array of images for black version
    slug: "moondrop-space-travel-black",
  },
  {
    id: 2,
    color: "white",
    name: "MOONDROP SPACE TRAVEL WHITE",
    price: 24.99,
    discountPrice: 28.99,
    images: [imageProductWhite1, imageProductWhite2, imageProductWhite3], // Array of images for white version
    slug: "moondrop-space-travel-white",
  },
];

export const dataSpesification = [
  {
    id: 1,
    item1: "Bluetooth version:",
    item2: "5.3",
  },
  {
    id: 2,
    item1: "Supported protocols:",
    item2: "A2DP/AVRCP/HFP  /HSP/SBC/AAC",
  },
  {
    id: 3,
    item1: "Charging port:",
    item2: "Type-C",
  },
  {
    id: 4,
    item1: "Working distance:",
    item2: "10m (barrier-free open environment)",
  },
  {
    id: 5,
    item1: "Support system:",
    item2: "Bluetooth devices and mobile phones",
  },
  {
    id: 6,
    item1: "Earphone charging time:",
    item2: "About 1 Hour",
  },
  {
    id: 7,
    item1: "Charging time of charging case:",
    item2: "about 1.5 Hours",
  },
  {
    id: 8,
    item1: "Earphone battery capacity:",
    item2: "3.7V/37mAh",
  },
  {
    id: 9,
    item1: "Battery capacity of charging case:",
    item2: "3.7V/380mAh",
  },
  {
    id: 10,
    item1: "Battery life of earphone:",
    item2: "About 4 Hours",
  },
  {
    id: 11,
    item1: "Battery life of charging case:",
    item2: "About 12 Hours",
  },
];
