document.addEventListener('DOMContentLoaded', () => {
      const authContainer = document.querySelector('.auth-container');
      const toRegisterBtn = document.getElementById('to-register');
      const toLoginBtn = document.getElementById('to-login');
            if (toRegisterBtn && toLoginBtn && authContainer) {
            toRegisterBtn.addEventListener('click', () => {
                  authContainer.classList.add('active');
            });
            toLoginBtn.addEventListener('click', () => {
                  authContainer.classList.remove('active');});
            }
            const passwordToggles = document.querySelectorAll('.password-toggle');
            passwordToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                  const passwordInput = toggle.parentElement.querySelector('input');
                  if (passwordInput) {
                  if (passwordInput.type === 'password') {
                  passwordInput.type = 'text';
                  toggle.textContent = '🙈';
                  toggle.setAttribute('aria-label', 'Masquer le mot de passe');
                  } else {
                  passwordInput.type = 'password';
                  toggle.textContent = '👁️';
                  toggle.setAttribute('aria-label', 'Afficher le mot de passe');}}
            });
      });
});