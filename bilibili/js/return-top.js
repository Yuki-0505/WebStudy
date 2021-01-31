(function () {
    $(window).scroll(function(){
        var top = $(document).scrollTop();
        if (top > 700) {
            $('.return-top').attr('class', 'return-top active')
        } else {
            $('.return-top').attr('class', 'return-top')
        }
    });
})();