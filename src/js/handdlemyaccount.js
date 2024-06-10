window.addEventListener("DOMContentLoaded", () => {
  function renderContent() {
    const BaseTemp = document.getElementById("basetemp");
    const path = window.location.hash.substr(2) || "/"; // Mendapatkan path dari URL setelah '#'
    console.log(path);
    let content = "";

    switch (path) {
      case "/":
        content = `
        <div class="w-[70%]">
        <div class="mt-2 border-b pb-2">
          <span class="font-bold text-purple-950 text-xl">Profile</span>
          <br />
          Kelola informasi profil Anda untuk mengontrol, melindungi dan
          mengamankan akun
        </div>
        <div class="pr-24 gap-y-3 flex flex-col mt-5">
          <div class="flex justify-end gap-x-4">
            <div class="p-2 font-bold">Username</div>
            <div class="w-[70%] p-2">username</div>
          </div>
          <div class="flex justify-end gap-x-4">
            <div class="p-2 font-bold">Name</div>
            <input type="text" class="w-[70%] p-2" />
          </div>
          <div class="flex justify-end gap-x-4">
            <div class="p-2 font-bold">Email</div>
            <div class="w-[70%] p-2 flex">
              <div>example@gmai.com</div>
              <div>edit</div>
            </div>
          </div>
          <div class="flex justify-end gap-x-4">
            <div class="p-2 font-bold">Nomor Telepon</div>
            <div class="w-[70%] p-2">232338888***</div>
          </div>
          <div class="flex justify-end gap-x-4">
            <div class="p-2 font-bold">Nama Toko</div>
            <input type="text" class="w-[70%] p-2" />
          </div>
          <div class="flex justify-end gap-x-4">
            <div class="p-2 font-bold">Jenis Kelamin</div>
            <div class="w-[70%] p-2">
              <input type="radio" value="laki-laki" /> Laki-Laki
              <input type="radio" value="perempuan" /> Perempuan
            </div>
          </div>
          <div class="flex justify-end gap-x-4">
            <div class="p-2 font-bold">Tanggal Lahir</div>
            <input type="date" class="w-[70%] p-2" />
          </div>
          <button
            class="bg-blue-500 text-white font-bold py-2 rounded-sm w-[30%] translate-x-10"
          >
            Save
          </button>
        </div>
      </div>
      <div class="w-[30%] flex flex-col items-center border-l pt-32">
        <div
          class="w-[140px] h-[140px] object-cover rounded-full overflow-hidden mb-3"
        >
          <img src="../../src/img/noprofile.png" alt="" />
        </div>
        <button class="p-2 rounded-md">Pilih Gambar</button>
        <div class="">Ukuran gambar: maks. 1 MB</div>
        <div class="">Format gambar: .JPEG, .PNG</div>
      </div>
        `;
        break;
      case "activateseller":
        content = `
        <div class="shadow-lg bg-slate-100 p-5 w-full h-full">
        <div class="text-xl font-bold mb-3 text-purple-900">
          SET STORE INFORMATION
        </div>
        <form action="" method="POST">
          <div class="flex flex-col px-10 py-3">
            <label for="">Shop Name</label>
            <input
              class="mb-2 border-slate-500 border rounded-sm px-2 py-1"
              type="text"
            />
            <label for="">Shop Address</label>
            <textarea
              class="mb-2 border-slate-500 border rounded-sm px-2 py"
              name=""
              id=""
              cols="10"
              rows="5"
            ></textarea>
            <label for="">Delevery Service</label>
            <select
              name=""
              id=""
              class="mb-2 border-slate-500 border rounded-sm px-2 py-1"
            >
              <option value="">JNT Express</option>
              <option value="">Bapuk Superjet</option>
              <option value="">Ducati FastRun</option>
              <option value="">Usaint Bold Express</option>
              <option value="">Hemat Express</option>
              <option value="">Mahal DIkit ndak Ngaruh</option>
            </select>
            <label for="">Email</label>
            <input
              type="email"
              class="mb-2 border-slate-500 border rounded-sm px-2 py-1"
            />
            <label for="">Phone Number</label>
            <input
              type="text"
              class="mb-2 border rounded-sm px-2 py-1 border-slate-500"
            />
            <button
              type="submit"
              class="bg-purple-900 text-white py-1 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
        `;
        break;
      case "/layanan":
        content = `
          <h1>Layanan</h1>
          <p>Kami menyediakan berbagai layanan.</p>
        `;
        break;
      default:
        content = `
          <h1>Halaman tidak ditemukan</h1>
          <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
        `;
    }

    BaseTemp.innerHTML = content;
  }

  // Panggil fungsi untuk menampilkan konten sesuai dengan URL saat pertama kali halaman dimuat
  renderContent();

  // Tambahkan event listener untuk menangani perubahan hash pada URL
  window.addEventListener("hashchange", renderContent);
});
