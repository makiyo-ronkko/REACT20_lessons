/* Scroll top button */

$(document).ready(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //appear after 100px scroll down
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
});


// Focus Covers Full Area
$(document).ready(function () {
    $("#custom-search").click(function () {
        $(".search-query").focus();
    });
});