$(function(){
    var lastScrollTop = 0, delta = 500;
    $(window).scroll(function(){
        var nowScrollTop = $(this).scrollTop();
        if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
            if (nowScrollTop > lastScrollTop){
                // ACTION ON
                // SCROLLING DOWN 
            } else {
                // ACTION ON
                // SCROLLING UP 
                $('.scroll-to-top').css('display', 'none')
            }
        lastScrollTop = nowScrollTop;
        }
    });
});