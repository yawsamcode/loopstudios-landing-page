const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const mobileNav = document.getElementById("mobile-nav");

openBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  console.log('Button Clilcked')
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
  
