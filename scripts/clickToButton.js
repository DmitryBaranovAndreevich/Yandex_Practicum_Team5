const allCorses = document.querySelectorAll('.card');

function clickToButton(e) {
  allCorses.forEach(corse => {
    const button = corse.querySelector('.button');
    button.addEventListener('click', function() {
      if(button.classList.contains('button_type_transparent')) {
        button.classList.remove('button_type_transparent');
        button.classList.add('button_type_filled');
        button.textContent = "Продолжить";
      }
    });
  });
}

clickToButton();
