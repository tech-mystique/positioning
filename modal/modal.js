const button = document.querySelector('#button');
const modal = document.querySelector('#modal');

const toggleModal = () => {
    modal.classList.toggle('visible')
}
    
button.addEventListener('click', toggleModal)