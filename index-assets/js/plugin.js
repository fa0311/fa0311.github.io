/*jQuery追加プラグイン*/
(function ($) {
    $.fn.acv = function (that) {
        var elements = this;

        setTimeout(loop, 100);

        function loop() {
            let scrollTop = $(window).scrollTop();
            let scrollBtm = scrollTop + $(window).height();
            let targetTop = elements.offset().top;
            let targetBtm = targetTop + elements.height();
            if (scrollBtm > targetTop && scrollTop < targetBtm) {
                setTimeout(that, 500);
            } else {
                setTimeout(loop, 100);
            }
        }
    }

    $.fn.animation_text = function (fn, time) {
        let i = 0;
        let text_list = this.text();
        this.text("");
        while (text_list[i]) {
            this.append('<span style="position: relative; opacity: 0;">' + text_list[i] + '</span>');
            i++;
        }
        let ii = 0;
        let iii = 0;
        var that = this.find("span");
        this.children().each(function () {
            setTimeout(
                function () {
                    fn(that.eq(iii));
                    iii++;
                }, ii * time);
            ii++;
        });
    }
})(jQuery);

function easingscroll_plugin_load() {

    $(".menu p").eq($es.eq).addClass("view");
    $es.view_page_change = function (i) {
        $(".menu p").removeClass("view");
        if ($(window).width() > 1200) {
            $(".menu p").eq([0, 1, 2, 3][i]).addClass("view");
        } else if ($(window).width() > 800) {
            $(".menu p").eq([0, 1, 1, 2, 3][i]).addClass("view");
        }else{
            $(".menu p").eq([0, 1, 1, 1, 2, 2, 3][i]).addClass("view");
        }
    }
    $es.easelist["reverse_cubic_img"] = function (n) {
        $("page").eq($es.eq).find("img").css({
            "top": n * -0.2
        });
        return $es.easelist["reverse_cubic"](n);
    }
}