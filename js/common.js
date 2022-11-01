const content = document.querySelector('.content');
const upside = document.querySelector('.upside');
const triggerMenu = document.querySelector('.trigger-menu');
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


content.onclick = function () {
    upside.classList.add('active');
    cg.style.display = "none";
    xm.style.display = "block";

}
bm.onclick = function () {
    upnav.classList.add('active');
    cg.style.display = "none";
    xm.style.display = "block";
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
    } else if (upnav.classList.contains('active')) {
        upnav.classList.remove('active');
        cg.style.display = "block";
        xm.style.display = "none";
    } else {
        cg.style.display = "block";
        xm.style.display = "none";
    }
}


// $.ajax({
//     url: "./data.json",
//     success: function (data) {

//         let tags = '', name, category, date, client, concept, role, topimg;

//         $.each(data.items, function () {
//             name = this.name
//             date = this.data
//             category = this.category
//             client = this.client
//             concept = this.concept
//             role = this.role
//             topimg = this.topimg

//             console.log(category);
//             tags = `<div class="content-ex2">
//             <div class="mbh2">
//                 <h2>${name}</h2>
//             </div>
//             <dl class="dl-box">
//                 <dt><b>Category</b></dt>
//                 <dd>
//                     <span><img src="./img/icon_character01_off.gif" alt="카테고리"></span>
//                     <span><img src="./img/icon_character02_off.gif" alt="카테고리"></span>
//                     <span><img src="./img/icon_character03_on.gif" alt="카테고리"></span>
//                     <span><img src="./img/icon_character04_off.gif" alt="카테고리"></span>
//                 </dd>
//             </dl>
//         </div>
//         <div class="content-ex3">
//             <dl class="fl">
//                 <dt><b>Date</b></dt>
//                 <dd>${date}</dd>
//             </dl>
//             <dl class="fl">
//                 <dt><b>Client</b></dt>
//                 <dd>${client}</dd>
//             </dl>
//         </div>
//         <div class="content-ex4">
//             <dl>
//                 <dt><b>Concept</b></dt>
//                 <dd>${concept}</dd>
//             </dl>
//         </div>
//         <div class="content-ex5">
//             <dl>
//                 <dt><b>Role</b></dt>
//                 <ul>
//                     <li>${role}</li>
//                 </ul>
//             </dl>
//         </div>
//     </div>

//     <div class="middle-view">
//         <div class="middle-img">
//             <img src="${topimg}" alt="본죽">
//         </div>
//     </div>`;

//         })
//         $('.information').html(tags);
//     }
// })