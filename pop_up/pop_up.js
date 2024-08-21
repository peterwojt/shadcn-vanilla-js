document.addEventListener('DOMContentLoaded', function() {
    var openPopupButton = document.getElementById('openPopup');
    var closePopupButton = document.getElementById('closePopup');
    var popupModal = document.getElementById('popup-modal');
    var content = document.getElementById('content');

    openPopupButton.addEventListener('click', function() {
        popupModal.classList.remove('hidden', 'zoomOut');
        content.classList.add('blurred');
    });

    closePopupButton.addEventListener('click', function() {
        popupModal.classList.add('zoomOut');
        content.classList.remove('blurred');
    });

    popupModal.addEventListener('animationend', function() {
        if (popupModal.classList.contains('zoomOut')) {
            popupModal.classList.add('hidden');
        }
    });
});
