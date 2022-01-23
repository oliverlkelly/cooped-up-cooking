function removebutton() {
    var closebtns = document.getElementsByClassName("pantryitemremoveBtn");
    for (i=0;i<closebtns.length; i++) {
        closebtns[i].addEventListener("click", function() {
            JSON.parse(localStorage.getItem('pantryitemslist'));
            var pantryitemtoberemoved = $(this).parent("li").text();
            this.parentElement.style.display = 'none';
            pantryitemslist = $.grep(pantryitemslist, function(value) {
                return value != pantryitemtoberemoved;
            });
            localStorage.setItem('pantryitemslist', JSON.stringify(pantryitemslist));
        })
    }
}
function removeAllItems(){
    $(".pantryitemslist").empty();
    localStorage.removeItem("pantryitemslist");
    pantryitemslist = [];
}
function buildList(){
    $.each(pantryitemslist, function(i){
        addItem(pantryitemslist[i]);
    });
}
function addItem(pantryItem){
    var li = $('<li  class="pantryitem">')
        .appendTo(pantryList)
        .text(pantryItem)
    $('<button class="fas fa-trash-alt pantryitemremoveBtn">')
        .appendTo(li);
    removebutton();
    addToolTips(li);
}
//Wiki API call

var apiWikiUrl = 'https://en.wikipedia.org/w/api.php';
var srlimit = 1;
var srsearch; 

function addToolTips(element){
    apiwiki = `${apiWikiUrl}?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${srlimit}&srsearch=${srsearch}`;
    fetch(apiwiki, {
        method: 'GET',
        redirect: 'follow',
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        localStorage.setItem(`wiki${srsearch}`, JSON.stringify(data));
        element.append(`<div class="toolTip">${content}<a href="${contentLink}">${contentLink}</a></div>`);
    })
}
 
var pantryitemslist = [];
if(localStorage.getItem('pantryitemslist')){
    pantryitemslist = JSON.parse(localStorage.getItem('pantryitemslist'));
}
var pantryList = $('.pantryitemslist');
buildList();

$("#pantryitementrybtn").on("click", function(){
    var nPantryItem = $("#pantryiteminput").val();
    $("#pantryiteminput").val('');
    addItem(nPantryItem);
    pantryitemslist.push(nPantryItem);
    localStorage.setItem('pantryitemslist', JSON.stringify(pantryitemslist));
});

$("#RecipeBookBtn").on("click", function(){
    location.href = "recipeItems.html";
})

$("#EmptypantryBtn").on("click", function() {
    removeAllItems();
});

