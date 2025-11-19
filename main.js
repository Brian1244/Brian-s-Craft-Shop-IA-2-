document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logout-btn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            const currentUser = localStorage.getItem("currentUser");

            if (!currentUser) {
                alert("You are not logged in.");
                return;
            }

            localStorage.removeItem("currentUser");
            alert("You have been logged out.");
            window.location.href = "login.html";
        });
    }
});
