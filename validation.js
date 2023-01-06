const form = document.getElementById('contact-form');

function validateEmail(event) {
  // Getting email
  const emailField = document.getElementById('contact-user-email');
  const email = emailField.value;

  const errorMsg = document.createElement('p');
  errorMsg.setAttribute('id', 'errorMsg');
  errorMsg.innerHTML = 'Email must be lowercase';

  // Check if the email is lowercase
  if (email.toLowerCase() !== email) {
    // Clear the email field
    emailField.value = '';

    // Focus on the email field
    emailField.focus();

    // Return false to prevent the form from being submitted
    event.preventDefault();
    emailField.parentElement.insertBefore(errorMsg, emailField);
  }

  // If the email lowercase, submit form
  return true;
}

form.addEventListener('submit', validateEmail);
