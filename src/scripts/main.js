'use strict';

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]',
);

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const inputName = input.getAttribute('name');
  let labelText = '';

  switch (inputName) {
    case 'firstName':
      labelText = 'First Name';
      input.setAttribute('placeholder', 'First Name');
      break;
    case 'lastName':
      labelText = 'Last Name';
      input.setAttribute('placeholder', 'Last Name');
      break;
    case 'email':
      labelText = 'Email';
      input.setAttribute('placeholder', 'Email');
      break;
    case 'password':
      labelText = 'Password';
      input.setAttribute('placeholder', 'Password');
      break;
    default:
      labelText =
        inputName.charAt(0).toUpperCase() +
        inputName.slice(1).replace(/([A-Z])/g, ' $1');
  }

  label.textContent = labelText;

  input.parentNode.insertBefore(label, input);
});
