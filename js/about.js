const content = document.querySelector('.content');
const xm = document.querySelector('.xm');
const bm = document.querySelector('.bm');
const upnav = document.querySelector('.upnav');
const cg = document.querySelector('.cg');

function handleWindowSize() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 480) {
        cg.style.display = "none";
    } else {
        cg.style.display = "block";
    }
}
window.addEventListener("resize", handleWindowSize);

bm.onclick = function () {
    upnav.classList.add('active');
    cg.style.display = "none";
    xm.style.display = "block";
}


xm.onclick = function () {
    upnav.classList.remove('active');
    cg.style.display = "block";
    xm.style.display = "none";
}



$(window).on('load', function () {
    let aboutEvent = function () {
        let win = $(window),
            _winW = win.width(),
            $start = $("div.content-1"),
            $brith = $("div.content-2"),
            $ourWork = $("div.content-3"),
            $orgList = $("div.content-4"),
            $bottomTxt = $("div.content-5")
            ;

        win.on("scroll", function () {
            let _scrollTop = win.scrollTop();
            if (_scrollTop >= 100 && _scrollTop < 300) {
                $brith.find(".list02").addClass("active");
            } else if (_scrollTop >= 600 && _scrollTop < 700) {
                $ourWork.addClass("active");
            } else if (_scrollTop >= 1200 && _scrollTop < 1400) {
                $orgList.find(".list04, .list05").addClass("active");
            } else if (_scrollTop >= 1900 && _scrollTop < 2100) {
                $bottomTxt.find(".list06, .list07").addClass("active");
            }
        })
    }
    aboutEvent();
    if ($(window).width() >= 1600) {
        $(".list01, .bginfo01").addClass("active");

    }
})
