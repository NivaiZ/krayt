const cardSlide = () => {
  const swiper = new Swiper(".card-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

document.addEventListener('DOMContentLoaded', cardSlide);
