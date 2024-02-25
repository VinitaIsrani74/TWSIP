const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});


navLinks.addEventListener("click" , (e) =>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class",'fa-solid fa-bars')
})

const scrollRevealOption ={
  distance: "50px",
  origin:"bottom",
  duration: 1000,
};

//container
ScrollReveal().reveal(".container-content h1",{
  ...scrollRevealOption,
}) 
ScrollReveal().reveal(".container-content h2",{
  ...scrollRevealOption,
  delay: 500,
}) 
ScrollReveal().reveal(".container-content p",{
  ...scrollRevealOption,
  delay: 1000,
}) 
ScrollReveal().reveal(".socials",{
  ...scrollRevealOption,
  delay: 1500,
}) 
