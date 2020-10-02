$(function () {
    $('#top #icon img').animate({
        blurRadius: 50
    }, {
        duration: 1500,
        easing: 'swing',
        step: function () {
            $('.header #icon img').css({
                "-webkit-filter": "blur(" + (50 - this.blurRadius) + "px)",
                "filter": "blur(" + (50 - this.blurRadius) + "px)"
            });
        }
    });

    $('.header #icon #title').animation_text(function (that) {
        that.css({
            "top": "50px",
            "right": "50px"
        });
        that.animate({
            top: "0px",
            right: "0px",
            opacity: "1"
        }, 1500, 'easeOutCubic');
    }, 100);
    $(".sns-feed-btn").click(
        function () {
            $(".sns-feed-btn").toggleClass("sns-feed-btn-open");
        }
    );




    $('.header').click(function () {
        $('html').animate({
            scrollTop: $(".header").height() + 100
        }, 1000, 'easeOutCubic');
    });

    function add_btn(id, url) {



        $('#' + id + ' svg').css({
            "-webkit-filter": "blur(50px)",
            "filter": "blur(50px)"
        });

        $('#' + id + ' svg').animate({
            blurRadius: 50
        }, {
            duration: 1500,
            easing: 'swing',
            step: function () {
                $('#' + id + ' svg').css({
                    "-webkit-filter": "blur(" + (50 - this.blurRadius) + "px)",
                    "filter": "blur(" + (50 - this.blurRadius) + "px)"
                });
            }
        });


        $('#' + id + ' span').animation_text(function (that) {
            that.css({
                "top": "50px",
                "right": "50px"
            });
            that.animate({
                top: "0px",
                right: "0px",
                opacity: "1"
            }, 1500, 'easeOutCubic');
        }, 100);

        setTimeout(function () {
            $('#' + id).hover(
                function () {
                    $('#' + id + ' .boder').stop();
                    $('#' + id + ' .boder').animate({
                        "width": "20em",
                        "opacity": "1"
                    }, 1000, 'easeOutCubic');

                    $('#' + id + ' span').stop();
                    $('#' + id + ' span').animate({
                        "margin-right": "3px",
                        "margin-left": "3px"
                    }, 1000, 'easeOutCubic');

                    $('#' + id + ' svg').stop();
                    $('#' + id + ' svg').animate({
                        "margin-right": "6px",
                        "margin-left": "6px"
                    }, 1000, 'easeOutCubic');

                },
                function () {
                    $('#' + id + ' .boder').stop();
                    $('#' + id + ' .boder').animate({
                        "width": "0px",
                        "opacity": "0"
                    }, 1000, 'easeOutCubic');
                    $('#' + id + ' span').stop();
                    $('#' + id + ' span').animate({
                        "margin-right": "0px",
                        "margin-left": "0px"
                    }, 1000, 'easeOutCubic');

                    $('#' + id + ' svg').stop();
                    $('#' + id + ' svg').animate({
                        "margin-right": "3px",
                        "margin-left": "3px"
                    }, 1000, 'easeOutCubic');
                }
            );
            $('#' + id).click(
                function () {
                    $('#' + id + ' .boder').stop();
                    $('#' + id + ' .boder').animate({
                        "width": "30em",
                        "opacity": "0"
                    }, 1000, 'easeOutCubic');

                    $('#' + id + ' span').stop();
                    $('#' + id + ' span').animate({
                        "margin-right": "6px",
                        "margin-left": "6px",
                        "opacity": "0"
                    }, 1000, 'easeOutCubic');

                    $('#' + id + ' svg').stop();
                    $('#' + id + ' svg').animate({
                        "margin-right": "9px",
                        "margin-left": "9px",
                        "opacity": "0"
                    }, 1000, 'easeOutCubic');
                    setTimeout(
                        function () {
                            window.open(url, "_self");
                        }, 800);
                }
            )

        }, 1500);
    }
    add_btn("twitter", "https://twitter.com/faa0311");
    add_btn("github", "https://github.com/yukinashi");
    add_btn("wordpress", "https://blog.yuki0311.com");

});