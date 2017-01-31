// Problem #5
// Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

// 1. You should use Array.filter to create a new array called 'eight' that only contains items with eight or more materials.



// Do not touch:
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
