/* =========================================================
   C&T Driving School — main.js
   Loaded with `defer`, so the page is ready when this runs.
   ========================================================= */

/* ---------- Mobile menu ---------- */

const burger = document.querySelector(".burger");
const nav = document.getElementById("site-nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
}

burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) setMenu(false);
});

/* ---------- Expandable details (service cards + FAQ) ---------- */

function toggle(button) {
  const open = button.nextElementSibling.classList.toggle("open");
  button.setAttribute("aria-expanded", open);
  if (button.closest(".tier")) button.textContent = open ? "Hide Detail" : "More Detail";
}

document.addEventListener("click", (e) => {
  const button = e.target.closest(".toggle");
  if (button) return toggle(button);

  // "Other Accepted Documents" opens its card's details too
  const docs = e.target.closest(".details.clickable");
  if (docs) toggle(docs.closest(".tier").querySelector(".toggle"));
});

/* ---------- Copy address ---------- */

const copyLink = document.getElementById("copy-address");
const address = document.querySelector("#contact address").textContent.trim();

copyLink.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard
    .writeText(address)
    .then(() => flash("Copied!"), () => flash("Copy failed"));
});

function flash(text) {
  copyLink.textContent = text;
  setTimeout(() => (copyLink.textContent = "Copy Address"), 2000);
}

/* ---------- FAQ background slideshow ---------- */
// Only runs while the FAQ is on screen, so phones don't download
// every photo up front.

const faq = document.getElementById("faq");
const backgrounds = [
  "files/title.jpg",
  "files/deskone.jpg",
  "files/desktwo.jpg",
  "files/deskclass.jpg",
  "files/awards.jpg",
  "files/signs.jpg",
];
let bgIndex = 0;
let bgTimer;

function nextBackground() {
  faq.style.backgroundImage = `url("${backgrounds[bgIndex]}")`;
  bgIndex = (bgIndex + 1) % backgrounds.length;
  new Image().src = backgrounds[bgIndex]; // preload the next one
}

new IntersectionObserver(([entry]) => {
  clearInterval(bgTimer);
  if (entry.isIntersecting) {
    if (!bgIndex) nextBackground();
    bgTimer = setInterval(nextBackground, 5000);
  }
}, { rootMargin: "200px" }).observe(faq);

/* ---------- Reviews ---------- */

