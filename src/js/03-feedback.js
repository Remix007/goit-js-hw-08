import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const textareaMessage = document.querySelector('.feedback-form textarea');

form.addEventListener('submit', onFormSubmint);
form.addEventListener('input', throttle(onFormInput, 500));

populateTextInput();

function onFormSubmint(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  const dataObj = { email: email.value, message: message.value };

  console.log(dataObj);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput() {
  const {
    elements: { email, message },
  } = form;
  const dataObj = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
}
function populateTextInput() {
  const savedText = localStorage.getItem('feedback-form-state');
  const parseText = JSON.parse(savedText);
  if (savedText) {
    const formEl = form.elements;
    for (const key in parseText) {
      if (parseText.hasOwnProperty(key)) {
        formEl[key].value = parseText[key];
      }
    }
  }
}
