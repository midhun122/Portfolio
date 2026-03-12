// smooth scroll

const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const section = document.querySelector(this.getAttribute("href"));

section.scrollIntoView({
behavior:"smooth"
});

});

});


// typing animation

var typed = new Typed("#typing", {

strings: [
"BCA(hons) Student",
"Aspiring Full Stack Developer",
"Learning Web Development",
"Building Real Projects"
],

typeSpeed: 50,
backSpeed: 30,
loop: true

});