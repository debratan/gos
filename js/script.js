$(".sidebar ul li").on("click", function(){
    $(".sidebar ul li.profile").removeClass("profile");
    $(this).addClass("profile");
});

$(".btn-navmenu").on("click", function(){
    $(".sidebar").removeClass("profile");
});

function update(){
    alert("You are not allow to  edit this profile");
}