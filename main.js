/* =========================================================
   C&T Driving School — main.js
   Loaded with `defer`, so the DOM is ready when this runs.
   ========================================================= */

const SCHOOL = {
  name: "C&T Driving School",
  address: "1265 W 500 North, Salt Lake City, UT 84116",
  coords: [40.7799209, -111.9276365],
};

/* ---------- Mobile menu ---------- */

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const isOpen = menu.classList.toggle("active");
  document.querySelector(".burger")?.setAttribute("aria-expanded", isOpen);
}

/* ---------- Copy address ---------- */

function copyAddress(event) {
  event.preventDefault();
  const link = event.currentTarget;

  navigator.clipboard
    .writeText(SCHOOL.address)
    .then(() => flashText(link, "Copied!"))
    .catch(() => flashText(link, "Copy failed"));
}

function flashText(el, text, ms = 2000) {
  const original = el.dataset.label ?? el.textContent;
  el.dataset.label = original;
  el.textContent = text;
  setTimeout(() => (el.textContent = original), ms);
}

/* ---------- Service tier details ---------- */

function toggleDetails(el) {
  const tier = el.closest(".tier");
  const box = tier.querySelector(".extra-details");
  const button = tier.querySelector("button.contact-button");
  const isOpen = box.classList.toggle("open");

  button.textContent = isOpen ? "Hide Detail" : "More Detail";
  button.setAttribute("aria-expanded", isOpen);
}

// "Other Accepted Documents" rows open the tier's details too
document.querySelectorAll(".details.clickable").forEach((li) => {
  li.style.cursor = "pointer";
  li.addEventListener("click", () => toggleDetails(li));
});

/* ---------- FAQ ---------- */

function toggleQuestions(button) {
  const isOpen = button.nextElementSibling.classList.toggle("open");
  button.setAttribute("aria-expanded", isOpen);
}

/* ---------- FAQ background slideshow ---------- */

const faqSection = document.getElementById("faq");
const backgrounds = [
  "files/title.jpg",
  "files/deskone.jpg",
  "files/desktwo.jpg",
  "files/deskclass.jpg",
  "files/awards.jpg",
  "files/signs.jpg",
];

// Preload so each swap doesn't flash
backgrounds.forEach((src) => (new Image().src = src));

let bgIndex = 0;
function nextBackground() {
  faqSection.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % backgrounds.length;
}

nextBackground();
setInterval(nextBackground, 5000);

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

function createReviewCard({ name, text, link }, i) {
  const card = document.createElement("div");
  card.className = "card swiper-slide";
  card.innerHTML = `
    <div class="card-content">
      <div class="review-header">
        <div class="avatar" style="background-color:${avatarColors[i % avatarColors.length]}; color:white;">
          ${name.charAt(0)}
        </div>
        <div class="reviewer-info">
          <h3 class="name">${name}</h3>
          <div class="stars" aria-label="5 stars">★★★★★</div>
        </div>
      </div>
      <p class="description">${text}</p>
      <a class="button" href="${link}" target="_blank" rel="noopener noreferrer">Read More</a>
    </div>
  `;
  return card;
}

document
  .getElementById("reviews-wrapper")
  .append(...reviews.map(createReviewCard));

new Swiper(".slide-content", {
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
    1100: { slidesPerView: 4 },
  },
});

/* ---------- Map ---------- */

const map = L.map("map").setView(SCHOOL.coords, 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker(SCHOOL.coords).addTo(map).bindPopup(SCHOOL.name).openPopup();