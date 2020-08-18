import desi from './img/menu/desi.jpg';
import indian_snacks from './img/menu/indian_snacks.jpg';
import italian from './img/menu/italian.jpg';
import pizza from './img/menu/pizza.jpg';
import plantbased from './img/menu/plantbased.jpg';
import south_indian from './img/menu/south_indian.jpg';

// Special Items

import chickenbiryani from './img/special_Item/chickenbiryani.jpg';
import creamydalmakhani from './img/special_Item/creamydalmakhani.jpg';
import lemonbread from './img/special_Item/lemonbread.jpg';
import samosa from './img/special_Item/samosa.jpg';
import muttonbiryani from './img/special_Item/muttonbiryani.jpg';
import vegbiryani from './img/special_Item/vegbiryani.jpg';

export const SpecialMenuList = [{
    name: "Chicken Biryani",
    to: "/special-item/chicken-biryani",
    img: chickenbiryani,
    cat: "Chef's Special",
    rating:"4.1"
  },
  {
    name: "Creamy Daal Makhni",
    to: "/special-item/daal-makhni",
    img: creamydalmakhani,
    cat: "Chef's Special",
    rating:"4.2"
  },
  {
    name: "Lemon Bread",
    to: "/special-item/lemon-bread",
    img: lemonbread,
    cat: "Chef's Special",
    rating:"4.3"
  },
  {
    name: "Samosa",
    to: "/special-item/samosa",
    img: samosa,
    cat: "Chef's Special",
    rating:"4.4"
  },
  {
    name: "Mutton Biryani",
    to: "/special-item-mutton-biryani",
    img: muttonbiryani,
    cat: "Chef's Special",
    rating:"4.5"
  },
  {
    name: "Veg Biryani",
    to: "/special-item-veg-biryani",
    img: vegbiryani,
    cat: "Chef's Special",
    rating:"4.6"
  }
]



export const Menus = [{
    name: "Desi Flavor",
    "to": "/menu/desi-flavour",
    "img": desi
  }, {
    name: "Italian",
    "to": "/menu/italian",
    "img": italian
  },
  {
    name: "Indian Snacks",
    "to": "/menu/indian-snacks",
    "img": indian_snacks
  },
  {
    name: "South Indian",
    "to": "/menu/south-indian",
    "img": south_indian
  },
  {
    name: "Plant Based",
    "to": "/menu/plantbased",
    "img": plantbased
  },
  {
    name: "Pizza",
    "to": "/menu/pizza",
    "img": pizza
  }
]