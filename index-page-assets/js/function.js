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
})(jQuery);

/*アニメーションする文字*/
class animation_text {

    constructor(id) {
        this.id = id;
    }

    add_text(text, style = "") {
        let i = 0;
        while (text[i]) {
            $(this.id).append('<span style="' + style + '" id=' + i + '>' + text[i] + '</span>');
            i++;
        }
        return this;
    }
    animation_list(fn, time) {
        let i = 0;
        let ii = 0;
        let id = this.id;
        $(id).children().each(function () {
            setTimeout(
                function () {
                    fn(id + ' #' + ii);
                    ii++;
                }, i * time);
            i++;
        });
    }

}

var text = function (id) {
    return new animation_text(id);
};