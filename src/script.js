let carts = document.querySelectorAll(".add-cart");

let products = [
  {
    booksName: "The Hating Game",
    Autor: "Sally Thorn",
    Year: "2015",
    Pages: "367",
    Condition: "Used",
    Genre: "Drama",
    Price: 19,
    inCart: 0,
  },
  {
    booksName: "Before the coffee gets cold",
    Autor: "Toshikazu Kawaguchi",
    Year: "2019",
    Pages: "213",
    Condition: "New",
    Genre: "Horror",
    Price: 19,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => cartNumbers(products[i]));
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItem(product);
}
function setItem(product) {
  let cartIteams = localStorage.getItem("productsInCart");
  console.log("My cartIteams are", cartIteams);
  products.inCart = 1;

  cartIteams = {
    [products.booksName]: product,
  };
  localStorage.setItem("productsInCart", JSON.stringify(cartIteams));
}
onLoadCartNumbers();
