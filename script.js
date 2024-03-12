let users = [];

function showOtherFrom(formId) {
    document.getElementById(formId).style.display = 'block';
    var otherFormId = (formId === 'loginForm') ? 'signupForm' : 'loginForm';
    document.getElementById(otherFormId).style.display = 'none';
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    if (!name == "" && !password == "" && !password == "") {
        users.push({ name, email, password });
        alert('Signed up successfully. You can now login.');
        showOtherFrom('loginForm');
    }
    else {

        alert("error: enter valid value in the feild")
    }

}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Welcome back, ${user.name}!`);
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
