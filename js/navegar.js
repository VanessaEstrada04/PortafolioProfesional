// ===========================
// Animación de entrada + brillo en hover
// Tags de Habilidades
// ===========================

gsap.registerPlugin(ScrollTrigger);

// --- Animación de entrada: los tags "bajan" y aparecen ---
gsap.from(".habilidades__tag", {
  y: -40,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.08,
  scrollTrigger: {
    trigger: ".habilidades__tags",
    start: "top 85%",   // se dispara cuando el bloque entra 85% dentro del viewport
    toggleActions: "play none none reverse"
  }
});

// --- Brillo al pasar el mouse ---
document.querySelectorAll(".habilidades__tag").forEach((tag) => {

  tag.addEventListener("mouseenter", () => {
    gsap.to(tag, {
      boxShadow: "0 0 18px 2px rgba(160, 32, 240, 0.6)",
      borderColor: "#9D4DFF",
      color: "#9D4DFF",
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  tag.addEventListener("mouseleave", () => {
    gsap.to(tag, {
      boxShadow: "0 0 0 0 rgba(215, 255, 47, 0)",
      borderColor: "#8A8A85",
      color: "#F2F2F0",
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

});


// ===========================
// BLOG MODAL
// ===========================

const openModalBtn = document.getElementById("openModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
    modalOverlay.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modalOverlay.classList.remove("active");
    }
});