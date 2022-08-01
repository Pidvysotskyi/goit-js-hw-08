import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailInputRef = document.querySelector('[name="email"]');
const messageInputRef = document.querySelector('[name="message"]');

const dataFormStorage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (localStorage.getItem('feedback-form-state')) {
  emailInputRef.value = dataFormStorage.email;
  messageInputRef.value = dataFormStorage.message;
}

const data = {
  email: emailInputRef.value,
  message: messageInputRef.value,
};

formRef.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
  if (evt.target.name === 'email') {
    data.email = evt.target.value;
  }
  if (evt.target.name === 'message') {
    data.message = evt.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(
    `Email: ${emailInputRef.value}
Message: ${messageInputRef.value}`
  );
  localStorage.removeItem('feedback-form-state');
  emailInputRef.value = '';
  messageInputRef.value = '';
}

