$(function () {



    $('#header #icon img').css('display', '');
    $('#header #icon img').animate({
        blurRadius: 50
    }, {
        duration: 1500,
        easing: 'swing',
        step: function () {
            $('#header #icon img').css({
                "-webkit-filter": "blur(" + (50 - this.blurRadius) + "px)",
                "filter": "blur(" + (50 - this.blurRadius) + "px)"
            });
        }
    });

    text('#header #icon #title').add_text('yuki0311.com', 'position: relative; opacity: 0;').animation_list(function (id) {
        $(id).css({
            "top": "50px",
            "right": "50px"
        });
        $(id).animate({
            top: "0px",
            right: "0px",
            opacity: "1"
        }, 1500, 'easeOutCubic');
    }, 100);

    $('#header #icon #title').animate({
        scrollTop: $("#header").height() + 100
    }, 1000, 'easeOutCubic');




    $('#header').click(function () {
        $('html').animate({
            scrollTop: $("#header").height() + 100
        }, 1000, 'easeOutCubic');
    });

    function add_btn(id, btn, url) {


        $('#' + id).acv(function () {

            $('#' + id + ' svg').css("display", "");
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


            text('#' + id + ' p').add_text(btn, 'position: relative; opacity: 0;').animation_list(function (id) {
                $(id).css({
                    "top": "50px",
                    "right": "50px"
                });
                $(id).animate({
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
                            "width": "50vw",
                            "opacity": "1"
                        }, 1000, 'easeOutCubic');

                        $('#' + id + ' p *').stop();
                        $('#' + id + ' p *').animate({
                            "margin-right": "3px",
                            "margin-left": "3px"
                        }, 1000, 'easeOutCubic');

                    },
                    function () {
                        $('#' + id + ' .boder').stop();
                        $('#' + id + ' .boder').animate({
                            "width": "0px",
                            "opacity": "0"
                        }, 1000, 'easeOutCubic');
                        $('#' + id + ' p *').stop();
                        $('#' + id + ' p *').animate({
                            "margin-right": "0px",
                            "margin-left": "0px"
                        }, 1000, 'easeOutCubic');

                    }
                );
                $('#' + id).click(
                    function () {
                        $('#' + id + ' .boder').stop();
                        $('#' + id + ' .boder').animate({
                            "width": "80vw",
                            "opacity": "0"
                        }, 1000, 'easeOutCubic');

                        $('#' + id + ' p *').stop();
                        $('#' + id + ' p *').animate({
                            "margin-right": "6px",
                            "margin-left": "6px",
                            "opacity": "0"
                        }, 1000, 'easeOutCubic');
                        setTimeout(
                            function () {
                                window.open(url, "_self");
                            }, 800);
                    }
                )

            }, 1500);
        });
    }
    add_btn("twitter", "Twitter", "https://twitter.com/faa0311");
    add_btn("github", "GitHub", "https://github.com/yukinashi");
    add_btn("wordpress", "Blog", "https://blog.yuki0311.com");

});