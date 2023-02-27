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
