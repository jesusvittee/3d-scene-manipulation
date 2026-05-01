
function loadWorld(url, btn) {
  const iframe = document.getElementById('viewer');

  // Efecto de carga simple
  iframe.style.opacity = '0';

  setTimeout(() => {
    iframe.src = url;
    iframe.style.opacity = '1';
  }, 150);

  // Actualizar botones
  document.querySelectorAll('.btn-ui').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Solución para posibles errores de ruta en el iframe
document.getElementById('viewer').onload = function () {
  this.style.opacity = '1';
};
