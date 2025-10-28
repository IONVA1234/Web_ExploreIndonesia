const toggle = document.getElementById("mode");
const body = document.body;

// deteksi tema sistem (dark/light)
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// kalau belum ada preferensi tersimpan, ikuti sistem
if (!localStorage.getItem("theme")) {
  if (prefersDark) {
    body.classList.add("dark");
    toggle.checked = true;
  } else {
    body.classList.add("light");
    toggle.checked = false;
  }
} else {
  // kalau sudah ada preferensi tersimpan, gunakan itu
  const savedTheme = localStorage.getItem("theme");
  body.classList.add(savedTheme);
  toggle.checked = savedTheme === "dark";
}

// event toggle
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  }
});

