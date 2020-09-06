/* ------------------------------
  modal アクセス時
------------------------------*/
window.onload = function() {
  var modal = document.getElementById('js-modal');
  if(!modal) return;
  modal.classList.add('is-show');

  var closeButton = document.getElementById('js-closeButton');
  var closeOverlay = document.getElementById('js-overlay');

  closeModal(closeButton);
  closeModal(closeOverlay);

  function closeModal(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      modal.classList.remove('is-show');
    })
  }
}
