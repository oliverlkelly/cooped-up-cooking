$(document).ready(function(){ 
    if (localStorage.hasOwnProperty('pantryitemslist')) {
        var pantryitemslist = JSON.parse(localStorage.getItem('pantryitemslist'))}
        else { var pantryitemslist = []};
        console.log(pantryitemslist);
        var pantryList = $('ul.pantryitemslist');
        $.each(pantryitemslist, function(i)
        {
            var li = $('<li/>')
                .appendTo(pantryList)
                .text(pantryitemslist[i])
                .appendTo(li);
        });

$(".pantryItemstextentry").keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    { 
    var newpantryitem = $(this).val();
    $(this).val('');
    var pantryList = $('ul.pantryitemslist')
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
}
})
$(".emptypantry").on("click", function() {
    document.getElementById("pantryitemslist").innerHTML = "";
    localStorage.clear();
    pantryitemslist = [];
});
$(".dropdown-item").on("click", function() {
var selectedparameter= $(this).text();
var parameteroptions = $(this).parent().attr("id");
localStorage.setItem(parameteroptions, selectedparameter);
})
$(".search").on("click", function(){
    localStorage.getItem('cuisine');
    localStorage.getItem('mealtype');
    localStorage.getItem('cooktime');
    localStorage.getItem('pantryitemslist');
})

})
