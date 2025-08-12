const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileSubmitBtn =
  editProfileModal.querySelector(".modal__submit-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
let editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
let editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

let imageLinkInput = newPostModal.querySelector("#card-image-input");
let captionInput = newPostModal.querySelector("#card-caption-input");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closeModal();
}

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(
    "Image Link Output: " +
      imageLinkInput.value +
      "\nCaption Output: " +
      captionInput.value
  );
}

function closeModal() {
  editProfileModal.classList.remove("modal_is-opened");
}
