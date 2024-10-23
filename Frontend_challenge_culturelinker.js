document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const charCounter = document.getElementById('char-counter');
    const successMessage = document.getElementById('success-message');
    const themeToggle = document.getElementById('theme-toggle');

    // Handle dark mode toggle
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggle.textContent = document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    // Real-time character counter for the message
    messageInput.addEventListener('input', () => {
        charCounter.textContent = `${messageInput.value.length}/200 characters`;
    });

    // Form validation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            displayError('name-error', 'Name is required');
            isValid = false;
        } else {
            displayError('name-error', '');
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            displayError('email-error', 'Enter a valid email');
            isValid = false;
        } else {
            displayError('email-error', '');
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            displayError('message-error', 'Message is required');
            isValid = false;
        } else {
            displayError('message-error', '');
        }

        // If the form is valid, display success message
        if (isValid) {
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.classList.add('visible');
            form.reset();
            charCounter.textContent = '0/200 characters';
        }
    });

    // Function to display error messages
    function displayError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }
});