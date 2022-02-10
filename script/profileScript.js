const aboutPersonButtonSave = document.querySelector('#aboutPersonButtonSave'); /*кнопка Сохранить изменения (Личные данные)*/
const accountDataButtonSave = document.querySelector('#accountDataButtonSave'); /*кнопка Сохранить изменения (Аккаунт)*/
const aboutPerson = document.querySelector('#aboutPerson'); /*форма Личные данные*/
const accountData = document.querySelector('#accountData'); /*форма Аккаунт*/
const fullName =document.querySelector('#fullname'); /*input ФИО*/
const birthday = document.querySelector('#birthday'); /*input Дата рождения*/
const town = document.querySelector('#town'); /*input Географический регион*/
const nickname = document.querySelector('#nickname'); /*input Позывной на форуме*/
const mail = document.querySelector('#mail'); /*input Email*/
const password = document.querySelector('#password'); /*input Пароль*/

/*функция включения активной кнопки Сохранить изменения*/
function buttonTypeFilled (button) {
  button.classList.add('button_type_filled');
  button.classList.remove('button_type_disabled');
};

/*функция отключения активной кнопки Сохранить изменения*/
function buttonTypeDisabled (button) {
  button.classList.add('button_type_disabled');
  button.classList.remove('button_type_filled');
};

/*функция отправки формы Личные данные */
function aboutPersonSubmit(evt) {
  evt.preventDefault();
  buttonTypeDisabled(aboutPersonButtonSave);
};
aboutPerson.addEventListener('submit', aboutPersonSubmit); /*обработчик формы Личные данные */

/*функция отправки формы Аккаунт */
function accountDataSubmit(evt) {
  evt.preventDefault();
  buttonTypeDisabled(accountDataButtonSave);
};
accountData.addEventListener('submit', accountDataSubmit); /*обработчик формы Аккаунт */

/* включение активной кнопки при вводе данных (input ФИО)*/
fullName.oninput = function() {
  buttonTypeFilled(aboutPersonButtonSave);
}

/* включение активной кнопки при вводе данных (input Дата рождения)*/
birthday.oninput = function() {
  buttonTypeFilled(aboutPersonButtonSave);
}

/* включение активной кнопки при вводе данных (input Географический регион)*/
town.oninput = function() {
  buttonTypeFilled(aboutPersonButtonSave);
}

/* включение активной кнопки при вводе данных (input Позывной на форуме)*/
nickname.oninput = function() {
  buttonTypeFilled(aboutPersonButtonSave);
}

/* включение активной кнопки при вводе данных (input Email)*/
mail.oninput = function() {
  buttonTypeFilled(accountDataButtonSave);
}

/* включение активной кнопки при вводе данных (input Пароль)*/
password.oninput = function() {
  buttonTypeFilled(accountDataButtonSave);
}
