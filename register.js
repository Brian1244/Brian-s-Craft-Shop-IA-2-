
document.addEventListener("DOMContentLoaded", function() {

    
    const registerForm = document.querySelector("form");

    registerForm.addEventListener("submit", function(e) {
        e.preventDefault(); 

        
        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        if (!name || !dob || !email || !username || !password) {
            alert("Please fill in all fields!");
            return;
        }

        
        if (localStorage.getItem(username)) {
            alert("Username already exists! Choose another one.");
            return;
        }

       
        const user = {
            name,
            dob,
            email,
            username,
            password
        };

        
        localStorage.setItem(username, JSON.stringify(user));

        alert("Registration successful! You can now log in.");

        registerForm.reset(); 
        
        window.location.href = "login.html";
    });

});
