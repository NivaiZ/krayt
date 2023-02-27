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
