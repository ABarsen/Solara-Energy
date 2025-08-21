// navbar tools

const hamburger= document.querySelector(.hamberger)
const nav_menu =document.querySelector(.nav_menu)

hamberger.addeventlistener("click" ,()=>{

    nav_menu.classlist.toggle("active");
    hamburger.classlist.toggle("active");
});
//closing menu when clicked
document.querySelector(".nav.nav_menu a").Foreach(link=>{
    link.addeventlistener("click", ()=>{
        nav_menu.classlist.remove("active");
        hamburger.classlist.remove("active");
    });
});

// scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
 
// portfolio slider
const track = document.getElementById("portfolioTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicatorsContainer = document.getElementById("portfolioIndicators");

const cards = document.querySelectorAll(".portfolio-card");
let currentIndex = 0;

cards.forEach((_, index) => {
  const indicator = document.createElement("span");
  indicator.classList.add("indicator");
  if (index === 0) indicator.classList.add("active");
  indicator.addEventListener("click", () => moveToSlide(index));
  indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll(".indicator");

function updateIndicators() {
  indicators.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function moveToSlide(index) {
  currentIndex = index;
  track.style.transform = `translateX(-${100 * currentIndex}%)`;
  updateIndicators();
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  moveToSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  moveToSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length;
  moveToSlide(currentIndex);
}, 6000);