

$(document).ready(function() {
  $('#form-container').on('submit', function(event) {
      let formularioValido = true;
      let mensajeError = '';

      // Validar campos requeridos
      $('#myForm').find('input[required]').each(function() {
          if ($(this).val().trim() === '') {
              formularioValido = false;
              mensajeError = 'Por favor, completa todos los campos.';
              return false; // Detener la iteración si hay un campo vacío
          }
      });

      if (!formularioValido) {
          event.preventDefault(); // Evitar envío si hay errores
          $('#error').text(mensajeError);
      } else {
          $('#error').text(''); // Limpiar mensaje de error

          // Mostrar mensaje de agradecimiento
          event.preventDefault(); // Evitar el envío por defecto para mostrar el mensaje personalizado
          $('#form-container').html(`
              <div class="boxMensajeCompra">
                  <h2 class="mensajeCompra">¡Gracias por agendar una reunión!</h2>
                  <p>Nos pondremos en contacto contigo pronto para coordinar la reunión.</p>
              </div>
          `);
      }
  });
});




document.getElementById('menuToggle').addEventListener('click', function () {
  const links = document.getElementById('links');
  links.classList.toggle('show'); // Alternar la clase para mostrar/ocultar
});