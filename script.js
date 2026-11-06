
const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Every moment is a fresh beginning.",
    author: "T.S. Eliot"
  },
  {
    text: "Success is the sum of small efforts.",
    author: "Robert Collier"
  }
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  document.getElementById("quote").textContent =
    quotes[randomIndex].text;

  document.getElementById("author").textContent =
    "- " + quotes[randomIndex].author;
}

function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;

  navigator.clipboard.writeText(quote + " " + author)
    .then(() => alert("Quote copied!"))
    .catch(() => alert("Could not copy. Please try again."));
}