const reviews = [
  {
    name: "Jasper F.",
    text: "This is by far the best driving school to do your road test. My first time getting my license and they were amazing. She taught me and helped me with everything while I was on the road. Very happy with my experience here at C and T driving school. Thank you to Thanh Pham for your kindness and kind service. If your looking for somewhere to get your drivers license, C and T driving school is the way to do it.",
    link: "https://maps.app.goo.gl/kzeeFQGZZyFi7KHH8",
  },
  {
    name: "Sung Jin S.",
    text: "Whether navigating busy streets or handling unexpected situations, they stayed composed and made safety the top priority. Their smooth driving style and awareness of surroundings made the entire experience comfortable and stress-free. It's clear they drive not just with skill, but with a strong sense of responsibility. Highly recommend as a driver who puts safety and good sense first!",
    link: "https://share.google/kGpYcC2xonAfFTsjp",
  },
  {
    name: "Jared S.",
    text: "I came in here needing to take a driver's test without an appointment, and they had me in the driver's seat and taking the test in 30 minutes! They are so friendly, and it's affordable, too. I'm so grateful for their help! If you need to take a class or a driver's test, do it here!",
    link: "https://share.google/aos6ivbXOGorA5JLz",
  },
  {
    name: "Mohamed Y.",
    text: "My brother had great experience at C & T driving. They were kind from start to finish. I plan on bringing all my siblings to take their road test here!",
    link: "https://share.google/7txeQGDx9wSVakVZC",
  },
  {
    name: "Angelica M.",
    text: "Thanh Pham is so amazing she is so lovely and amazing she made me feel so calm when doing my test! I passed! She made this whole experience wonderful!! I recommend it here!! 💕💕",
    link: "https://share.google/wqBWQYkcCajH4AK9S",
  },
  {
    name: "Chelsey N.",
    text: "Super helpful on my son’s driving test. They were clear with what they wanted a d what he should expect. He felt comfortable and confident going in and was able to pass! They left us with very clear next steps in getting his license.",
    link: "https://share.google/AuulZrMNmoWZUY0tE",
  },
  {
    name: "Grey G.",
    text: "They called me to make sure i would make it on time! They are so kind and fantastic, she gave me pointers on what would be on the test. Went over the paperwork and what was expected. Welcoming atmosphere and open whenever you need them! Absolutely wonderful! Thank you!",
    link: "https://share.google/qp2LCcgf1nbHFohyT",
  },
  {
    name: "Larissa J.",
    text: "C&T driving school is amazing. I went in to take my road test today and was super nervous but she made me feel so comfortable and confident. Super laid back and helpful. I would definitely recommend C&T driving school to everyone.",
    link: "https://share.google/jNpKiUntiYE7wliz5",
  },
  {
    name: "Gustavo D.",
    text: "My experience with the C and T Driving School was excellent. Thanh Pham was very helpful and very clear on the instructions. She helped me a lot with my road test. Would definitely recommend to everybody needing to take the road test and classes for their driving license!",
    link: "https://share.google/YpKc3F34kR9pIkShw",
  },
  {
    name: "Paul M.",
    text: "They scheduled me in very quickly for my state road test. They are very professional and courteous. Cuong reviewed my previous test and made sure I was aware of what needed to be done. I passed my test!",
    link: "https://share.google/un65NLvXNIMnfSist",
  },
  {
    name: "George R.",
    text: "A good driving school. I’m amazed by the instructors professionalism and very helpful. I would recommend them 100% to everybody who’s getting a driver license for the first time or taking the road test. If you are looking for a good driving school for your teenagers or yourself, this is the place to go. Thank you C and T driving school.",
    link: "https://share.google/4vnz1UqXYeMhMgCEi",
  },
  {
    name: "Ramansh S.",
    text: "I just gave my driving license today! The establishment is so very kind and helpful. I gained several tips that not even my friends knew beforehand. Totally worth the experience! Fully recommend this place.",
    link: "https://share.google/9Od6VowGzkZTbpD4N",
  },
];

const avatarColors = [
  "rgba(255, 69, 58, 0.5)",   // red
  "rgba(255, 159, 10, 0.5)",  // orange
  "rgba(255, 214, 10, 0.5)",  // yellow
  "rgba(52, 199, 89, 0.5)",   // green
  "rgba(90, 200, 250, 0.5)",  // light blue
  "rgba(0, 122, 255, 0.5)",   // blue
  "rgba(88, 86, 214, 0.5)",   // indigo
  "rgba(175, 82, 222, 0.5)",  // purple
  "rgba(255, 45, 85, 0.5)",   // hot pink
  "rgba(255, 105, 180, 0.5)", // bubblegum
];

document.getElementById("reviews-wrapper").innerHTML = reviews
  .map(
    ({ name, text, link }, i) => `
      <div class="card swiper-slide">
        <div class="review-header">
          <div class="avatar" style="background-color: ${avatarColors[i % avatarColors.length]}">${name[0]}</div>
          <div>
            <h3 class="name">${name}</h3>
            <div class="stars" aria-label="5 stars">★★★★★</div>
          </div>
        </div>
        <p class="description">${text}</p>
        <a class="button" href="${link}" target="_blank" rel="noopener noreferrer"
           aria-label="Read ${name}'s full review on Google">Read More</a>
      </div>`
  )
  .join("");

new Swiper(".slide-content", {
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  autoplay: { delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
    1100: { slidesPerView: 4 },
  },
});