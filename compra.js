

$(document).ready(function() {
  $('#form-container').on('submit', function(event) {
      let formularioValido = true;
      let mensajeError = '';


      $('#myForm').find('input[required]').each(function() {
          if ($(this).val().trim() === '') {
              formularioValido = false;
              mensajeError = 'Por favor, completa todos los campos.';
              return false; 
          }
      });

      if (!formularioValido) {
          event.preventDefault(); 
          $('#error').text(mensajeError);
      } else {
          $('#error').text(''); 

         
          event.preventDefault(); 
          $('#form-container').html(`
            <main id="main" class="boxMensajeCompra">
                <h2 class="mensajeCompra">¡Gracias por agendar una reunión!</h2>
                <p>Nos pondremos en contacto contigo pronto para coordinar la reunión.</p>
            </main>
          `);
      }
  });
});



document.getElementById('menuToggle').addEventListener('click', function () {
    const links = document.getElementById('links');
    links.classList.toggle('show'); 
    $('#main').toggleClass('blur');
});