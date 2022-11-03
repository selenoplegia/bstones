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
