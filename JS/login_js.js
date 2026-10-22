let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Regex pentru formatul UVT: nume.prenume[optional 2 cifre]@e-uvt.ro
    const emailRegex = /^[a-z]+\.[a-z]+(\d{0,2})?@e-uvt\.ro$/;
    // Regex pentru parolă: minim 7 caractere, litere mari, mici, cifre și caracter special
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;

    if (!emailRegex.test(email)) {
        alert("Email-ul trebuie să respecte formatul UVT (ex: nume.prenume@e-uvt.ro)!");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Parola trebuie să aibă minim 7 caractere și să conțină litere mari, mici, cifre și un caracter special!");
        return;
    }

    alert("Login reușit!");
    window.location.href = "home.html";
});