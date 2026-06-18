
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {

      let isValid = true;

      form.querySelectorAll('input, textarea').forEach(field => {
        if (field.hasAttribute('required') && field.value.trim() === '') {
          isValid = false;
          field.setCustomValidity('This field cannot be empty');
        } else {
          field.setCustomValidity('');
        }
      });

      if (!form.checkValidity() || !isValid) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false)
  })
})()