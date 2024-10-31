document.getElementById("form-container").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const formContainer = document.getElementById("form-container");
  
   
    formContainer.innerHTML = `
      <h2>¡Gracias por agendar una reunión!</h2>
      <p>Nos pondremos en contacto contigo pronto para coordinar la reunión.</p>
    `;
  });
   