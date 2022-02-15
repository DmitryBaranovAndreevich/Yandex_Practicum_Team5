const cloneTemplate = function(obj) {
  const cloneTemplate = inputTemplate.querySelector('.card__status').cloneNode(true);
  const buttonClose = cloneTemplate.querySelector('.card__close-button');
  buttonClose.addEventListener('click', function() {
    cloneTemplate.remove();
    obj.checked = false;
    const allActiveInput = boxActiveInput.querySelectorAll('.card__status');
    if(allActiveInput.length == 0) {
      cleanButton.classList.remove('accordion-item__button_active');
    }
  });
  return cloneTemplate;
};
