import Swal from 'sweetalert2';
import { Auth } from './authService';
import { authButtonRef } from './common/refs';
import { authModal } from './sweetAlert';

authButtonRef.addEventListener('click', onAuthButtonClick);
async function onAuthButtonClick(event) {
  if (event.currentTarget.textContent === 'Sign out') {
    return Auth.signOut();
  }

  const create = document.querySelector('.auth-form__button');
  console.log('~ create', create);
  const values = (await Swal.fire(authModal)).value;

  if (values) {
    const { email, password } = values;

    Auth.signIn(email, password);
  }
}

Auth.checkUser();
