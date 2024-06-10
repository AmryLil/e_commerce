document.addEventListener("DOMContentLoaded", () => {
  const singupage = document.querySelector("#singup");
  const formsingup = document.querySelector("#formsp");
  const btn = document.querySelector("#btnsp");
  window.addEventListener("load", () => {
    singupage.classList.remove("translate-x-full");
    singupage.classList.add("opacity-100");
    formsingup.classList.remove("-translate-x-96");
    formsingup.classList.add("opacity-100");
  });

  btn.addEventListener("click", () => {
    formsingup.classList.add("-translate-x-24", "duration-500");
    singupage.classList.add("translate-x-24", "duration-700");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loginpage = document.querySelector("#login");
  const formlogin = document.querySelector("#formlg");
  const btn = document.querySelector("#btnlg");
  window.addEventListener("load", () => {
    formlogin.classList.remove("translate-x-96");
    formlogin.classList.add("opacity-100", "ease-in-out");
    loginpage.classList.remove("-translate-x-full");
    loginpage.classList.add("opacity-100", "ease-in-out");
  });

  btn.addEventListener("click", () => {
    loginpage.classList.add("-translate-x-24", "duration-500");
    formlogin.classList.add("translate-x-24", "duration-700");
  });
});
