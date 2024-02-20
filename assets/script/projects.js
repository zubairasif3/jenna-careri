
$(window).scroll(function() {
    if($(window).scrollTop() > 55){
        $(".header .boottom-menu").addClass("active");
    }else{
        $(".header .boottom-menu").removeClass("active");
    }
});
$(".bm-flex a").click(function() {
    $(".bm-flex a").removeClass("active");
    $(this).addClass("active");
})