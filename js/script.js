var $page = $('html, body');
$('a[href*="#"]').click(function() {
    var toScroll = $($.attr(this, 'href')).offset();
    if (toScroll){
    $page.animate({
        scrollTop: toScroll.top
    }, 400);
    } else {
        $page.animate({
            scrollTop: 0
        }, 400);
    }
    return false;
});