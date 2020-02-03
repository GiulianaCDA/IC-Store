function handleLogin() {
    name = document.getElementById("form-email").value;
    localStorage.setItem('email', name);
    window.location.href = "../index.html";
}

function handleForm(event) { 
    event.preventDefault();
}

const form = document.getElementById("loginForm");
form.addEventListener('submit', handleForm);

/* const inputField = document.querySelector('input[type="text"]')

inputField.addEventListener('input', event => {
    console.log(`The value entered is ${inputField.value}`)
}) */