


var elementLi = document.createElement("li");
elementLi.classList.add("pantryLi");
elementLi.textContent = "apple";
console.log(elementLi);
var spanLi = document.createElement("span");
spanLi.classList.add("close");
spanLi.innerHTML = ("&times;");
elementLi.appendChild(spanLi);
var itemsUl = document.querySelector(".itemList");
itemsUl.appendChild(elementLi);
console.log(itemsUl);




var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}