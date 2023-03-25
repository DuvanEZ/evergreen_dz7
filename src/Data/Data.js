// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
//import { keyboard } from "@testing-library/user-event/dist/keyboard";



// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
 
];

// Analytics Cards Data
export let cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue : 25,
    value : 500,
    
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [ 5,
          10,
          15,
          20,
          25,
          30],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue : 10,
    value : 2000,
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [ 2,
          4,
          6,
          8,
          10,
          12],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue : 75,
    value : 2500,
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [ 8,
          16,
          24,
          32,
          40,
          48],
      },
    ],
  },
  
 
];


const apiKey = 'n0jXhcwvhf49j3mUJt7KZ5Lg9RTWnaPo6UkooiVr';

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': apiKey
  },
  body: JSON.stringify({
    action: 'list'
  })
};

fetch("/prod/metrics",options)
  .then((response) => response.json())
  .then(data => {
    console.log(data); // imprimirá la respuesta en la consola
    return data.payload.metrics.items;
  })
  .then((items) => {
    // Add new cardData object to the cardsData array for each object in the json response
    const newCardsData = [
      {
        title: "Sales",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue : items[0].porcentaje,
        value : items[0].monto,
        
        png: UilUsdSquare,
        series: [
          {
            name: "Sales",
            data: items[0].arreglo,
          },
        ],
      },
      {
        title: "Revenue",
        color: {
          backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
          boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue : items[1].porcentaje,
        value : items[1].monto,
        png: UilMoneyWithdrawal,
        series: [
          {
            name: "Revenue",
            data: items[1].arreglo,
          },
        ],
      },
      {
        title: "Expenses",
        color: {
          backGround:
            "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
          boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue : items[2].porcentaje,
        value : items[2].monto,
        png: UilClipboardAlt,
        series: [
          {
            name: "Expenses",
            data: items[2].arreglo,
          },
        ],
      },
      
    
    ]

    // Update the cardsData array with the new cardData objects
    cardsData = [...newCardsData];
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
