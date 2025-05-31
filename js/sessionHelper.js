// ------------ MANIPULATION WITH LOCALE STORAGE --------------
export function loadCommentsFromLocaleStorage(cardId) {
  const commentsData = JSON.parse(localStorage.getItem("comments")) || {};
  return commentsData[cardId] || [];
}

export function saveCommentsToLocaleStorage(cardId, comment) {
  const commentsData = JSON.parse(localStorage.getItem("comments")) || {};
  if (!commentsData[cardId]) {
    commentsData[cardId] = [];
  }
  commentsData[cardId].push(comment);
  localStorage.setItem("comments", JSON.stringify(commentsData));
}

export function isUserAuthenticated() {
  return Boolean(localStorage.getItem("authenticatedUser"));
}

export const getLoggedInUser = () => localStorage.getItem("authenticatedUser");
export const getPosts = () =>
  JSON.parse(localStorage.getItem("discussionPosts")) || [];
export const savePosts = (posts) =>
  localStorage.setItem("discussionPosts", JSON.stringify(posts));
