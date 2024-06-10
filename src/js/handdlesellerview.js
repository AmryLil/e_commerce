window.addEventListener("DOMContentLoaded", () => {
  function renderContent() {
    const MainBase = document.getElementById("mainbase");
    const path = window.location.hash.substr(2) || "/"; // Mendapatkan path dari URL setelah '#'
    console.log(path);

    switch (path) {
      case "seller":
        content = ` <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-100 uppercase bg-blue-500">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">Product name</th>
              <th scope="col" class="px-6 py-3">Brand</th>
              <th scope="col" class="px-6 py-3">Category</th>
              <th scope="col" class="px-6 py-3">Stock</th>
              <th scope="col" class="px-6 py-3">Price</th>
              <th scope="col" class="px-6 py-3">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >1</th>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <a href="#/updateproduct">anu</a>
              </th>
              <td class="px-6 py-4">anu</td>
              <td class="px-6 py-4">anu</td>
              <td class="px-6 py-4">anu</td>
              <td class="px-6 py-4">anu</td>
              <td class="px-6 py-4">
                <a href="" class="p-2 py-1 rounded-md bg-red-500 text-white"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center gap-x-5">
        <button
          class="bg-blue-500 p-2 py-1 rounded-md shadow-md text-sm font-bold text-slate-100 mt-3"
        >
          <a href="#/addproduct">Add Product</a>
        </button>
        <div class="text-sm text-yellow-700 font-semibold">
          *Click product name to update your product
        </div>
      </div>`;
        MainBase.innerHTML = content;
        break;
      case "addproduct":
        content = `
        <div class="container flex justify-center items-center">
        <div
          class="w-4/5 shadow-lg rounded-sm flex justify-center bg-blue-100 flex-row"
        >
          <div class="w-4/5 p-4 px-10">
            <div class="text-center text-3xl font-bold mb-3 text-purple-900">
              NAMA TOKO
            </div>
            <h2 class="text-2xl font-semibold text-center mb-4">
              Add Product to your Shop
            </h2>
            <form
              enctype="multipart/form-data"
              method="POST"
              class="flex flex-col"
            >
              <label for="productname">Product Name</label>
              <input
                type="text"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="product name"
              />
              <label for="brand">Brand</label>
              <input
                type="text"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="product name"
              />
              <label for="category">Category</label>
              <select
                name=""
                id="category"
                class="mb-2 rounded-md py-1 px-2 pr-4 shadow-sm"
              >
                <option value="Fashion">Fashion</option>
                <option value="Sport">Sport</option>
                <option value="Electronics">Electronics</option>
                <option value="Health and Beauty">Health and Beauty</option>
                <option value="Automotive">Automotive</option>
                <option value="Home and Garden">Home and Garden</option>
                <option value="Software and Apps">Software and Apps</option>
              </select>
              <label for="stock">Stock</label>
              <input
                type="number"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="stock"
              />
              <label for="Price">Price</label>
              <input
                type="text"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="Rp ....."
              />
              <label for="Image">Image</label>
              <input type="file" class="mb-2 rounded-md py-1 px-2 shadow-sm" />
              <textarea name="desc" id="desc" cols="30" rows="4">
  Description</textarea
              >
  
              <button
                type="submit"
                class="bg-purple-600 p-1 rounded-md shadow-lg text-slate-50 font-bold mt-4"
              >
                Submit
              </button>
            </form>
          </div>
          <div
            style="
              background-image: url('https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
              min-width: 300px;
              min-height: 700px;
            "
            class="w-9/12 h-full bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
      </div>
        `;
        MainBase.innerHTML = content;
        break;
      case "updateproduct":
        content = `
         
        <div class="container flex justify-center items-center">
        <div
          class="w-4/5 shadow-lg rounded-sm flex justify-center bg-blue-100 flex-row"
        >
          <div class="w-4/5 p-4 px-10">
            <div class="text-center text-3xl font-bold mb-3 text-purple-900">
              NAMA TOKO
            </div>
            <h2 class="text-2xl font-semibold text-center mb-4">
              Update your Product
            </h2>
            <form
              enctype="multipart/form-data"
              method="POST"
              class="flex flex-col"
            >
              <label for="productname">Product Name</label>
              <input
                type="text"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="product name"
              />
              <label for="brand">Brand</label>
              <input
                type="text"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="product name"
              />
              <label for="category">Category</label>
              <select
                name=""
                id="category"
                class="mb-2 rounded-md py-1 px-2 pr-4 shadow-sm"
              >
                <option value="Fashion">Fashion</option>
                <option value="Sport">Sport</option>
                <option value="Electronics">Electronics</option>
                <option value="Health and Beauty">Health and Beauty</option>
                <option value="Automotive">Automotive</option>
                <option value="Home and Garden">Home and Garden</option>
                <option value="Software and Apps">Software and Apps</option>
              </select>
              <label for="stock">Stock</label>
              <input
                type="number"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="stock"
              />
              <label for="Price">Price</label>
              <input
                type="text"
                class="mb-2 rounded-md py-1 px-2 shadow-sm"
                placeholder="Rp ....."
              />
              <label for="Image">Image</label>
              <input type="file" class="mb-2 rounded-md py-1 px-2 shadow-sm" />
              <textarea name="desc" id="desc" cols="30" rows="4">
  Description</textarea
              >
  
              <button
                type="submit"
                class="bg-purple-600 p-1 rounded-md shadow-lg text-slate-50 font-bold mt-4"
              >
                Submit
              </button>
            </form>
          </div>
          <div
            style="
              background-image: url('https://images.unsplash.com/photo-1586880244386-8b3e34c8382c?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
              min-width: 300px;
              min-height: 700px;
            "
            class="w-9/12 h-full bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
      </div>
        
        `;
        MainBase.innerHTML = content;
        break;
    }
  }

  // Panggil fungsi untuk menampilkan konten sesuai dengan URL saat pertama kali halaman dimuat
  renderContent();

  // Tambahkan event listener untuk menangani perubahan hash pada URL
  window.addEventListener("hashchange", renderContent);
});
