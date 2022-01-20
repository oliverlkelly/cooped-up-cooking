$(document).ready(function(){ 
    if (localStorage.hasOwnProperty('pantryitemslist')) {
        var pantryitemslist = JSON.parse(localStorage.getItem('pantryitemslist'))}
        else { var pantryitemslist = []};
        console.log(pantryitemslist);
        var pantryList = $('.pantryitemslist');
        $.each(pantryitemslist, function(i)
        {
            var li = $('<li/ class="pantryitem">')
                .appendTo(pantryList)
                .text(pantryitemslist[i])
            $('<button/ class="fas fa-trash-alt pantryitemremoveBtn">')
                .appendTo(li)
        removebutton();
        });

$("#pantryitementrybtn").on("click", function() {
    var newpantryitem = $("#pantryiteminput").val();
    $("#pantryiteminput").val('');
    var pantryList = $('.pantryitemslist')
        {
            var li = $('<li/  class="pantryitem">')
                .appendTo(pantryList)
                .text(newpantryitem)
                $('<button/ class="fas fa-trash-alt pantryitemremoveBtn">')
                .appendTo(li);
        };
    pantryitemslist.push(newpantryitem);
    localStorage.setItem('pantryitemslist', JSON.stringify(pantryitemslist));
    removebutton();
});

$("#RecipeBookBtn").on("click", function(){
    location.href = "recipeItems.html";
})

function removebutton() {
var closebtns = document.getElementsByClassName("pantryitemremoveBtn");
var i;
for (i=0;i<closebtns.length; i++) {
    closebtns[i].addEventListener("click", function() {
        JSON.parse(localStorage.getItem('pantryitemslist'));
        var pantryitemtoberemoved = $(this).parent("li").text();
        console.log(pantryitemtoberemoved);
        //pantryitemslist.splice(pantryitemtoberemoved, pantryitemslist);
        console.log(pantryitemslist);
        this.parentElement.style.display = 'none';
        console.log(pantryitemslist);
        pantryitemslist = $.grep(pantryitemslist, function(value) {
            return value != pantryitemtoberemoved;
        });
        localStorage.setItem('pantryitemslist', JSON.stringify(pantryitemslist));
    })
}
}

$("#EmptypantryBtn").on("click", function() {
    document.getElementById("pantryitemslist").innerHTML = "";
    localStorage.removeItem('pantryitemslist');
    pantryitemslist = [];
});
$(".dropdown-item").on("click", function() {
var selectedparameter= $(this).text();
console.log(selectedparameter);
var parameteroptions = $(this).parent().attr("id");
$(this).parent().parent().children("#selectedoption").text(selectedparameter);
localStorage.setItem(parameteroptions, selectedparameter);
})

// $("#searchBtn").on("click", function(){
//     localStorage.getItem('cuisine');
//     localStorage.getItem('mealtype');
//     localStorage.getItem('cooktime');
//     localStorage.getItem('pantryitemslist');
// })


})
