const productSlide = () => {
  const swiper = new Swiper(".product-block__slider.swiper", {
    navigation: {
    nextEl: ".next-product",
    prevEl: ".prev-product",
  }
  });
}

document.addEventListener('DOMContentLoaded', productSlide);
