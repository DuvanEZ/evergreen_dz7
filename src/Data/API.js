import fetch from "node-fetch";

// Define a function to fetch the data from the API and extract the variables
const apiUrl = 'https://jsonplaceholder.typicode.com/todos'


async function fetchAPI() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    
    // Extract the variables from the data
    const userIds = data.map(todo => todo.userId);
    const ids = data.map(todo => todo.id);
    const titles = data.map(todo => todo.title);
    const completed = data.map(todo => todo.completed);
    
    // Return an object containing the extracted variables
    return {
      userIds,
      ids,
      titles,
      completed
    };
  } catch (error) {
    console.error(error);
  }
}

// Export the fetchAPI function as a module
export default fetchAPI;