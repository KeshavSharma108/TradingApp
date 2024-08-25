
import { football } from "../assest/Images";
import { cricket } from "../assest/Images";
import { BitcoinLogo,ethereum } from "../assest/Images";


const headerItems = [
  {
    id: 1,
    name: "Bitcoin",
    price: `$5438`,
    type: "trading",
    image:BitcoinLogo,
  },  {
    id: 2,
    name: "IPL",
    year: 2024,
    type: "sports",
    image:cricket,
   
  },
  {
    id: 3,
    name: "Ethereum",
    price: 5438,
    image:ethereum,
    type: "trading",
  },

  {
    id: 4,
    name: "Men's world cup",
    subName: 'Cricket',
    type: "sports",
    image:cricket,
   
  }, {
    id: 5,
    name: "Champion League",
    subName: 'Football',
    type: "sports",
    image:football,
   
  },
];

export default headerItems
