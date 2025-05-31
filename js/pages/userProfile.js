export const userProfileImages = {
  User123: "../../assets/images/profile-img.png",
  User456: "../../assets/images/profile-pic2.avif",
  User789: "../../assets/images/profile-pic3.jpg",
};

export function initProfilePage() {
  const formLoggedInUser = document.querySelector(".form-logged-in-user");
  const logoutBtn = document.querySelector("#logOutBtn");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const currentUsername = localStorage.getItem("authenticatedUser");

  if (!currentUsername) {
    window.location.hash = "#signIn";
    return;
  }

  const currentUser = users.find((u) => u.username === currentUsername);
  if (currentUser) {
    document.querySelector(".profile-img_container").style.background = `url("${
      userProfileImages[currentUser.username]
    }")`;
    document.querySelector(".profile-img_container").style.backgroundSize =
      "cover";
    document.querySelector(".profile-img_container").style.backgroundPosition =
      "center";
  }

  document.querySelector("#profileUsername").value = currentUser.username || "";
  document.querySelector("#profilePassword").value = currentUser.password || "";
  document.querySelector("#profileEmail").value = currentUser.email || "";
  document.querySelector("#profileBirthYear").value =
    currentUsername.birthYear || "";

  formLoggedInUser.addEventListener("submit", (e) => {
    e.preventDefault();

    currentUser.email = document.querySelector("#profileEmail").value;
    currentUser.birthYear = document.querySelector("#profileBirthYear").value;

    const updatedUsers = users.map((u) =>
      u.username === currentUser.username ? currentUser : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log("Промените се зачувани");
  });

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("authenticatedUser");
    window.location.hash = "#signIn";
  });
}
