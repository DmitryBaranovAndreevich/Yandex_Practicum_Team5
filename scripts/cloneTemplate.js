const cloneTemplate = function(obj) {
  const cloneTemplate = inputTemplate.querySelector('.card__status').cloneNode(true);
  const buttonClose = cloneTemplate.querySelector('.card__close-button');
  buttonClose.addEventListener('click', function() {
    cloneTemplate.remove();
    obj.checked = false;
  });
  return cloneTemplate;
};
