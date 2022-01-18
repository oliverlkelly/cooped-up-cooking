$(document).ready(function(){ 
    if (localStorage.hasOwnProperty('pantryitemslist')) {
        var pantryitemslist = JSON.parse(localStorage.getItem('pantryitemslist'))}
        else { var pantryitemslist = []};
        console.log(pantryitemslist);
        var pantryList = $('#pantryitemslist');
        $.each(pantryitemslist, function(i)
        {
            var li = $('<li/>')
                .appendTo(pantryList)
                .text(pantryitemslist[i])
                .appendTo(li);
        });

$("#pantryitementrybtn").on("click", function() {
    console.log("yyyyy");
    var newpantryitem = $("#pantryiteminput").val();
    $("#pantryiteminput").val('');
    var pantryList = $('#pantryitemslist')
        {
            var li = $('<li/>')
                .appendTo(pantryList)
                .text(newpantryitem)
                .appendTo(li)
        };
    console.log(newpantryitem);
    console.log(pantryitemslist);
    pantryitemslist.push(newpantryitem);
    console.log(newpantryitem);
    console.log(pantryitemslist);
    localStorage.setItem('pantryitemslist', JSON.stringify(pantryitemslist));
})

$("#EmptypantryBtn").on("click", function() {
    document.getElementById("pantryitemslist").innerHTML = "";
    localStorage.removeItem('pantryitemslist');
    pantryitemslist = [];

});
$(".dropdown-item").on("click", function() {
var selectedparameter= $(this).text();
var parameteroptions = $(this).parent().attr("id");
localStorage.setItem(parameteroptions, selectedparameter);
})

// $("#searchBtn").on("click", function(){
//     localStorage.getItem('cuisine');
//     localStorage.getItem('mealtype');
//     localStorage.getItem('cooktime');
//     localStorage.getItem('pantryitemslist');
// })


})
