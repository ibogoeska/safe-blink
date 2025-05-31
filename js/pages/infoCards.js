import {
  getLoggedInUser,
  loadCommentsFromLocaleStorage,
  saveCommentsToLocaleStorage,
} from "../sessionHelper.js";
import { userProfileImages } from "./userProfile.js";
import { infoCardsVideoPlay } from "./videoPlay.js";

const MOST_WATCHED = "most-watched";
const ACTUAL = "actual";
const PRIVACY = "privacy";
const THEME2 = "theme2";
const THEME3 = "theme3";
const ALPHABETIC = "alphabetic";

export const infoCards = [
  {
    id: 1,
    title: "Лоши навики при 'Live streaming' ",
    image: "../assets/images/img-1.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: MOST_WATCHED,
  },
  {
    id: 2,
    title: "Праќање на звучни пораки",
    image: "../assets/images/img-2.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: PRIVACY,
  },
  {
    id: 3,
    title: "Безбедност при користење на апликации",
    image: "../assets/images/img-3.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: ALPHABETIC,
  },
  {
    id: 4,
    title: "Различни уреди, различни проблеми",
    image: "../assets/images/img-4.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: MOST_WATCHED,
  },
  {
    id: 5,
    title: "Што се случува во позадина додека сурфаш",
    image: "../assets/images/img-5.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "2025-04-10",
    category: THEME2,
  },
  {
    id: 6,
    title: "Што е важно кога снимаш некој друг",
    image: "../assets/images/img-6.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "2025-04-10",
    category: ALPHABETIC,
  },
  {
    id: 7,
    title: "Безбедност онлајн и офлајн",
    image: "../assets/images/img-7.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "2025-04-10",
    category: THEME3,
  },
  {
    id: 8,
    title: "Кој може да ја следи твојата активност на интернет?",
    image: "../assets/images/img-8.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: ACTUAL,
  },
  {
    id: 9,
    title: "Како да (не) го користиш инстаграм",
    image: "../assets/images/img-1.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: ACTUAL,
  },
  {
    id: 10,
    title: "Споделување на содржини",
    image: "../assets/images/img-2.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: THEME2,
  },
  {
    id: 11,
    title: "Хакерски напади",
    image: "../assets/images/img-3.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: THEME3,
  },
  {
    id: 12,
    title: "Ризици при работење преку интернет",
    image: "../assets/images/img-4.jpg",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam ea eos architecto facere corporis. Esse cum quos ipsa atque veniam quaerat quae, voluptas aliquid id officia odio eius dolores et? Lorem, ipsum or sit amet consectetur adipisicing elit.",
    date: "02/05/25",
    category: PRIVACY,
  },
];

function displayInfoCards() {
  const cardsContainer = document.querySelector(".cardsContainer");
  cardsContainer.innerHTML = "";
  const loggedInUser = getLoggedInUser();
  infoCards.forEach((c) => {
    const iCard = document.createElement("div");
    iCard.classList.add("card", "rounded-4");
    iCard.setAttribute("data-category", `${c.category}`);
    iCard.innerHTML = `
        <img src="${c.image}"/>
        <div class="card-body p-3">
          <div class="card-title fw-bold">${c.title}</div>
          <p class="card-info">${c.info}</p>
          <p class="card-date">Објавено на ${c.date}</p>
        </div>
      `;

    iCard.addEventListener("click", () => {
      const modalBody = document.querySelector("#infoCardModal .modal-body");

      modalBody.innerHTML = `
        <div class="container-fluid d-flex">
          <div class="modal-left me-md-5">
              <h5 class="modal-title">${c.title}</h5>
              <p>${c.info}</p>
              <p class="modal-date text-secondary">Објавено на ${c.date}</p>
              <div class="modal-comment-form p-3 mb-3 rounded-4">
                <input type="text" placeholder="Остави коментар..." id="commentInput" class="mb-2" />
                <div class="circle d-flex align-items-center mb-2">
                  <div class="user-comments-avatar"><img src="../../assets/images/placeholder-male.jpg" /></div>
                  <span class="d-block mb-2 ms-2">Име и презиме</span>
                </div>
                <button id="submitComments" class="btn btn-secondary btn-sm d-block">Постирај коментар</button>
              </div>
  
                <div id="commentsSection"></div>
              </div>
  
              <div class="modal-right">
                <img src="${c.image}" alt="Card image" class="info-modal-image" />
                <div class="play-btn video-btn">
                  <i class="fa-solid fa-play fa-2xl"></i>
                 </div>
  
                <div class="v-container" id="vContainer">
                  <video
                    id="modalVideo"
                    src="../assets/video/infocards-video.mp4"
                    type="video/mp4"
                    autoplay
                    muted
                    controls>
                  </video>
                </div>
              </div>
            </div>
          `;

      infoCardsVideoPlay();

      const commentsSection = document.querySelector("#commentsSection");
      const comments = loadCommentsFromLocaleStorage(c.id);
      console.log(comments);
      commentsSection.innerHTML = comments
        .map(
          (comment) => `
              <div class="comment-box modal-comment-form p-3 mb-3 rounded-4"
              <p>${comment.text}</p>
              <small>${comment.user} - ${comment.date}</small>
              </div>
            `
        )
        .join("");
      const submitComments = document.querySelector("#submitComments");
      submitComments.addEventListener("click", () => {
        const input = document.querySelector("#commentInput");
        const loggedInUser = getLoggedInUser();

        const newComment = {
          user: loggedInUser,
          text: input.value,
          date: new Date().toLocaleDateString("mk-MK"),
        };

        if (input.value.trim() !== "" && loggedInUser) {
          saveCommentsToLocaleStorage(c.id, newComment);
          input.value = "";

          const updatedComments = loadCommentsFromLocaleStorage(c.id);
          commentsSection.innerHTML = updatedComments
            .map(
              (comment) => `
                    <div class="comment-box modal-comment-form p-3 mb-3 rounded-4"
                    <p>${comment.text}</p>
                    <small>${comment.user} - ${comment.date}</small>
                    </div>
                  `
            )
            .join("");
        }
      });
      const infoCardModal = new bootstrap.Modal(
        document.getElementById("infoCardModal")
      );
      infoCardModal.show();
    });

    cardsContainer.append(iCard);
  });
}

