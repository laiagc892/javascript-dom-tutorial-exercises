let beginning = "<ul>";
let liststring = "";
let ending = "</ul>";

let liBeg = "<li>";
let liEnd = "</li>";
liststring += liBeg + "First Item" + liEnd;
liststring += liBeg + "Second Item" + liEnd;
liststring += liBeg + "Third Item" + liEnd;

// do not modify after this line
document.querySelector("#myDiv").innerHTML = beginning + liststring + ending;
