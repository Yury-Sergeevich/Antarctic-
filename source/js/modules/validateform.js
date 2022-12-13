const form = document.querySelector('.form__button-submit');
const username = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const checkbox = document.getElementById('checkbox');


function validateForm() {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (username.value && tel.value && email.value && checkbox.checked) {
      localStorage.setItem('username', username.value);
      localStorage.setItem('phone', tel.value);
      localStorage.setItem('email', email.value);
    }
    form.reset();
  });
}

export {validateForm};
