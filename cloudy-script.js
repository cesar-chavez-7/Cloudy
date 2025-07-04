// Seleccionamos todas las nubes por clase
document.querySelectorAll('.cloud').forEach(cloud => {
  cloud.addEventListener('click', () => {
    const message = cloud.getAttribute('data-message');
    
    // Mostrar mensaje con alerta (temporal)
    alert(message);

    // En el futuro: aquí puedes abrir un modal o mostrar algo más bonito
  });
});