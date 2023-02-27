const cardSlide = () => {
  const swiper = new Swiper(".card-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

document.addEventListener('DOMContentLoaded', cardSlide);

const choiseButton = () => {
  const button = document.querySelectorAll('.product-form__button');

  button.forEach(item => {
    item.addEventListener('click', (e) => {
      button.forEach(el => { el.classList.remove('product-form__button--active'); });
      item.classList.add('product-form__button--active')
    })
  })
}

document.addEventListener('DOMContentLoaded', choiseButton)

const dropdownButton = document.querySelector(".dropdown__button");
const dropdownMenu = document.querySelector(".dropdown__menu");
const dropdownLinks = document.querySelectorAll(".dropdown__menu li a");
const body = document.querySelector(".page-body");

dropdownButton.addEventListener("click", function () {
  if (dropdownMenu.getAttribute("aria-hidden") === "true") {
    dropdownMenu.setAttribute("aria-hidden", "false");
    dropdownButton.setAttribute("aria-expanded", "true");
    dropdownMenu.classList.add("dropdown__menu--open");
  } else {
    dropdownMenu.setAttribute("aria-hidden", "true");
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownMenu.classList.remove("dropdown__menu--open");
  }
});

dropdownButton.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    event.preventDefault();
    if (dropdownMenu.getAttribute("aria-hidden") === "true") {
      dropdownMenu.setAttribute("aria-hidden", "false");
      dropdownButton.setAttribute("aria-expanded", "true");
      dropdownMenu.classList.add("dropdown__menu--open");
    } else {
      dropdownMenu.setAttribute("aria-hidden", "true");
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.remove("dropdown__menu--open");
    }
  }
});

dropdownLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    dropdownButton.innerText = this.innerText;
    dropdownMenu.setAttribute("aria-hidden", "true");
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownMenu.classList.remove("dropdown__menu--open");
  });

  link.addEventListener("keydown", function (event) {
    if (event.code === "Enter") {
      event.preventDefault();
      dropdownButton.innerText = this.innerText;
      dropdownMenu.setAttribute("aria-hidden", "true");
      dropdownButton.setAttribute("aria-expanded", "false");
      dropdownMenu.classList.remove("dropdown__menu--open");
    }
  });
});

dropdownMenu.addEventListener("blur", function () {
  dropdownMenu.setAttribute("aria-hidden", "true");
  dropdownButton.setAttribute("aria-expanded", "false");
  dropdownMenu.classList.remove("dropdown__menu--open");
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest('.dropdown__menu--open') && !target.closest('.dropdown__button')) {
    dropdownMenu.classList.remove("dropdown__menu--open");
    dropdownMenu.setAttribute("aria-hidden", "true");
  }
});

const imageSlide = () => {
  const swiper = new Swiper(".product-block__holder.swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
imageSlide();

const swiper = new Swiper(".general-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});

const productSlide = () => {
  const swiper = new Swiper(".product-block__slider.swiper", {
    navigation: {
    nextEl: ".next-product",
    prevEl: ".prev-product",
  }
  });
}

document.addEventListener('DOMContentLoaded', productSlide);

const tabButton = document.querySelectorAll('.sale-block__button');
const tabContent = document.querySelectorAll('.sale-block__content');

tabButton.forEach((element) => {
  element.addEventListener('click', () => {
    const target = element.getAttribute('data-target');
    activeTab(target);
  })
})

function activeTab(target) {

  tabButton.forEach((button) => {
    button.classList.remove('sale-block__button--active');
  });

  tabContent.forEach((content) => {
    content.classList.remove('sale-block__content--active')
  });

  const button = document.querySelector(`[data-target="${target}"]`);
  const tab = document.getElementById(target);
  button.classList.add('sale-block__button--active');
  tab.classList.add('sale-block__content--active');
}

const addHoverHandler = () => {
  const tooltip = document.querySelector('.product-form__column');
  const cloudPopup = document.querySelector('.product-form__cloud');

  tooltip.addEventListener('mouseleave', () => {
    tooltip.classList.remove('product-form__column--active');
    cloudPopup.classList.remove('product-form__cloud--visible');
  })

  tooltip.addEventListener('mouseout', () => {
    tooltip.classList.add('product-form__column--active');
    cloudPopup.classList.add('product-form__cloud--visible');
  })
}
addHoverHandler();

import "./module/dropdown-list.js";
import "./module/main-slider.js";
import "./module/card-slide.js";
import "./module/tab-sale.js";
import "./module/product-slider.js";
import "./module/choise-size.js";
import "./module/image-slider.js";
import "./module/tooltip.js";
