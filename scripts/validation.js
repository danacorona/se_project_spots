const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (form, input, inputError, settings) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  errorElement.textContent = inputError;
};

const hideInputError = (form, input, settings) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
};

const disableButton = (button, settings) => {
  button.disabled = true;
  button.classList.add(settings.inactiveButtonClass);
};

const enableButton = (button, settings) => {
  button.disabled = false;
  button.classList.remove(settings.inactiveButtonClass);
};

const resetValidation = (form, inputList, settings) => {
  inputList.forEach((input) => {
    hideInputError(form, input, settings);
  });
};

const checkInputValidity = (form, input, settings) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, settings);
  } else {
    hideInputError(form, input, settings);
  }
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
  const buttonElement = formEl.querySelector(settings.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(formEl, input, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((form) => {
    setEventListeners(form, settings);
  });
};

const toggleButtonState = (inputList, button, settings) => {
  if (hasInvalidInput(inputList, settings)) {
    disableButton(button, settings);
  } else {
    enableButton(button, settings);
  }
};

const hasInvalidInput = (inputList, settings) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation(settings);
