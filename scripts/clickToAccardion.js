const accardion = document.querySelector('.accordion');
const fieldset = accardion.querySelectorAll('.accordion-item__content');
const boxInput = accardion.querySelector('.accordion__box-active-input');
const inputTemplate = document.querySelector('.active-input').content;
const allTags = boxInput.querySelectorAll('.card__status');
const cleanButton = accardion.querySelector('.accordion-item__button');
const boxActiveInput = accardion.querySelector('.accordion__box-active-input')


clickToRadio();
clickToCleanButton();

