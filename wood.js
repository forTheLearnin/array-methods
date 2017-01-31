// Problem #4
// Display a list of all items that are made of wood.

// You should use Array.filter() to create a new array called 'wood' that only contains items who's materials list contains or includes()(hint hint) 'wood'.



// Do not touch:
let woodHtmlStr = '';

for (let i = 0; i < wood.length; i++) {
  woodHtmlStr += '<div>' + [i + 1] + '.' + wood[i].title + '</div>'
}

document.getElementById('answer4').innerHTML = woodHtmlStr;
