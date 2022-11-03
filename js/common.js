const content = document.querySelector('.content');
const upnavinput = document.querySelectorAll('.content li');
const slideinput = document.querySelectorAll('.last li');
const upside = document.querySelector('.upside');
const triggerMenu = document.querySelector('.trigger-menu');
const xm = document.querySelector('.xm');
const bm = document.querySelector('.bm');
const upnav = document.querySelector('.upnav');
const cg = document.querySelector('.cg');

jQuery(function($) {
    $(".content").css("display", "none");
    $(".content").fadeIn(2000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $(".content").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});

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
    content.classList.add('active');
}

triggerMenu.onclick = function () {
    upside.classList.remove('active');
}
xm.onclick = function () {
    if (upnav.classList.contains('active') && upside.classList.contains('active')) {
        upnav.classList.remove('active');
        cg.style.display = "none";
        xm.style.display = "block";
    } else if (upside.classList.contains('active')) {
        upside.classList.remove('active');
        cg.style.display = "block";
        xm.style.display = "none";
        content.classList.remove('active');
    } else if (upnav.classList.contains('active')) {
        upnav.classList.remove('active');
        content.classList.remove('active');
        cg.style.display = "block";
        xm.style.display = "none";
    } else {
        cg.style.display = "block";
        xm.style.display = "none";
    }
}

let btn = $('.scrolltop');

$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


$.ajax({
    url: "./data.json",
    success: function (data) {



        upnavinput.forEach(function (ele, idx) {
            ele.onclick = function () {
                upside.classList.add('active');
                cg.style.display = "none";
                xm.style.display = "block";
                item(idx)
            }
        })

        slideinput.forEach(function (ele, idx) {
            ele.onclick = function () {
                upside.classList.add('active');
                cg.style.display = "none";
                xm.style.display = "block";
                item(idx)
            }
        })


        function item(n) {
            let tags = '', name, category, date, client, concept, role, topimg, alt;



            $.each(data.items, function (i) {
                name = this.name
                date = this.date
                category = this.category
                client = this.client
                concept = this.concept
                role = this.role

                if (n == i) {
                    tags = `<div class="content-ex2">
                        <div class="mbh2">
                            <h2>${name}</h2>
                        </div>
                        <dl class="dl-box">
                            <dt><b>Category</b></dt>
                            <dd>
                                <span><img src="${category[0]}" alt="카테고리"></span>
                                <span><img src="${category[1]}" alt="카테고리"></span>
                                <span><img src="${category[2]}" alt="카테고리"></span>
                                <span><img src="${category[3]}" alt="카테고리"></span>
                            </dd>
                        </dl>
                    </div>
                    <div class="content-ex3">
                        <dl class="fl">
                            <dt><b>Date</b></dt>
                            <dd>${date}</dd>
                        </dl>
                        <dl class="fl">
                            <dt><b>Client</b></dt>
                            <dd>${client}</dd>
                        </dl>
                    </div>
                    <div class="content-ex4">
                        <dl>
                            <dt><b>Concept</b></dt>
                            <dd>${concept}</dd>
                        </dl>
                    </div>
                    <div class="content-ex5">
                        <dl>
                            <dt><b>Role</b></dt>
                            <ul>
                                ${role}
                            </ul>
                        </dl>
                    </div>`
                        ;
                }
            })
            $('.input').html(tags);


            $.each(data.items, function (j) {
                topimg = this.topimg;
                alt = this.alt;
                let loading = document.createElement('img');
                loading.src = topimg;

                if (n == j) {
                    tags = `<div class="middle-view">
                    <div class="middle-img">
                        <img src="${topimg}" alt="${alt}">
                    </div>
                </div>
            </div>`
                        ;
                }
            })
            $('.input2').html(tags);
        }
    }
})





jQuery(document).ready(function ($) {

    let slideCount = $('.last ul li').length;
    let slideWidth = $('.last ul li').width();
    let slideHeight = $('.last ul li').height();
    let sliderUlWidth = slideCount * slideWidth;

    $('.last').css({ width: slideWidth, height: slideHeight });

    $('.last ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('.last ul li:last-child').prependTo('.last ul');

    function moveLeft() {
        $('.last ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.last ul li:last-child').prependTo('.last ul');
            $('.last ul').css('left', '');
        });
    };

    function moveRight() {
        $('.last ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.last ul li:first-child').appendTo('.last ul');
            $('.last ul').css('left', '');
        });
    };

    $('.prev').click(function () {
        moveLeft();
    });

    $('.next').click(function () {
        moveRight();
    });

});
