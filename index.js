const cards = document.querySelectorAll(".card");

const appearObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      //   appearObserver.unobserve(entry.target); // This will delete the observation.
      if (entry.isIntersecting) appearObserver.unobserve(entry.target); // Use this to animate the appear sequence only.
    });
  },
  {
    threshold: 1,
    // rootMargin: "100px",
  }
);

cards.forEach((card) => appearObserver.observe(card));

const lastCard = document.querySelector(".card:last-child");

const infiniteScrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return; // Remember to handle `isIntersecting` so it will behave properly.
      loadNewCards();
      infiniteScrollObserver.unobserve(entry.target);
      const lastCard = document.querySelector(".card:last-child");
      infiniteScrollObserver.observe(lastCard);
    });
  },
  {
    rootMargin: "200px", // Emulate API call
  }
);

infiniteScrollObserver.observe(lastCard);

const loadNewCards = () => {
  const cardContainer = document.querySelector(".card-container");
  for (let i = 0; i < 10; i++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    appearObserver.observe(card);
    cardContainer.append(card);
  }
};
