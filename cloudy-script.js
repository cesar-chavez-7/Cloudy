const clouds = document.querySelectorAll('.cloud');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.getElementById('close-btn');

clouds.forEach(cloud => {
  cloud.addEventListener('click', () => {
    const message = cloud.getAttribute('data-message');
    modalText.textContent = message;
    modal.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Referencias al modal de plantación
const plantModal = document.getElementById('plant-modal');
const plantButton = document.querySelector('.plant-button');
const closePlantBtn = document.getElementById('close-plant-btn');
const submitCloud = document.getElementById('submit-cloud');
const cloudInput = document.getElementById('cloud-input');
const cloudsContainer = document.querySelector('.clouds');

// Abrir modal
plantButton.addEventListener('click', () => {
  plantModal.classList.remove('hidden');
});

// Cerrar modal
closePlantBtn.addEventListener('click', () => {
  plantModal.classList.add('hidden');
  cloudInput.value = '';
});

// Agregar nube al hacer clic en "Plantar"
submitCloud.addEventListener('click', () => {
  const message = cloudInput.value.trim();
  if (message === '') {
    alert('Por favor escribe algo para plantar.');
    return;
  }

  const newCloud = document.createElement('div');
  newCloud.classList.add('cloud');
  newCloud.setAttribute('data-message', message);
  newCloud.style.top = `${Math.random() * 60 + 10}%`;
  newCloud.style.left = `${Math.random() * 80 + 5}%`;
  newCloud.style.animationDelay = `${Math.random() * 4}s`;
  newCloud.textContent = '';

  // Mostrar mensaje en modal al hacer clic
  newCloud.addEventListener('click', () => {
    modalText.textContent = message;
    modal.classList.remove('hidden');
  });

  cloudsContainer.appendChild(newCloud);
  plantModal.classList.add('hidden');
  cloudInput.value = '';
});