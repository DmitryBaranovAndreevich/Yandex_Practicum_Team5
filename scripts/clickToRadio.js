const allItem = accardion.querySelectorAll('.accordion-item');


function clickToRadio() {
    const card = searhFieldset('Уровень');
    const item = card.querySelector('.accordion-item__content');
    const radio = item.querySelectorAll('.menu-item__input');
      radio.forEach(item => {
        item.addEventListener('click', function(e) {
          const clone = cloneTemplate(item);
          let check = false;
          if(item.checked){
           check = true;
           clone.insertAdjacentText('afterbegin',item.name);
           boxInput.prepend(clone);
           cleanButton.classList.add('accordion-item__button_active');
          } else {
              const allTags = boxInput.querySelectorAll('.card__status');
              allTags.forEach(tag => {
              const tagName = tag.textContent;
                if(tagName == item.name ) {
                  tag.remove();
                }
              });
              if(boxInput.querySelectorAll('.card__status').length == 0) {
                cleanButton.classList.remove('accordion-item__button_active');
              }
            }
        });
      });

}

clickToRadio();

function searhFieldset(name) {
  let returnFalue;
  allItem.forEach(elem => {
    const item = elem.querySelector('.accordion-item__input');
    const nameItem = item? item.name: null;
    nameItem == name? returnFalue = elem: null;
 });
  return returnFalue;
}
