// ---------------- USER AUTHENTICATION ---------------
import { isUserAuthenticated } from "../sessionHelper.js";
import { userProfileImages } from "./userProfile.js";
import { infoCards } from "./infoCards.js";

export function initUserData() {
  if (!localStorage.getItem("users")) {
    const users = [
      {
        username: "User123",
        password: "Pass123",
        email: "",
        birthYear: "",
        filters: [],
      },
      {
        username: "User456",
        password: "Pass456",
        email: "",
        birthYear: "",
        filters: [],
      },
      {
        username: "User789",
        password: "Pass789",
        email: "",
        birthYear: "",
        filters: [],
      },
    ];
    localStorage.setItem("users", JSON.stringify(users));
  }
}

export function authenticateUser() {
  const loginForm = document.querySelector("#loginForm");
  const afterLoginOverlay = document.querySelector("#loginSuccessOverlay");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const errorMsg = document.querySelector("#loginErrorMsg");

    const credentials = { username, password };
    const jsonCredentials = JSON.stringify(credentials);

    fetch("http://localhost:5000/api/authentication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonCredentials,
    })
      .then(() => {
        const usersProfiles = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = usersProfiles.find(
          (u) => u.username === username && u.password === password
        );
        if (foundUser) {
          localStorage.setItem("authenticatedUser", foundUser.username);
          const allCategories = [...new Set(infoCards.map((c) => c.category))];

          const isInvalid =
            !Array.isArray(foundUser.filters) ||
            foundUser.filters.length === 0 ||
            !foundUser.filters.every((f) => typeof f === "string");

          if (isInvalid) {
            foundUser.filters = allCategories;

            const allUsers = JSON.parse(localStorage.getItem("users")) || [];
            const index = allUsers.findIndex((u) => u.username === username);
            allUsers[index] = foundUser;
            localStorage.setItem("users", JSON.stringify(allUsers));
          }

          afterLoginOverlay.style.display = "flex";

          handleAuthenticatedUserContent();

          document
            .querySelector("#continueBtn")
            .addEventListener("click", () => {
              window.location.hash = "#info";
            });
        }
      })
      .catch((err) => {
        console.log("Login failed", err);
        errorMsg.style.display = "block";
      });
  });

  showAndHidePassword();
}

export function handleAuthenticatedUserContent() {
  const isAuthenticated = isUserAuthenticated();

  if (isAuthenticated) {
    document.querySelector("#logOutBtn").style.display = "block";
    document.querySelector(".profile-item").style.display = "block";
    document.querySelector(".header-sign-in-btn").style.display = "none";

    const profileAvatar = document.querySelector(".profile-avatar_container");
    profileAvatar.style.display = "block";
    profileAvatar.style.background = `url("${
      userProfileImages[localStorage.getItem("authenticatedUser")]
    }")`;
    profileAvatar.style.backgroundSize = "cover";
    profileAvatar.style.backgroundPosition = "center";
  } else {
    document.querySelector("#logOutBtn").style.display = "none";
    document.querySelector(".profile-item").style.display = "none";
    document.querySelector(".header-sign-in-btn").style.display = "flex";
    document.querySelector(".profile-avatar_container").style.display = "none";
  }

  document.querySelector("#logOutBtn").addEventListener("click", () => {
    localStorage.removeItem("authenticatedUser");
    window.location.hash = "#signIn";
  });
}

function showAndHidePassword() {
  const togglePassBtn = document.querySelector("#toggle-password");
  const passInput = document.querySelector("#password");

  togglePassBtn.addEventListener("click", function (e) {
    const type =
      passInput.getAttribute("type") === "password" ? "text" : "password";
    passInput.setAttribute("type", type);

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
}
