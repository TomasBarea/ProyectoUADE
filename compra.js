
  $(document).ready(function(){
    $('#compraBtn').click(function(){
        $('#form-container').html(`<div class="boxMensajeCompra">
      <h2 class="mensajeCompra">¡Gracias por agendar una reunión!</h2>
      <p>Nos pondremos en contacto contigo pronto para coordinar la reunión.</p>
    </div>`); 
    });
});
   