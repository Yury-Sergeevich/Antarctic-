const form = document.getElementById('form');
const username = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const checkbox = document.getElementById('checkbox');

function validateForm() {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (username.value && tel.value && email.value && checkbox.checked) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', tel.value);
      localStorage.setItem('email', email.value);
      form.submit();
    }
  });
}

export {validateForm};
