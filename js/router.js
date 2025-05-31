import { routes } from "./routes.js";
import { handleAuthenticatedUserContent } from "./pages/signIn.js";

export const handleRoute = async () => {
  let location = window.location.hash.replace("#", "");

  if (location.length == 0) {
    location = "/";
  }
  const route = routes[location] || routes["404"];

  try {
    const response = await fetch(route.template);
    const templateHtml = await response.text();
    document.querySelector("#content").innerHTML = templateHtml;
    document.title = route.title;

    document.dispatchEvent(
      new CustomEvent("routeChange", {
        detail: { location },
      })
    );
  } catch (err) {
    console.error("Template load error", err);
  }
};

window.addEventListener("hashchange", () => {
  handleRoute();
  handleAuthenticatedUserContent();
});
window.addEventListener("load", () => {
  handleRoute();
  handleAuthenticatedUserContent();
});
