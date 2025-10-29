// Slideshow otomatis
    const slides = document.querySelectorAll('.hero img');
    let idx = 0;
    setInterval(() => {
      slides[idx].classList.remove('active');
 idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 4000);

    // Hilangkan class no-anim setelah load
    window.addEventListener("load", () => {
      document.body.classList.remove("no-anim");
    });