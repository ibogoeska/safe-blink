import { initInfoPage } from "./pages/infoCards.js";
import { initDiscussionsPage } from "./pages/discussionsCards.js";
import { authenticateUser, initUserData } from "./pages/signIn.js";
import { initProfilePage } from "./pages/userProfile.js";
import { bannerVideoPlay } from "./pages/videoPlay.js";

initUserData();

const pageInitFunctions = {
  info: initInfoPage,
  discussions: initDiscussionsPage,
  signIn: authenticateUser,
  profile: initProfilePage,
  "/": bannerVideoPlay,
};

document.addEventListener("routeChange", (e) => {
  const location = e.detail.location;
  const initFunction = pageInitFunctions[location];
  if (initFunction) initFunction();
});
