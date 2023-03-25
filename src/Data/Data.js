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
 
];

const url = 'https://9w9znugu7h.execute-api.us-east-1.amazonaws.com/v1/metrics';
const options = {
  method: 'POST',
  body: JSON.stringify({ action: 'list' })
};

fetch("/v1/metrics",options)
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
            data: [31, 40, 28, 51, 42, 109, 100],
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
            data: [10, 100, 50, 70, 80, 30, 40],
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
            data: [10, 25, 15, 30, 12, 15, 20],
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
