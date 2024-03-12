/*
const btn = document.querySelector("#btn");
const newQuote = document.querySelector("#new-quote");
const author = document.querySelector("#author");

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = data.author;
    });
}
*/

const btn = document.querySelector("#btn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

// Event listener for button click to get new quote
btn.addEventListener("click", getQuote);

// Function to fetch a new quote from the API
function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `- ${data.author}`;
    })
    .catch((err) => {
      console.error("Error fetching quote:", err);
    });
}
