const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const showInputError = (form, input, inputError, config) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = inputError;
};

const hideInputError = (form, input, config) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
};

const disableButton = (button, config) => {
  button.disabled = true;
  button.classList.add(config.inactiveButtonClass);
};

const enableButton = (button, config) => {
  button.disabled = false;
  button.classList.remove(config.inactiveButtonClass);
};

const resetValidation = (form, inputList, config) => {
  inputList.forEach((input) => {
    hideInputError(form, input, config);
  });
};

const checkInputValidity = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  } else {
    hideInputError(form, input, config);
  }
};

const setEventListeners = (formEl, config) => {
  const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
  const buttonElement = formEl.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((input) => {
    input.addEventListener("input", function () {
      checkInputValidity(formEl, input, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    setEventListeners(form, config);
  });
};

const toggleButtonState = (inputList, button, config) => {
  if (hasInvalidInput(inputList, config)) {
    disableButton(button, config);
  } else {
    enableButton(button, config);
  }
};

const hasInvalidInput = (inputList, config) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

enableValidation(settings);
