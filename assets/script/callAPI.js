var searchBtn = document.querySelector("#searchBtn");
var apiKey = "58cbc000b937473796ed1b4bcb46acc1"
var apiURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=58cbc000b937473796ed1b4bcb46acc1"
var pantry;
var stringOfIngredient = "";
var apiURLRequest;

function callAPI(jsonFoodItems){
    var foodItems = JSON.parse(jsonFoodItems);
    if(foodItems.length != 0){
        foodItems.forEach(e =>{
            stringOfIngredient = stringOfIngredient.concat("+" + e);
        })
        while(stringOfIngredient.charAt(0) === '+'){
            stringOfIngredient = stringOfIngredient.substring(1);
        }
        apiURLRequest = apiURL + '&ingredients=' + stringOfIngredient;
        fetch(apiURLRequest, {
            method: 'GET',
            redirect: 'follow',
        })
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                console.log(data)
            })
    }
    else{
        window.confirm("please enter some items");
    }
    
}

console.log("script start");
searchBtn.addEventListener("click", function(){
    console.log("clicked");
    pantry = localStorage.getItem("pantryitemslist");
    callAPI(pantry);
});