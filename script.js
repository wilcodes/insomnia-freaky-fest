
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".iconClose");
const menuIcon = document.querySelector(".icon");
const modalLogoBlack = document.querySelector(".modalLogoBlack");
const modalLogoWhite = document.querySelector(".modalLogoWhite");


function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        modalLogoBlack.style.display = "none";
        modalLogoWhite.style.display = "block";

    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        modalLogoBlack.style.display = "block";
        modalLogoWhite.style.display = "none";

    }
}

hamburger.addEventListener("click", toggleMenu);