const modal = (element) => {
  element.classList.add("modal--active");

  element.querySelector(".modal__close").onclick = () => {
    element.classList.remove("modal--active");
  };
};

const modalCompany = document.querySelector(".modal-company");
const modalContacts = document.querySelector(".modal-contacts");
const open__modalCompany = document.querySelector("#open__modal-company");
const open__modalContacts = document.querySelector("#open__modal-contacts");

open__modalCompany.onclick = () => modal(modalCompany);
open__modalContacts.onclick = () => modal(modalContacts);