let activeFilters = [...new Set(infoCards.map((c) => c.category))];

// ------------ INITIAL GENERAL FUNCTION FOR THE INFO PAGE called for execution in the main.js script --------------
export function initInfoPage() {
  const loggedInUsername = localStorage.getItem("authenticatedUser");
  const authenticatedUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userIndex = authenticatedUsers.findIndex(
    (user) => user.username === loggedInUsername
  );

  if (userIndex === -1) {
    window.location.hash = "#info";
    displayInfoCards();
  }

  const currentLoggedInUser = authenticatedUsers[userIndex];
  // Get all available categories from infoCards
  const allCategories = [...new Set(infoCards.map((c) => c.category))];

  //If the user has no filters saved yet, assign all of them
  const isInvalid =
    !Array.isArray(currentLoggedInUser.filters) ||
    currentLoggedInUser.filters.length === 0 ||
    !currentLoggedInUser.filters.every((f) => typeof f === "string");

  if (isInvalid) {
    currentLoggedInUser.filters = allCategories;

    authenticatedUsers[userIndex] = currentLoggedInUser;
    localStorage.setItem("users", JSON.stringify(authenticatedUsers));
  }

  activeFilters = currentLoggedInUser.filters;

  renderInfoCards();
  setFilterFunctionality();
  makeVideoCarousel();
}

// --------------- RENDER CARDS IN THE INFO PAGE (Информирај се) ----------------
export function renderInfoCards() {
  const cardsContainer = document.querySelector(".cardsContainer");
  cardsContainer.innerHTML = "";

  const filtered = infoCards.filter((card) =>
    activeFilters.includes(card.category)
  );

  filtered.forEach((cardItem) => {
    const card = document.createElement("div");
    card.classList.add("card", "rounded-4");
    card.setAttribute("data-category", `${cardItem.category}`);
    card.innerHTML = `
        <img src="${cardItem.image}"/>
        <div class="card-body p-3">
          <div class="card-title fw-bold">${cardItem.title}</div>
          <p class="card-info">${cardItem.info}</p>
          <p class="card-date">Објавено на ${cardItem.date}</p>
        </div>
      `;

    card.addEventListener("click", () => {
      const modalBody = document.querySelector("#infoCardModal .modal-body");
      const loggedUser = getLoggedInUser();
      modalBody.innerHTML = `
          <div class="container-fluid d-flex">
          <div class="modal-left me-md-5">
            <h5 class="modal-title">${cardItem.title}</h5>
            <p>${cardItem.info}</p>
            <p class="modal-date text-secondary">Објавено на ${cardItem.date}</p>
            <div class="modal-comment-form p-3 mb-3 rounded-4">
              <input type="text" placeholder="Остави коментар..." id="commentInput" class="mb-2" />
              <div class="circle d-flex align-items-center mb-2">
                <div class="user-comments-avatar"><img src="${userProfileImages[loggedUser]}" /></div>
                <span class="d-block mb-2 ms-3">${loggedUser}</span>
              </div>
              <button id="submitComments" class="btn btn-secondary btn-sm d-block">Постирај коментар</button>
            </div>

            <div id="commentsSection">
            
            </div>
            </div>

            <div class="modal-right">
              <img src="${cardItem.image}" alt="Card image" class="info-modal-image" />
              <div class="play-btn video-btn">
                <i class="fa-solid fa-play fa-2xl"></i>
               </div>

              <div class="v-container" id="vContainer">
                <video
                  id="modalVideo"
                  src="../assets/video/infocards-video.mp4"
                  type="video/mp4"
                  autoplay
                  muted
                  controls>
                </video>
              </div>

            </div>

            

          </div>
        `;

      infoCardsVideoPlay();

      const commentsSection = document.querySelector("#commentsSection");
      const comments = loadCommentsFromLocaleStorage(cardItem.id);
      console.log(comments);
      commentsSection.innerHTML = comments
        .map(
          (comment) => `
            <div class="comment-box modal-comment-form p-3 mb-3 rounded-4"
            <p>${comment.text}</p>
            <small>${comment.user} - ${comment.date}</small>
            </div>
          `
        )
        .join("");

      const submitComments = document.querySelector("#submitComments");
      submitComments.addEventListener("click", () => {
        const input = document.querySelector("#commentInput");
        const newComment = {
          user: loggedUser,
          text: input.value,
          date: new Date().toLocaleDateString("mk-MK"),
        };
        if (input.value.trim() !== "") {
          saveCommentsToLocaleStorage(cardItem.id, newComment);
          input.value = "";

          const updatedComments = loadCommentsFromLocaleStorage(cardItem.id);
          commentsSection.innerHTML = updatedComments
            .map(
              (comment) => `
                  <div class="comment-box modal-comment-form p-3 mb-3 rounded-4"
                  <p>${comment.text}</p>
                  <small>${comment.user} - ${comment.date}</small>
                  </div>
                `
            )
            .join("");
        }
      });
      const infoCardModal = new bootstrap.Modal(
        document.getElementById("infoCardModal")
      );
      infoCardModal.show();
    });

    cardsContainer.append(card);
  });
}

