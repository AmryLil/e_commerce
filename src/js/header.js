window.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector("#iconname");
  const minimenu = document.querySelector("#minimenu");
  icon.addEventListener("mouseenter", () => {
    minimenu.classList.remove("hidden");
    minimenu.classList.add("flex");
    console.log("mouse enter");
  });
  minimenu.addEventListener("mouseleave", () => {
    minimenu.classList.add("hidden");
    minimenu.classList.remove("flex");
  });
});
