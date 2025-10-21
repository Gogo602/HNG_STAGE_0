


 document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.querySelector('[data-testid="test-contact-success"]');

    // Select all required input/textarea elements by their data-testid
    const nameInput = document.querySelector('[data-testid="test-contact-name"]');
    const emailInput = document.querySelector('[data-testid="test-contact-email"]');
    const subjectInput = document.querySelector('[data-testid="test-contact-subject"]');
    const messageInput = document.querySelector('[data-testid="test-contact-message"]');

    // Select all error message containers
    const errorName = document.querySelector('[data-testid="test-contact-error-name"]');
    const errorEmail = document.querySelector('[data-testid="test-contact-error-email"]');
    const errorSubject = document.querySelector('[data-testid="test-contact-error-subject"]');
    const errorMessage = document.querySelector('[data-testid="test-contact-error-message"]');

    // email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    function displayError(errorElement, message) {
        if (message) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            return true;
        } else {
            errorElement.textContent = '';
            errorElement.style.display = 'none';
            return false;
        }
    }

    /*Validations*/
    function validateForm() {
        let isValid = true;

        // 1. Validate Full Name (Required)
        if (nameInput.value.trim() === '') {
            displayError(errorName, 'Full Name is required.');
            isValid = false;
        } else {
            displayError(errorName, '');
        }

        // 2. Validate Email (Required and Format)
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            displayError(errorEmail, 'Email is required.');
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            displayError(errorEmail, 'Please enter a valid email address (e.g., name@example.com).');
            isValid = false;
        } else {
            displayError(errorEmail, '');
        }

        // 3. Validate Subject (Required)
        if (subjectInput.value.trim() === '') {
            displayError(errorSubject, 'Subject is required.');
            isValid = false;
        } else {
            displayError(errorSubject, '');
        }

        // 4. Validate Message (Required and Min Length)
        const messageValue = messageInput.value.trim();
        if (messageValue === '') {
            displayError(errorMessage, 'Message is required.');
            isValid = false;
        } else if (messageValue.length < 10) {
            displayError(errorMessage, 'Message must be at least 10 characters long.');
            isValid = false;
        } else {
            displayError(errorMessage, '');
        }

        return isValid;
    }

    /*Handle form submission*/
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // Hide the success message
        successMessage.style.display = 'none';

        if (validateForm()) {
            
            // success message
            successMessage.style.display = 'block';
            
            // Clear the form fields 
            form.reset();

        }
    });
    
    //real-time validation feedback 
    nameInput.addEventListener('blur', validateForm);
    emailInput.addEventListener('blur', validateForm);
    subjectInput.addEventListener('blur', validateForm);
    messageInput.addEventListener('blur', validateForm);
});