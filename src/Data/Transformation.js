import fetchAPI from './API.js';

// Call the fetchAPI function to fetch the data and extract the variables
fetchAPI()
  .then(data => {
    // Use the extracted variables as needed
    console.log(data.userIds);
    console.log(data.ids);
    console.log(data.titles);
    console.log(data.completed);
  });