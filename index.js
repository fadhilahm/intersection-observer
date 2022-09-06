const cards = document.querySelectorAll(".card");

const appearObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 1,
    // rootMargin: "100px",
  }
);

cards.forEach((card) => appearObserver.observe(card));
