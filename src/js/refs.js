export default function getRefs() {
  return {
    input: document.querySelector('#input-event'),
    countrySelect: document.getElementById('input-country'),
    container: document.querySelector('.events-container'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]'),
    filters: document.querySelector('.filters-js'),
    select: document.querySelector('.select-js'),
  };
}