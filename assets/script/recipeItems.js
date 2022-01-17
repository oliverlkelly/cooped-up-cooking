var recipeContent = []

var recipeCards = document.querySelector(".recipeCards")

function addRecipeContent() {
    console.log(recipeContent.length);
        for (var i = 0; i < recipeContent.length; i++) {
            var recipeCardEl = document.createElement('div');
            recipeCardEl.setAttribute("class", "col-4 border border-primary rounded p-5")
            var recipeNameEl = document.createElement('h3');
            var timeToPrepareEl = document.createElement('p');    
            recipeNameEl.textContent = recipeContent[i].recipeName;
            timeToPrepareEl.textContent = recipeContent[i].timeToPrepare;
            recipeCards.appendChild(recipeCardEl)
            recipeCardEl.appendChild(recipeNameEl);
            recipeCardEl.appendChild(timeToPrepareEl);
            
        }
  }
  addRecipeContent();
