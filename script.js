document.addEventListener("DOMContentLoaded", function () {
  const homeSection = document.getElementById('home');
  const aboutSection = document.getElementById('about');
  const modal = document.getElementById('modal');

  const joinBtn = document.querySelector('.join-btn');
  const aboutBtn = document.querySelector('.about-btn');
  const backBtn = document.querySelector('.back-btn');
  const confirmBtn = document.querySelector('.confirm-btn');
  const closeBtn = document.querySelector('.close-btn');

  // Początkowo pokazujemy sekcję główną
  homeSection.classList.add("visible");

  // Kliknięcie "Dołącz na Discord" – pokaż modal z pytaniem
  joinBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  });

  // Kliknięcie "Anuluj" w modal – ukryj modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("visible");
    modal.classList.add("hidden");
  });

  // Kliknięcie "Tak, dołączam!" – przejdź do linku Discorda
  confirmBtn.addEventListener("click", () => {
    window.location.href = "https://discord.gg/ffKrB46wzQ";
  });

  // Kliknięcie "O nas" – animowane przejście z sekcji głównej do "O nas"
  aboutBtn.addEventListener("click", () => {
    // Ukryj sekcję główną
    homeSection.classList.remove("visible");
    homeSection.classList.add("hidden");

    // Po 500ms pokaż sekcję "O nas"
    setTimeout(() => {
      aboutSection.classList.remove("hidden");
      aboutSection.classList.add("visible");
    }, 500);
  });

  // Kliknięcie "Powrót" w sekcji "O nas" – powrót do strony głównej
  backBtn.addEventListener("click", () => {
    aboutSection.classList.remove("visible");
    aboutSection.classList.add("hidden");

    // Po 500ms przywróć stronę główną
    setTimeout(() => {
      homeSection.classList.remove("hidden");
      homeSection.classList.add("visible");
    }, 500);
  });
});