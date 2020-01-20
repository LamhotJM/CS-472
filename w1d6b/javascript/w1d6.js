"use strict"

function btnClicked() {

  alert("Hello, world I am Lamhot!");
  setInterval(increaseFontSize, 500);
}

// this function will be trigger after click bigger text
function increaseFontSize() {
  var area= document.getElementById("text-area");
  area.style.fontSize = parseInt(window.getComputedStyle(area)
    .getPropertyValue("font-size")) + 2 + "px";
  document.body.style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}

function onClickMakovich() {
  var area = document.getElementById("text-area");
  var update = area.value.replace(/\w{5,}/g, "Malkovich");
  area.value = update;
}

function onClickLatin() {
  var area = document.getElementById("text-area");
  area.value = convertText(area.value);
}

// this function will call by onClickLatin
function convertText(text) {
  text = text.trim();
  var result = text.toLowerCase();
  var index = text.search(/[ueoai]/);
  switch (index) {
    case 0: result = result + "way"; break;
    case -1: result = result + "ay"; break;
    default:
      result = text.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
      break;
  }
  return result;
}
//Will be trigger after click bling
function onCbxChanged(state) {
  alert("checkbox changed");
  var area = document.getElementById("text-area");
  area.style.fontWeight = "bold";
  if (document.getElementById("checkbox").checked) {
    area.style.fontWeight = "bold";
    area.style.color = "green";
    area.style.textDecoration = "underline";
  } else {
    area.style.fontWeight = "";
    area.style.color = "";
    area.style.textDecoration = "";
  }
}
