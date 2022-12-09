import IMask from 'imask';


const inputPhone = document.querySelectorAll('.form__input-phone');

function maskPhone() {
  inputPhone.forEach((item) => {
    const mask = new IMask(item, {
      mask: '{+7}(000)000-00-00',
    });
  });
}

export {maskPhone};
