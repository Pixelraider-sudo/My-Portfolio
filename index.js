// LOADER
window.addEventListener("load", () => {
    document.querySelector(".loader").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 800);
});

// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// SCROLL REVEAL
function reveal(){
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if(elementTop < windowHeight - revealPoint){
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);

// ACTIVE NAV HIGHLIGHT
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(a => {
        a.classList.remove("active");
        if(a.getAttribute("href").includes(current)){
            a.classList.add("active");
        }
    });
});
