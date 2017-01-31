// Problem #2
// Display an array of items that cost between $14.00 and $18.00 US Dollars.

// You should use .filter to:

// 1. Create a new array called 'itemsBetween' using Array.filter to find which items.price property matches the criteria.


// Do not touch:
let itemsBetweenHtmlStr = '';

for (let i = 0; i < itemsBetween.length; i++) {
  itemsBetweenHtmlStr += '<div>' + [i + 1] + '.' + itemsBetween[i].title + '</div>';
}

document.getElementById('answer2').innerHTML = itemsBetweenHtmlStr;
