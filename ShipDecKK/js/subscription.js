
document.addEventListener("DOMContentLoaded", (e) => {
    // console.log("pingfromsubs")
    const form = document.getElementById('subscribe-form');
    const fullNameInput = document.getElementById('full-name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const ageInput = document.getElementById('age');
    const agreeCheckbox = document.getElementById('agree');

    // console.log(form)

    function hasUppercase(str) {
        for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toLowerCase()) {
            return true;
        }
        }
        return false;
    }

    function hasLowercase(str) {
        for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toUpperCase()) {
            return true;
        }
        }
        return false;
    }

    function hasSpecialChar(str) {
        const specialChars = "!@#$%^&*()_+{}[]=<>,.?~`-";
        for (let i = 0; i < str.length; i++) {
        if (specialChars.includes(str[i])) {
            return true;
        }
        }
        return false;
    }

    function isValidEmail(email) {
        if (!email.includes('@')) return false;

        const parts = email.split('@');
        if (parts.length !== 2) return false;

        const domain = parts[1];
        if (!domain.includes('.')) return false;

        return true;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        console.log("ping");

        const fullName = fullNameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();
        const age = ageInput.value;

        // Validate Full Name
        if (fullName.length < 5) {
            alert('Please enter your full name.');
        }

        // Validate Email
        else if (!isValidEmail(email)) {
            alert('Please enter a valid email address (must include @ and a domain like example.com).');
        }

        // Validate Phone Number
        else if (!phone || phone.length < 10) {
            alert('Please enter a valid phone number (at least 10 digits).');
        }

        // Validate Password
        else if (password.length < 8) {
            alert('Password must be at least 8 characters long.');

        }

        else if (!hasUppercase(password)) {
            alert('Password must contain at least one uppercase letter.');
            
        }

        else if (!hasLowercase(password)) {
            alert('Password must contain at least one lowercase letter.');

        }

        else if (!hasSpecialChar(password)) {
            alert('Password must contain at least one special character (e.g. !, @, #).');
            
        }

        // Validate Age
        else if (!age || isNaN(age) || age < 17) {
            alert('Please enter a valid age (must be over 17).');

        }

        // Validate Checkbox
        else if (!agreeCheckbox.checked) {
            alert('Please agree to receive marketing emails.');

        }

        else {
            // If all validations pass      
            alert('Thank you for subscribing! Your information has been submitted.');

            console.log(`Name: ${fullName}\nEmail: ${email}\npassword: ${password}\nPhone Number: ${phone}\n Age: ${age}`);
            form.reset();
        }
        
    });

})

