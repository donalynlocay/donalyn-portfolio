// Initialize EmailJS
emailjs.init({
    publicKey: "k5gBVae-Xv2MD_xmr",
});

const form = document.getElementById("contact-form");
const btn = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    btn.disabled = true;
    btn.textContent = "Sending...";

    emailjs.sendForm(
        "service_jzyw81o",
        "template_3bk1d97",
        this
    )
    .then(() => {

        alert("✅ Your message has been sent successfully!");

        form.reset();

        btn.disabled = false;
        btn.textContent = "Send Message";

        location.reload();

    })
    .catch((error) => {

        console.error(error);

        alert("❌ Failed to send message. Please try again.");

        btn.disabled = false;
        btn.textContent = "Send Message";

    });

});const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("zoom-card");

    });

});const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("active");

    });

});