function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let errorMessage = "";

    if (!name) errorMessage += "Name is required.\n";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errorMessage += "Valid email is required.\n";
    if (!phone || !/^[0-9]+$/.test(phone)) errorMessage += "Valid phone number is required.\n";

    if (errorMessage) {
        alert(errorMessage);
        return false;
    }

    document.getElementById("registration-form").style.display = "none";
    document.getElementById("success-message").style.display = "block";
    document.getElementById("cheers-animation").classList.remove("hidden");
    return false;
}

function startCountdown(eventDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;
        if (timeLeft <= 0) {
            document.getElementById("countdown").innerHTML = "The event has started!";
            return;
        }
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    const eventDate = new Date("2025-06-01T00:00:00").getTime();
    startCountdown(eventDate);
});
