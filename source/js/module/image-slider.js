const imageSlide = () => {
  const swiper = new Swiper(".product-block__holder.swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
imageSlide();
