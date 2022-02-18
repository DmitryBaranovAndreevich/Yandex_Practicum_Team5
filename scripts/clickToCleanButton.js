function clickToCleanButton() {
  cleanButton.addEventListener('click', function() {
     fieldset.forEach(item => {
      const radio = item.querySelectorAll('.menu-item');
      radio.forEach(item => {
        item.checked = false;
      });
    });

  const allActiveInput = boxActiveInput.querySelectorAll('.card__status');
  if(allActiveInput.length > 0) {
    allActiveInput.forEach(item => {
      item.remove();
    });
  }
  this.classList.remove('accordion-item__button_active');
});
}

clickToCleanButton();
