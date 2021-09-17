export default function getRefs() {
  return {
    input: document.querySelector('#input-event'),
    countrySelect: document.getElementById('input-country'),
    container: document.querySelector('.events-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    filters: document.querySelector('.filters-js'),
    select: document.querySelector('.select-js'),
    
  modalContainer: document.querySelector(".modal"),
  modalImg: document.querySelector('.modal__image'),
  modalOpenBtn: document.querySelector('.open-btn'),
  modalCloseBtn: document.querySelector('.modal__button'),
  modalOverlay: document.querySelector('.modal__overlay'),
  eventsGallery: document.querySelector('.events'),
  modalInfoList: document.querySelector('.modal-info__list'),
    modalInfoTopic: document.querySelector('.modal-info__topic'),
  modalImgBig: document.querySelector('.modal__image--big') 
  };
}
