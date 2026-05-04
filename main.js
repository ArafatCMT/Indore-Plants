// Toggle Button 
const navMenu = document.querySelector("#nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-0");
    hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-0");
        hamburger.classList.toggle("ri-close-large-line");
    })
});


// show scroll up 
const scrollUp = ()=>{
    const scrollUpBtn = document.getElementById("scroll-up");

    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    }
    else{
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

window.addEventListener("scroll", scrollUp);

// change background header 
const scrollHeader = ()=>{
    const header = document.getElementById("navbar");

    // scrollY mane holo page koto pixel scroll hoise (vertical)
    // Jodi user 250px ba tar beshi scroll kore, tahole if block run hobe
    if(this.scrollY >= 250){
        header.classList.add("border-b", "border-yellow-500");
    }
    else{
        header.classList.remove("border-b", "border-yellow-500");
    }
};

window.addEventListener("scroll", scrollHeader);

// scroll section active link 
const activeLink = () =>{
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach(section =>{
        const sectionTop = section.offsetTop; // oi section ta page er top theke koto px niche oi ta sectionTop variable e store kortaci


        // jodi scroll position (scrollY) section er top theke 60px upore ba niche chole jai
        // tahole oi section ke current dhora hocche
        // -60 use kora hoy navbar height adjust korar jonno
        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id");
        };
    });

    navlinks.forEach(link =>{
        link.classList.remove("active");

        if(link.href.includes(current)){
            link.classList.add("active");
        }
    });
};

window.addEventListener("scroll" , activeLink);

// Swiper 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay:
    {
        delay:
            3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    },
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
});

// Scroll reveal animation 
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
});

sr.reveal(`.home-data, .about-top, .popular-top, .review-top, .review-swiper, .footer-icon, .footer-content, .copy-right`);
sr.reveal(`.home-image`,{delay:500, scale: 0.5});

sr.reveal(`.service-card , .popular-card`, {interval:100});

sr.reveal(`.about-leaf`, {delay:1000, origin:"right"});
sr.reveal(`.about-item-1-content, .about-item-2-img`, {origin:"right"});
sr.reveal(`.about-item-2-content, .about-item-1-img`, {origin:"left"});

sr.reveal(`.review-leaf, .footer-floral`, {delay:1000, origin:"left"});