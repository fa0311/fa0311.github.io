$(window).on('load', function() {
    $(window).resize(function() {
        $es.reload();
    });
    $("#loading").animate({
        "opacity": "0"
    }, 500, 'easeOutCubic');
    setTimeout(function() {
        clearTimeout(timeout);
        $("#loading").remove();
    }, 500);
    $('#top #icon img').animate({
        blurRadius: 50
    }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
            $('.header #icon img').css({
                "-webkit-filter": "blur(" + (50 - this.blurRadius) + "px)",
                "filter": "blur(" + (50 - this.blurRadius) + "px)"
            });
        }
    });



    $('.header #icon #title').animation_text(function(that) {
        if ($(window).width() > 1200)
            that.css({
                "top": "70px",
                "right": "70px"
            });
        else
            that.css({
                "top": "30px",
                "right": "30px"
            });

        that.animate({
            top: "0px",
            right: "0px",
            opacity: "1"
        }, 1500, 'easeOutCubic');
        setTimeout(function() {
            that.hover(function() {
                that.stop();
                that.animate({
                    top: "-10px",
                }, 50, 'easeOutCubic');
            }, function() {
                that.stop();
                that.animate({
                    top: "0px",
                }, 200, 'easeOutCubic');
            });
        }, 1500);
    }, 150);
});
$(function() {
    /*
        if (navigator.userAgent.indexOf("windows") !== -1 && navigator.userAgent.indexOf("android") !== -1) {
            $("body").append('<div class="alert"><p>【警告】お使いのブラウザ(ie,edge,safari)は当サイトに対応していません</p></div>');
        }
    */


    $('html,body').animate({
        scrollTop: 0
    }, 1000);
    $("body").append('<div class="menu">' +
            '<p>TopPage</p>' +
            '<div class="boder">' +
            '</div>' +
            '<p>Tech</p>' +
            '<div class="boder">' +
            '</div>' +
            '<p>Popular</p>' +
            '<div class="boder">' +
            '</div>' +
            '<p>Social</p>' +
            '<div class="boder">' +
            '</div>')
        .append('<page ease="reverse_cubic_img">' +
            '<div class="header" id="top">' +
            '<div id="icon">' +
            '<img src="./index-assets/img/icon.jpg" alt="main-img">' +
            '<p id="title">yuki0311.com</p>' +
            '</div>' +
            '</div>' +
            '</page>')
    $(".sns-feed-btn").click(
        function() {
            $(".sns-feed-btn").toggleClass("sns-feed-btn-open");
        }
    );
    [...Array(4)].forEach(function(data, i) {
        $(".menu p").eq(i).hover(
            function() {
                $(".menu .boder").eq(i).stop();
                $(".menu .boder").eq(i).animate({
                    "width": "100px"
                }, 200, 'easeOutCubic');
            },
            function() {
                $(".menu .boder").eq(i).stop();
                $(".menu .boder").eq(i).animate({
                    "width": "0px"
                }, 600, 'easeOutCubic');
            }
        );
        $(".menu p").eq(i).click(
            function() {
                $("html").animate({
                    scrollTop: $es.height * i * $es.scroll_distance
                }, 1500);
                menu_btn_click = function() {};
                setTimeout(function() {
                    menu_btn_click = function() {
                        $(".menu .boder").each(function(index, element) {
                            $(element).css("width", "0");
                        });
                    }
                }, 1500);
            });
    });


    let article_make = function(data) {
        data.forEach(function(d, i) {
            if (i % 3 == 0) {
                $("body").append('<page ease="reverse_cubic_img"><div  class="container"></div></page>');
            }
            $("page").last().children("div").append('<a href="' + d.url + '">' +
                '<div class="item">' +
                '<div class="img">' +
                '<img src=' + d.img + ' alt="画像">' +
                '</div>' +
                '<p class="title">' + d.title + '</p>' +
                '<p>' + d.text + '</p>' +
                '</div></a>');
        })
    };

    article_make([{
        "title": "youtubeの拡張機能",
        "text": "使用した主な技術 JavaScript jQuery",
        "img": "https://blog.yuki0311.com/wp-content/uploads/2020/04/1586959008227.jpg",
        "url": "https://blog.yuki0311.com/youtube-feature-rich/"
    }, {
        "title": "トークを盛り上げてくれるlinebot",
        "text": "使用した主な技術 PHP SQLite LIFF",
        "img": "https://blog.yuki0311.com/wp-content/uploads/2020/04/f256x256.png",
        "url": "http://yuki0311.com/pikapika/"
    }, {
        "title": "cpu使用率を確認できるサイト",
        "text": "使用した主な技術 Python Flask JavaScript",
        "img": "https://pbs.twimg.com/ext_tw_video_thumb/1302187969621553152/pu/img/ncyikzqjvNpQ0veU.jpg",
        "url": "https://blog.yuki0311.com/cpu-checker/"
    }]);
    article_make([{
        "title": "youtubeの拡張機能",
        "text": "使用した主な技術 JavaScript jQuery",
        "img": "https://blog.yuki0311.com/wp-content/uploads/2020/04/1586959008227.jpg",
        "url": "https://blog.yuki0311.com/youtube-feature-rich/"
    }, {
        "title": "トークを盛り上げてくれるlinebot",
        "text": "使用した主な技術 PHP SQLite LIFF",
        "img": "https://blog.yuki0311.com/wp-content/uploads/2020/04/f256x256.png",
        "url": "http://yuki0311.com/pikapika/"
    }, {
        "title": "cpu使用率を確認できるサイト",
        "text": "使用した主な技術 Python Flask JavaScript",
        "img": "https://pbs.twimg.com/ext_tw_video_thumb/1302187969621553152/pu/img/ncyikzqjvNpQ0veU.jpg",
        "url": "https://blog.yuki0311.com/cpu-checker/"
    }]);
    article_make([{
        "title": "トークを盛り上げてくれるlinebot",
        "text": "総利用者数67000人 追加人数6200人",
        "img": "https://blog.yuki0311.com/wp-content/uploads/2020/04/f256x256.png",
        "url": "http://yuki0311.com/pikapika/"
    }, {
        "title": "某ゲームのショップ確認linebot",
        "text": "総利用者数32000人 追加人数32000人",
        "img": "./index-assets/img/fortnite.png",
        "url": "https://fnjpnews.com/fortnitejpdaily-linebot"
    }]);



    $('body').append('<page ease="reverse_cubic">' +
        '<div class="sns-feed">' +

        '<div id="twitter">' +
        '<p>' +
        '<svg class="icon-twitter" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="margin-right: 3px;margin-left: 3px;">' +
        '<title>Twitter</title>' +
        '<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">' +
        '</path>' +
        '</svg><span>Twitter</span>' +
        '</p>' +
        '<div class="boder" style="opacity: 0; width: 0px;"></div>' +
        '</div>' +

        '<div id="github">' +
        '<p>' +
        '<svg class="icon-github" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="margin-right: 3px;margin-left: 3px;">' +
        '<title>GitHub</title>' +
        '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">' +
        '</path>' +
        '</svg><span>GitHub</span>' +
        '</p>' +
        '<div class="boder" style="opacity: 0; width: 0px;"></div>' +
        '</div>' +

        '<div id="wordpress">' +
        '<p>' +
        '<svg class="icon-wordpress" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="margin-right: 3px;margin-left: 3px;">' +
        '<title>WordPress</title>' +
        '<path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0">' +
        '</path>' +
        '</svg><span>WordPress</span>' +
        '</p>' +
        '<div class="boder" style="opacity: 0; width: 0px;"></div>' +
        '</div>' +

        '</div>' +
        '</page>');

    function add_btn(id, url) {
        $('#' + id).hover(
            function() {
                $('#' + id + ' .boder').animate({
                    "width": "20em",
                    "opacity": "1"
                }, 1000, 'easeOutCubic');

                $('#' + id + ' span').animate({
                    "margin-right": "3px",
                    "margin-left": "3px"
                }, 1000, 'easeOutCubic');

                $('#' + id + ' svg').animate({
                    "margin-right": "6px",
                    "margin-left": "6px"
                }, 1000, 'easeOutCubic');

            },
            function() {
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
            function() {
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
                    function() {
                        window.open(url, "_self");
                    }, 800);
            }
        );

    }

    [
        ["twitter", "https://twitter.com/faa0311"],
        ["github", "https://github.com/fa0311"],
        ["wordpress", "https://blog.yuki0311.com"]
    ].forEach(function(d) {
        add_btn(d[0], d[1]);
    });
    easingscroll_load();
    easingscroll_plugin_load();
});
var menu_btn_click = function() {};