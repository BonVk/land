const buttons = document.getElementsByClassName('modal-button');
for (let button of buttons) {
    button.addEventListener('click',openModal);
}
const modalContainer = document.getElementById('modal__container');
modalContainer.addEventListener('click', closeModal);
function openModal () {
    modalContainer.classList.add('active');
}

function closeModal (event) {
    if (event.target.id = 'modal__container') {
        if (!modalContainer.classList.contains('active')) return;
        modalContainer.classList.remove('active');
    }
}