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

let itemsBetweenHtmlStr = '';

for (let i = 0; i < itemsBetween.length; i++) {
  itemsBetweenHtmlStr += '<div>' + [i + 1] + '.' + itemsBetween[i].title + '</div>';
}

document.getElementById('answer2').innerHTML = itemsBetweenHtmlStr;


// Problem #3
// Which item has a GBP currency code? Display it's name and price.

const gbpCurrency = items.find((el) => {
  return el.currency_code === 'GBP';
});

document.getElementById('answer3').innerHTML = gbpCurrency.title + 'is priced at: ' + gbpCurrency.price + ' GBP';



// Problem #4
// Display a list of all items that are made of wood.
const wood = items.filter((el) => {
  return el.materials.includes('wood');
});

let woodHtmlStr = '';

for (let i = 0; i < wood.length; i++) {
  woodHtmlStr += '<div>' + [i + 1] + '.' + wood[i].title + '</div>'
}

document.getElementById('answer4').innerHTML = woodHtmlStr;


// Problem #5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
const eight = items.filter((el) => {
  return el.materials.length >= 8;
});

let eightHtmlStr = '';

for (let i = 0; i < eight.length; i++) {
  const item = eight[i];
  let materialStr = '';

  for (let j = 0; j < item.materials.length; j++) {
    materialStr += `<div>- ${item.materials[j]}</div>`;
  }

  eightHtmlStr += `<div>${i + 1}. <b>${item.title}</b> is made of <b>${item.materials.length}</b> items: ${materialStr}</div>`
}

document.getElementById('answer5').innerHTML = eightHtmlStr;


// Problem #6
// How many items were made by their sellers?
const sellerMade = items.filter((el) => {
  return el.who_made === 'i_did';
});

document.getElementById('answer6').innerHTML = sellerMade.length;
