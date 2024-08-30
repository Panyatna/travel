const telInput = document.querySelector('.form__input--tel');

const regexpTel = /[A-яё]/g;
telInput.oninput = function() {
  this.value = this.value.replace(regexpTel, '');
}

export {regexpTel};
