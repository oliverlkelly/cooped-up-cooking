var searchBtn = document.querySelector("#searchBtn");
var apiKey = "58cbc000b937473796ed1b4bcb46acc1"
var apiURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=58cbc000b937473796ed1b4bcb46acc1"
var pantry = ["Milk", "Eggs", "Bread"];
var stringOfIngredient = "";
var apiURLRequest;

searchBtn.addEventListener("click", callAPI(pantry));

function callAPI(foodItems){
    if(foodItems.length != 0){
        pantry.forEach(e =>{
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
                console.log(data);
            })
    }
    else{
        window.confirm("please enter some items");
    }
    
}