import { getLoggedInUser, getPosts, savePosts } from "../sessionHelper.js";
import { userProfileImages } from "./userProfile.js";
import { getRandomInt } from "../randomNumber.js";

const discussionsCardsData = [
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "blue-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "mint-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "light-purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "blue-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "mint-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "mint-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "blue-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "mint-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "light-purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "mint-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "blue-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "blue-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "mint-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "light-purple-card",
  },
  {
    masonryCardText:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui provident ex alias soluta hic Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique suscipit aut nisi vitae nam fugit? Voluptate cumque blanditiis, nisi qui provident ex alias soluta hic",
    masonryCardImg: "../assets/images/placeholder-male.jpg",
    masonryCardDate: "00/00/0000",
    masonryCardAuthor: "Име и презиме",
    masonryCardComments: 5,
    masonryCardReactions: 84,
    masonryBgClass: "purple-card",
  },
];

const randomInt = getRandomInt(0, 3);

export const backgroundColorClasses = [
  "blue-card",
  "purple-card",
  "mint-card",
  "light-purple-card",
];

// -------------------- LOAD MORE DISCUSSIONS CARDS ------------------
export function initDiscussionsPage() {
  const mansoryWrapper = document.querySelector("#masonryWrapper");
  const masonryContainer = document.querySelector("#masonryContainer");
  const masonryLoadMoreBtn = document.querySelector("#discussionsLoadMoreBtn");
  const blurOverlay = document.querySelector("#blurOverlay");

  if (!masonryContainer || !masonryLoadMoreBtn || !blurOverlay) return;

  let currentIndex = 0;
  const batchSize = 10;
  const storedDiscussions = getPosts();
  let allDiscussions = [...storedDiscussions, ...discussionsCardsData];

  // Render the input textarea at the top
  function renderInputArea() {
    const loggedInUsername = getLoggedInUser();
    const inputArea = document.createElement("div");
    inputArea.classList.add(
      "masonry-card",
      "masonry-input-card",
      `${discussionsCardsData.masonryBgClass}`,
      "rounded-3"
    );
    if (loggedInUsername) {
      inputArea.innerHTML = `
      <textarea
         name="discussions-comment"
         id="new-discussions-comment"
         class="form-control bg-transparent mb-2 py-1 w-100"
         placeholder="Сподели искуство..."
       ></textarea>
       <div class="masonry-card-footer">
         <div class="mb-2 d-flex align-items-center">
           <div class="masonry-footer_img">
             <img src="${userProfileImages[loggedInUsername]}" class="rounded-circle" />
           </div>
             <div class="fw-semibold ms-3 masonry-card-author">${loggedInUsername}</div>
            
           </div>
         </div>
      `;
    } else {
      inputArea.innerHTML = `
      <textarea
         name="discussions-comment"
         id="new-discussions-comment"
         class="form-control bg-transparent mb-2 py-1 w-100"
         placeholder="Сподели искуство..."
       ></textarea>
       <div class="masonry-card-footer">
         <div class="mb-2 d-flex align-items-center">
           <div class="masonry-footer_img">
             <img src="${discussionsCardsData[randomInt].masonryCardImg}" class="rounded-circle" />
           </div>
             <div class="fw-semibold ms-3 masonry-card-author">${discussionsCardsData[randomInt].masonryCardAuthor}</div>
            
           </div>
         </div>
       `;
    }

    masonryContainer.prepend(inputArea);

    inputArea
      .querySelector("#new-discussions-comment")
      .addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          const content = e.target.value.trim();
          if (content) {
            postNewDiscussion(content);
            e.target.value = "";
          }
        }
      });
  }
  // ------------- RENDER DISCUSSIONS CARDS ---------------
  function renderMasonryCard(cardData) {
    const masonryCard = document.createElement("div");
    masonryCard.classList.add(
      "masonry-card",
      `${cardData.masonryBgClass}`,
      "rounded-3"
    );
    masonryCard.innerHTML = `
      <p class = "masonry-card-text">${cardData.masonryCardText}</p>
      <div class="masonry-card-footer row">
      <div class="col-6 mb-2 w-100 d-flex justify-content-between align-items-center">
        <div class="masonry-footer_img">
          <img src=${cardData.masonryCardImg} class="rounded-circle" />
        </div>
        <div class="fw-semibold ms-2 masonry-card-author">${cardData.masonryCardAuthor}</div>
        <div class="col-6 text-secondary text-end">${cardData.masonryCardDate}</div>
      </div>
      <input
        type="text"
        name="discussions-comment"
        id="discussions-comment"
        class="bg-transparent mb-2 py-1 w-100"
        placeholder="Пиши коментар"
      />
      <div class="d-flex gap-4 justify-content-start align-items-center">
        <i class="fa-solid fa-plus"></i>
        <div>${cardData.masonryCardComments} коментари</div>
        <div>${cardData.masonryCardReactions} реакции</div>
      </div>
    </div>
  `;
    return masonryCard;
  }

  // ----------- Post new discussion --------------
  function postNewDiscussion(content) {
    const loggedInUser = getLoggedInUser();
    const date = new Date().toLocaleDateString();

    if (loggedInUser) {
      const newCardData = {
        masonryCardText: content,
        masonryCardAuthor: loggedInUser,
        masonryCardImg: userProfileImages[loggedInUser],
        masonryCardDate: date,
        masonryBgClass: backgroundColorClasses[randomInt],
        masonryCardComments: 0,
        masonryCardReactions: 0,
      };

      //Save to locale storage
      const updated = [newCardData, ...storedDiscussions];
      savePosts(updated);

      //Insert just after the input
      const newCard = renderMasonryCard(newCardData);
      masonryContainer.insertBefore(newCard, masonryContainer.children[1]);
    } else {
      alert("Мора да бидете најавени за да постирате дискусија.");
    }
  }

  function renderMasonryGridCards(start, count) {
    const slice = allDiscussions.slice(start, start + count);

    slice.forEach((cardData) => {
      const card = renderMasonryCard(cardData);
      masonryContainer.appendChild(card);
    });
  }

  function handleLoadMore() {
    if (currentIndex === batchSize) {
      mansoryWrapper.classList.add("expanded");
      blurOverlay.style.display = "none";
    }

    renderMasonryGridCards(currentIndex, batchSize);
    currentIndex += batchSize;

    if (currentIndex >= allDiscussions.length) {
      masonryLoadMoreBtn.disabled = true;
    }
  }

  renderInputArea();
  handleLoadMore();
  masonryLoadMoreBtn.addEventListener("click", handleLoadMore);
}
