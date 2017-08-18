var svg = document.getElementsByClassName('octicon-law')[0]
var link = svg.parentNode
var license = link.text.trim()

console.log("Scraping License...")
console.log(license);


if (license == "Apache-2.0") {
  var classname = link.getAttribute("class");
  link.setAttribute("class", classname + " license-guard-bad");

  classname = svg.getAttribute("class");
  svg.setAttribute("class", classname + " license-guard-bad");
}

var cloneBtn = document.querySelectorAll('[aria-label="Clone or download this repository"]')[0];
var classname = cloneBtn.getAttribute("class");
cloneBtn.setAttribute("class", classname.replace("primary", "danger"));


