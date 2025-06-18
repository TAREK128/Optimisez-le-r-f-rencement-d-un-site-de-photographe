$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});
//نموذج تاكيد ارسال رسالة 
const form = document.querySelector("form");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!nom || !email || !message) {
    messageDiv.textContent = "Veuillez remplir tous les champs.";
    messageDiv.style.color = "red";
    return;
  }

  messageDiv.textContent = "Message envoyé avec succès !";
  messageDiv.style.color = "green";

  form.reset();
});
