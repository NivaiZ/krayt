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
