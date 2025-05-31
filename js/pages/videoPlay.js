export function bannerVideoPlay() {
  const playBtn = document.querySelector(".play-video-btn");
  const banner = document.querySelector(".banner");
  const videoContainer = document.querySelector(".video-container");
  const video = document.querySelector("#video");

  playBtn.addEventListener("click", () => {
    banner.style.background = "none";

    videoContainer.style.display = "block";
    videoContainer.style.zIndex = "999";

    video.play();

    playBtn.style.display = "none";
  });
}

export function infoCardsVideoPlay() {
  const videoBtns = document.querySelectorAll(".video-btn");
  const modalVideoContainer = document.querySelector("#vContainer");
  const modalVideo = document.querySelector("#modalVideo");

  videoBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalVideoContainer.style.display = "block";
      modalVideoContainer.style.zIndex = 999;

      modalVideo.play();

      btn.style.display = "none";
    });
  });
}
