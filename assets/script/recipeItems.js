var recipeNamesLs = localStorage.getItem("recipeNames");
var recipeNames = JSON.parse(recipeNamesLs);


var recipeCards = document.querySelector(".recipeCards");

$("#recipefinderBtn").on("click", function(){
    location.href = "recipeFinder.html";
});



function createRecipeCards() {
    console.log(recipeNames)
    for (var i = 0; i < recipeNames.length, i < 9 ; i++) {
        var recipeCardContainer = document.createElement('div');
        recipeCardContainer.setAttribute("class", "col-4");
        var recipeCardEl = document.createElement('div');
        recipeCardEl.setAttribute("class", "col-4 border rounded p-5")
        var recipeNameEl = document.createElement("h4");
        var recipeImageEl = document.createElement("img");
        recipeCardEl.setAttribute("id", recipeContent[i].id);
        recipeNameEl.textContent = recipeContent[i].title;
        recipeNameEl.setAttribute("class", "text-center");
        var recipeImageEl = document.createElement("img");
        recipeCardEl.setAttribute("id", recipeNames[i].id);
        recipeImageEl.src = recipeNames[i].image;
        recipeImageEl.setAttribute("class", "w-100 p-1");

        recipeCardEl.appendChild(recipeNameEl);
        recipeCardEl.appendChild(recipeImageEl);
        recipeCardContainer.appendChild(recipeCardEl);
        recipeCards.appendChild(recipeCardContainer);
    }
  }
  createRecipeCards();
