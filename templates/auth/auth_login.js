// JavaScript Fetch untuk login

const loginForm = document.getElementById("formlogin");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(loginForm);
  const username = formData.get("username");
  const password = formData.get("password");

  const data = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.ok) {
      // Login berhasil
      console.log(responseData.message);
      // Lakukan tindakan setelah login berhasil
    } else {
      // Login gagal
      console.error(responseData.message);
      // Lakukan tindakan untuk penanganan login gagal
    }
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
});
