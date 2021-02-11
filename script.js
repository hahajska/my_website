//ball mys
gsap.set(".ball", { xPercent: -50, yPercent: -50 });

var ball = document.querySelector(".ball");
var pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
var mouse = { x: pos.x, y: pos.y };
var speed = 0.1;

var fpms = 60 / 1000;

var xSet = gsap.quickSetter(ball, "x", "px");
var ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add((time, deltaTime) => {
  var delta = deltaTime * fpms;
  var dt = 1.0 - Math.pow(1.0 - speed, delta);

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt + 2.25;
  xSet(pos.x);
  ySet(pos.y);
});
// text anim
var tl = new TimelineMax({ duration: 1.25 });
tl.fromTo(".fade-in", 2, { opacity: "0" }, { opacity: "1", delay: 1 })
  .fromTo(".platno", 2, { y: 0 }, { y: "-100%", ease: "Expo.easeInOut" })
  .fromTo(
    ".obdelnik_right_up",
    2,
    { y: "220%" },
    { y: "0%", ease: "power4.InOut" }
  )
  .fromTo(
    ".obdelnik_right",
    2,
    { x: "-620%" },
    { x: "0%", ease: "power4.InOut" },
    "-=2"
  )
  .fromTo(
    ".obdelnik_left",
    2,
    { y: "-220%" },
    { y: "0%", ease: "power4.InOut" },
    "-=2"
  )
  .fromTo(
    ".obdelnik_left_bottom",
    2,
    { x: "620%" },
    { x: "0%", ease: "power4.InOut" },
    "-=2"
  )
  .fromTo(".menu-box", 0.5, { opacity: 0 }, { opacity: 1 }, "+=0.05")
  .fromTo(".firstImage", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.25")
  .fromTo(".secondImage", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.15")
  .fromTo(".thirdImage", 1, { opacity: 0 }, { opacity: 1 }, "-=0.05")
  .fromTo(".nadpis1_fade", 0.5, { opacity: 0 }, { opacity: 1 }, "+=0.05")
  .fromTo(".nadpis2_fade", 0.5, { opacity: 0 }, { opacity: 1 }, "+=0.05")
  .fromTo(".text1_fade", 0.5, { opacity: 0 }, { opacity: 1 }, "+=0.05")
  .fromTo(".btn_fade", 1, { opacity: 0 }, { opacity: 1 }, "-=0.1")
  .fromTo(".nadpis3_fade", 0.5, { opacity: 0 }, { opacity: 1 }, "-=2")
  .fromTo(".li_item1", 0.5, { opacity: 0 }, { opacity: 1 }, "-=1.15")
  .fromTo(".li_item2", 0.5, { opacity: 0 }, { opacity: 1 }, "-=1.05")
  .fromTo(".li_item3", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.95")
  .fromTo(".li_item4", 0.5, { opacity: 0 }, { opacity: 1 }, "-=.85")
  .fromTo(".li_item5", 0.5, { opacity: 0 }, { opacity: 1 }, "-=.75")
  .fromTo(".li_item6", 0.5, { opacity: 0 }, { opacity: 1 }, "-=.65")
  .fromTo(".nadpis_projects_fade", 0.5, { opacity: 0 }, { opacity: 1 }, "-=2")
  .fromTo(".li2_item1", 0.5, { opacity: 0 }, { opacity: 1 }, "-=1.15")
  .fromTo(".li2_item2", 0.5, { opacity: 0 }, { opacity: 1 }, "-=1.05")
  .fromTo(".li2_item3", 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.95")
  .fromTo(".li2_item4", 0.5, { opacity: 0 }, { opacity: 1 }, "-=.85")
  .fromTo(".li2_item5", 0.5, { opacity: 0 }, { opacity: 1 }, "-=.75");

//hover img

const items = document.querySelectorAll(".item");

items.forEach((el) => {
  const image = el.querySelector("img");

  el.addEventListener("mouseenter", (e) => {
    gsap.to(image, 1, { autoAlpha: 1 });
  });

  el.addEventListener("mouseleave", (e) => {
    gsap.to(image, 1.15, { autoAlpha: 0 });
  });

  el.addEventListener("mousemove", (e) => {
    gsap.set(image, { x: e.offsetX - 125 });
  });
});
