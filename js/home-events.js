window.addEventListener("scroll",function(){

    let header=this.document.querySelector("header");
    header.classList.toggle("sticky",this.window.scrollY>0);
});

$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    });
});

//$('body').scrollTo('#news');