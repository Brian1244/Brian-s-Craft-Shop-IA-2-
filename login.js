
document.addEventListener("DOMContentLoaded", function() {

    
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault(); 

        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        const storedUser = JSON.parse(localStorage.getItem(username));

        if (!storedUser) {
            alert("User not found! Please register first.");
            return;
        }

        
        if (storedUser.password === password) {
            alert(`Welcome back, ${storedUser.name}!`);
            
            
            localStorage.setItem("currentUser", username);

            
            window.location.href = "index.html";
        } else {
            alert("Incorrect password. Try again.");
        }
    });

});
