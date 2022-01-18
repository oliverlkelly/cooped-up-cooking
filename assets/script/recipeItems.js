var recipeNamesLs = localStorage.getItem("recipeNames");
var recipeNames = JSON.parse(recipeNamesLs);


var recipeCards = document.querySelector(".recipeCards")

function createRecipeCards() {
    console.log(recipeNames)
    for (var i = 0; i < recipeNames.length, i < 9 ; i++) {
        var recipeCardEl = document.createElement('div');
        recipeCardEl.setAttribute("class", "col-4 border border-primary rounded p-5")
        var recipeNameEl = document.createElement("h4");
        var recipeImageEl = document.createElement("img");
        recipeCardEl.setAttribute("id", recipeNames[i].id);
        recipeNameEl.textContent = recipeNames[i].title;
        recipeNameEl.setAttribute("class", "text-center");
        recipeImageEl.src = recipeNames[i].image;
        recipeImageEl.setAttribute("class", "w-100 p-1");
        recipeCards.appendChild(recipeCardEl)
        recipeCardEl.appendChild(recipeNameEl);
        recipeCardEl.appendChild(recipeImageEl);
    }
  }
  createRecipeCards();
