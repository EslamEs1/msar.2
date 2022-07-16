`use strict`;
let dataTime = new Date();
let hour = dataTime.getHours();
let minute = dataTime.getMinutes();
let day = dataTime.getDate();
let month = dataTime.getMonth();
let year = dataTime.getFullYear();
let week = dataTime.getDay();
let weekDay = ["السبت", "الأحد", "الأثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];
let monthDay = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
let hourText = ["صباحاً", "مساءً"];

let x = document.getElementById("time");
x.innerHTML = `${hourText[hour > 12 ? 1 : 0]}، ${hour > 12 ? hour - 12 : hour}:${minute}، ${weekDay[week]}، ${day} ${monthDay[month]} ${year}`;










    (function ($) {
        "use strict";

        var fullHeight = function () {
            $(".js-fullheight").css("height", $(window).height());
            $(window).resize(function () {
                $(".js-fullheight").css("height", $(window).height());
            });
        };
        fullHeight();

        $("#sidebarCollapse").on("click", function () {
            $("#sidebar").toggleClass("active");
        });
    })(jQuery);

// Start Slider
const slider = document.querySelector(".slider");
let isDown = false;
let startX;
let sLeft;
slider.scrollLeft = 0;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    sLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
});
slider.addEventListener("mouseup", () => {
    isDown = false;
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const dragged = x - startX;
    slider.scrollLeft = sLeft - dragged;
});