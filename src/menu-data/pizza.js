import { v4 as uuidv4 } from 'uuid';


const Pizza = [{
    "name": "Barbeque Chicken",
    "price": [325, 690],
    "isVeg": false,
    "rating": 4.5,
    "type": "Pizza Course",
    "id": uuidv4()
  },
  {
    "name": "Margherita",
    "price": [325, 690],
    "isVeg": true,
    "rating": 4.5,
    "type": "Pizza Course",
    "id": uuidv4()
  },
  {
    "name": "Chicken Fiesta",
    "price": [450, 890],
    "isVeg": false,
    "rating": 4.5,
    "type": "Pizza Course",
    "id": uuidv4()
  },
  {
    "name": "Meatza",
    "price": [450, 890],
    "isVeg": false,
    "rating": 4.5,
    "type": "Pizza Course",
    "id": uuidv4()
  },
  {
    "name": "Tomato Pizza",
    "price": [250, 490],
    "isVeg": false,
    "rating": 4.5,
    "type": "Pizza Course",
    "id": uuidv4()
  },
  {
    "name": "Cheese Pizza",
    "price": [250, 490],
    "isVeg": false,
    "rating": 4.5,
    "type": "Pizza Course",
    "id": uuidv4()
  }
]

export default Pizza;