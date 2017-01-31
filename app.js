// Practice with Map and Filter.
// The items are located in items.js and the constiable 'items' should be available to you globally.

// Problem #1 - .map and .reduce
// Find the average price of all items in the items array.

const priceArray = items.map((el) => {
  return el.price;
});

const reducedArray = priceArray.reduce((a, b) => {
  return a + b;
}, 0);

const average = reducedArray / items.length;

document.getElementById('answer1').innerHTML = average;



// Problem #2
// Display an array of items that cost between $14.00 and $18.00 US Dollars.

const itemsBetween = items.filter((item) => {
  return item.price > 14 && item.price < 18;
});

let htmlStr = '';

for (let i = 0; i < itemsBetween.length; i++) {
  htmlStr += '<div>' + [i + 1] + '.' + itemsBetween[i].title + '</div>';
}

document.getElementById('answer2').innerHTML = htmlStr;


// Problem #3
// Which item has a GBP currency code? Display it's name and price.

const gbpCurrency = items.find((el) => {
  return el.currency_code === 'GBP';
});

document.getElementById('answer3'.innerHTML = gbpCurrency.title + ' ' + gbpCurrency.price;



// Problem #4
// Display a list of all items that are made of wood.
const wood = items.filter((el) => {
  return el.materials.includes('wood');
});

let htmlStr = '';

for (let i = 0; i < wood.length; i++) {
  htmlStr += '<div>' + wood[i].title + '</div>'
}

document.getElementById('answer4').innerHTML = htmlStr;


// Problem #5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
const eight = items.filter((el) => {
  return el.materials.length >= 8;
});

let htmlStr = '';

for (let i = 0; i < eight.length; i++) {
  const item = eight[i];
  let materialStr = '';

  for (let j = 0; j < item.materials.length; j++) {
    materialStr += `<li>${item.materials[i]}</li>`;
  }

  htmlStr += `<div>${i + 1}. ${item.title} is made of ${item.materials.length} items: ${materialStr}</div>`
}


// You should be able to target the DOM element 'answer5' and use .innerHTML to render the answer




// ------------------------------------------------------------------------------------
// Problem #6
// How many items were made by their sellers?




// You should be able to target the DOM element 'answer6' and use .innerHTML to render the answer
// ------------------------------------------------------------------------------------
