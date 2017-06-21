$(function() {
    $(window).on("load", function() {
        //=========================================滑动
        var mySwiper = new Swiper('.swiper-container', {
            onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                // console.log(swiper.activeIndex);  //页面切换完毕，如果有自定义菜单可以进行对应
                //swiper.activeIndex是当前索引值。
                if(swiper.activeIndex==3){
                    var c4 = $('.forth.quan');
                    c4.circleProgress({
                        startAngle: -Math.PI / 4 * 0.5,
                        value: 0,
                        lineCap: 'round',
                        fill: {color: 'rgba(255,255,255,.4)'}
                    });
                    setTimeout(function () {
                        c4.circleProgress('value', 0.84);
                    }, 1000);
                }
                else{
                    var c4 = $('.forth.quan');
                    c4.circleProgress({
                        startAngle: -Math.PI / 4 * 0.5,
                        value: 0,
                        lineCap: 'round',
                        fill: {color: 'rgba(255,255,255,.4)'}
                    });
                    setTimeout(function () {
                        c4.circleProgress('value', 0);
                    }, 0);
                }
            },
            //pagination: '.swiper-pagination',//=====添加原点按钮的容器，根据页面元素添加圆点导航
            //paginationClickable: true,       //=====圆点导航可以点击。true可以点击切换，false不可以点击切换。
            mousewheelControl: true, //=====给鼠标添加控制。先后顺序不对会有问题。
            direction: 'vertical', //======垂直上下运动，默认是左右滑动。
            preventClicks: false,//======值为true，swiper里的a标签在滑动事件不会跳转，点击才跳转。
        })
    })
});


$(function(){
    window.onload = function()
    {
        var $li = $('#tab li');
        var $ul = $('#content ul');
        $li.click(function(){
            var $this = $(this);
            var $t = $this.index();
            $li.removeClass();
            $this.addClass('current');
            $ul.css('display','none');
            $ul.eq($t).css('display','block');
        })
    }
});
/*判断是手机端还是app*/
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
       /* document.writeln("phone");*/
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                };

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);


    } else {
        /*document.writeln("pc");*/
        (function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    docEl.style.fontSize = 40 * (clientWidth / 640) + 'px';
                };

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
        $("canvas").css("width","400px")
    }
}

browserRedirect();

