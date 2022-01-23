$("#recipefinderBtn").on("click", function(){
    location.href = "recipeFinder.html";
});

var noRecipesMsg = document.querySelector("#noRecipesMsg");
var recipeCards = document.querySelector(".recipeCards");

var recipeNamesLs = localStorage.getItem("recipeNames");
var recipeNames = JSON.parse(recipeNamesLs);


function createRecipeCards() {
    if (recipeNames != null) {
        for (var i = 0; i < recipeNames.length, i < 9 ; i++) {
            var recipeCardContainer = document.createElement('div');
            recipeCardContainer.setAttribute("class", "col-4");
            var recipeCardEl = document.createElement('div');
            recipeCardEl.setAttribute("class", "p-3 border rounded p-5");
            var recipeNameEl = document.createElement("h5");
            recipeNameEl.textContent = recipeNames.results[i].title;
            recipeNameEl.setAttribute("class", "text-center");
            var recipeImageEl = document.createElement("img");
            recipeCardEl.setAttribute("id", recipeNames.results[i].id);
            recipeImageEl.src = recipeNames.results[i].image;
            recipeImageEl.setAttribute("class", "w-100 p-1");
    
            recipeCardEl.appendChild(recipeNameEl);
            recipeCardEl.appendChild(recipeImageEl);
            recipeCardContainer.appendChild(recipeCardEl);
            recipeCards.appendChild(recipeCardContainer);
        }
    } else {
        noRecipesMsg.textContent = "Sorry, we couldn't find any recipes with those ingredients";
    }
  }
  createRecipeCards();
