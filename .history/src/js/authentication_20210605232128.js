import Swal from 'sweetalert2';
import { Auth } from './authService';
import { authButtonRef } from './common/refs';
import { authModal } from './sweetAlert';

authButtonRef.addEventListener('click', onAuthButtonClick);

async function onAuthButtonClick(event) {
  if (event.currentTarget.textContent === 'Sign out') {
    return Auth.signOut();
  }

  const values = (await Swal.fire(authModal)).value;

  // create.addEventListener('click', () => {
  //   console.log(event);
  // });

  if (values) {
    const { email, password } = values;

    Auth.signIn(email, password);
  }
}

function windowHandler(e) {
  const signUpBtn = e.target.dataset.button === 'signUp';
  const authModalTitle = document.querySelector('.auth-modal__title');
  const authModalConfirmBtn = document.querySelector('.auth-modal__button');
  const authFormText = document.querySelector('.auth-form__text');
  const authFormBtn = document.querySelector('.auth-form__button');
  console.log('~ authFormBtn', authFormBtn);

  if (!signUpBtn) {
    return;
  }

  authModalTitle.textContent = 'Sign up';
  authModalConfirmBtn.textContent = 'Sign up';
  authFormText.textContent = 'Already have account?';
  // authFormBtn.textContent = 'Sign in!';
}

window.addEventListener('click', windowHandler);
Auth.checkUser();
