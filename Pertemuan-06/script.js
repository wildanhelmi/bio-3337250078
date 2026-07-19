const btnToggle = document.querySelector("#btnToggle");
const body = document.body;

btnToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btnToggle.textContent = "Light Mode";
  } else {
    btnToggle.textContent = "Dark Mode";
  }
});

const isiFakta = document.querySelector("#isi-fakta");
const btnRefresh = document.querySelector("#btnRefresh");

async function ambilFakta() {
  isiFakta.textContent = "⏳ Memuat fakta...";
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }
    const data = await response.json();
    isiFakta.textContent = data.fact;
  } catch (error) {
    isiFakta.textContent = "⚠️ Gagal memuat fakta. Cek koneksi internet Anda.";
    console.error("Error:", error.message);
  }
}

ambilFakta();
btnRefresh.addEventListener("click", ambilFakta);