// ------------ SETTING FILTER FUNCTIONALITY -------------
function setFilterFunctionality() {
  const infoCardsFilterBtns = document.querySelectorAll(".info-filter-btn");
  const loggedInUsername = localStorage.getItem("authenticatedUser");
  const authenticatedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const userIndex = authenticatedUsers.findIndex(
    (user) => user.username === loggedInUsername
  );

  if (userIndex === -1) return;

  // Set initial active styles
  infoCardsFilterBtns.forEach((button) => {
    const category = button.dataset.category;
    if (activeFilters.includes(category)) {
      button.classList.remove("disabled");
    } else {
      button.classList.add("disabled");
    }
  });

  // Add event listeners
  infoCardsFilterBtns.forEach((b) => {
    const infoCategory = b.dataset.category;

    b.addEventListener("click", () => {
      if (activeFilters.includes(infoCategory)) {
        activeFilters = activeFilters.filter((cat) => cat !== infoCategory);
        b.classList.add("disabled");
      } else {
        activeFilters.push(infoCategory);
        b.classList.remove("disabled");
      }

      //Save updated filters to the current user
      authenticatedUsers[userIndex].filters = activeFilters;
      localStorage.setItem("users", JSON.stringify(authenticatedUsers));

      renderInfoCards();
    });
  });
}

// --------------- INFO SECTION CAROUSEL FUNCTION ------------------
function makeVideoCarousel() {
  const slides = document.querySelectorAll(".info-carousel-item");
  const nextBtn = document.querySelector(".info-btn-next");
  const previousBtn = document.querySelector(".info-btn_previous");
  const dots = document.querySelectorAll(".dot");
  let position = 0;
  const numberOfSlides = slides.length; // 3
  updateButtonsStates();

  function hideAllSlides() {
    for (const slide of slides) {
      slide.classList.remove("info-carousel-item-visible");
      slide.classList.add("info-carousel-item-hidden");
    }
  }

  function updateButtonsStates() {
    previousBtn.disabled = position === 0;
    nextBtn.disabled = position === numberOfSlides - 1;
  }

  const handleMoveToNextSlide = function (e) {
    if (position === numberOfSlides - 1) {
      return;
    } else {
      // move to next slide
      position++;
      hideAllSlides();
      // make current slide visible
      slides[position].classList.add("info-carousel-item-visible");
      dots[position].classList.add("selected-dot");
      dots[position - 1].classList.remove("selected-dot");

      updateButtonsStates();
    }
  };

  const handleMoveToPrevSlide = function (e) {
    // check if we're on the first slide
    if (position === 0) {
      return;
    } else {
      // move back one
      position--;
      hideAllSlides();
      // make current slide visible
      slides[position].classList.add("info-carousel-item-visible");

      // update dot to represent current slide
      dots[position].classList.add("selected-dot");
      dots[position + 1].classList.remove("selected-dot");

      updateButtonsStates();
    }
  };

  nextBtn.addEventListener("click", handleMoveToNextSlide);
  previousBtn.addEventListener("click", handleMoveToPrevSlide);
}
