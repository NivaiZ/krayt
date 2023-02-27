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
