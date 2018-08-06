


$(function(){
    $("#dynamic-first").load("dynamic-first.html")
    $("#title-one").load("title-one.html")

    //切换
    $(".menu-item").click(function() {
        $("#dynamic-first").load($(this).data("page"))

    })


})