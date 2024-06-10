document.addEventListener("DOMContentLoaded", () => {
  const pointUp = document.querySelector("#pointup");
  const element = document.querySelector("#fashionup");
  const pointUp2 = document.querySelector("#pointup2");
  const pointUp3 = document.querySelector("#pointup3");
  const bestproduct = document.querySelector("#bestproduct");
  const cart = document.querySelector("#cart");
  const cartButton = document.querySelector("#cartbutton");
  const closeButton = document.querySelector("#closebutton");
  const RotateLogo = document.querySelector("#rotlogo");
  const Logo2 = document.querySelector("#logo2");
  const RotateText = document.querySelector("#rottext");
  const Second = document.querySelector("#second");
  const btn = document.querySelector("#btn");

  //FirstPage
  window.addEventListener("load", () => {
    RotateLogo.classList.remove("rotate-180");
    RotateLogo.classList.add("scale-150");
    setTimeout(() => {
      RotateLogo.classList.remove("scale-150");
      RotateLogo.classList.add("-translate-x-28");
    }, 1200);
    setTimeout(() => {
      RotateText.classList.add("translate-x-8");
      RotateText.classList.remove("opacity-0");
    }, 1200);
    setTimeout(() => {
      RotateText.classList.add("opacity-0");
      // RotateLogo.classList.add('opacity-0')
    }, 3000);
    setTimeout(() => {
      RotateText.classList.add("hidden");
      // RotateLogo.classList.add('hidden')
      RotateLogo.classList.remove("-translate-x-24", "pb-3", "text-8xl");
      RotateLogo.classList.add(
        "scale-150",
        "-translate-x-44",
        "pb-4",
        "text-8xl"
      );
      Logo2.classList.remove("opacity-0");

      Second.classList.remove("hidden");
      btn.classList.remove("opacity-0", "right-[675px]");
      btn.classList.add("right-[612px]", "opacity-100");
      Second.classList.remove("opacity-0", "translate-x-24");
      Second.classList.add("flex", "opacity-100", "translate-x-44");
    }, 3550);
  });

  // Home Page
  cartButton.addEventListener("click", () => {
    cart.classList.remove("hidden", "opacity-25");
    cart.classList.add("opacity-100");
    console.log("Tombol cart diklik");
  });

  closeButton.addEventListener("click", () => {
    cart.classList.remove("opacity-100");
    cart.classList.add("opacity-0", "hidden");
  });

  window.addEventListener("scroll", () => {
    if (isElementInViewport(pointUp)) {
      element.classList.remove("opacity-50");
      element.classList.add("-translate-y-14", "opacity-100");
    }
  });

  window.addEventListener("scroll", () => {
    if (isElementInViewport(pointUp2)) {
      newproduct.classList.remove("opacity-50");
      newproduct.classList.add("-translate-y-14", "opacity-100");
    }
  });
  window.addEventListener("scroll", () => {
    if (isElementInViewport(pointUp3)) {
      bestproduct.classList.remove("opacity-50");
      bestproduct.classList.add("-translate-y-14", "opacity-100");
    }
  });
  // Discont move photo
  const DiscontImg = document.getElementById("discontimage");
  const imgsrc = [
    "../../src/img/poster/poster2.jpg",
    "../../src/img/poster/poster1.avif",
    "../../src/img/poster/poster3.avif",
    "../../src/img/poster/poster4.avif",
  ];

  let index = 0;

  window.addEventListener("load", () => {
    const changeImage = () => {
      DiscontImg.src = imgsrc[index];
      index = (index + 1) % imgsrc.length;
    };

    const imageInterval = setInterval(changeImage, 3000);
  });

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
