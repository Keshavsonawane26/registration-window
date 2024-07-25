document.getElementById('signupbtn').addEventListener('click', function() {
  // const phone = document.getElementById('phone').value;
  // const phoneError = document.getElementById('phoneError');

  // // Validate phone number length
  // if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
  //   phoneError.textContent = 'Phone number must be 10 digits.';
  //   phoneError.style.display = 'block';
  // } else {
  //   phoneError.style.display = 'none';
  // }

  const email = document.getElementById('email').value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(email)) {
      alert('Valid email address');
      return true;
  } else {
      alert('Invalid email address. Please enter a valid email address.');
      return false;
  }

  // Validate all required fields are filled
  const fields = ['name', 'email', 'dob', 'state', 'program'];
  let isValid = true;
  fields.forEach(field => {
    const value = document.getElementById(field).value;
    if (!value) {
      isValid = false;
    }
  });

  if (!isValid) {
    alert('Please complete all fields.');
    return; // Stop form submission
  }

  if (isValid && phone.length === 10 && /^\d{10}$/.test(phone)) {
    alert('Registration successful!');
    // You can add further code here to handle form data, like sending it to a server
  }
})
