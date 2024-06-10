document.addEventListener("DOMContentLoaded", () => {
  const tempcart = document.querySelector("#fashionup");
  const tempnewproduct = document.querySelector("#newproduct");
  const tempbestproduct = document.querySelector("#bestproduct");
  const addcartbtn = document.querySelectorAll(".addcartbtn");
  const concart = document.querySelector("#concart");
  let data = [
    {
      id: 1,
      nama: "Chanel",
      Price: "Rp 200.000",
      img: "../../src/img/chanel.avif",
    },
    {
      id: 2,
      nama: "Man Mix",
      Price: "Rp 100.000",
      img: "../../src/img/maxmix.avif",
    },
    {
      id: 3,
      nama: "Classic Watch",
      Price: "Rp 250.000",
      img: "../../src/img/watch.avif",
    },
    {
      id: 4,
      nama: "Woman Mix",
      Price: "Rp 400.000",
      img: "../../src/img/womenmix.avif",
    },
  ];

  window.addEventListener("load", () => {
    data.forEach((dt) => {
      const cart_template = `
        <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
          <div class="flex items-end justify-end h-56 w-full bg-cover" style="background-image: url('${dt.img}')">
            <button class="addcartbtn p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
          <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">${dt.nama}</h3>
            <span class="text-gray-500 mt-2">${dt.Price}</span>
          </div>
        </div>`;

      tempcart.innerHTML += cart_template;
      tempnewproduct.innerHTML += cart_template;
      tempbestproduct.innerHTML += cart_template;
    });
    const addcartbtns = document.querySelectorAll(".addcartbtn");
    const closeButtonconcart = document.querySelector("#closebutton1");

    addcartbtns.forEach((addcartbtn) => {
      addcartbtn.addEventListener("click", () => {
        console.log("tombol diclik");
        concart.classList.remove("hidden");
        concart.classList.add("fixed");
      });
    });
    closeButtonconcart.addEventListener("click", () => {
      concart.classList.add("hidden");
    });
  });
});
