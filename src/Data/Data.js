// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
//import { keyboard } from "@testing-library/user-event/dist/keyboard";

//import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => {
    // Separate the values from the JSON response
    const barValue = json[0].userId;
    const id = json[0].id;
    const title = json[0].title;
    const completed = json[0].completed;
    

  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


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
    barValue: 70,
    value: "25,970",
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
    barValue: 80,
    value: "14,270",
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
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    // Add new cardData object to the cardsData array for each object in the json response
    const newCardsData = [
      {
        title: "Sales",
        color: {
          backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
          boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue : json[0].userId,
        value : json[0].id,
        
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
        barValue : json[0].userId,
        value : json[0].id,
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
        barValue: json[2].userId,
        value: json[2].id,
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
