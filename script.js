const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const formData = new FormData(contactForm);

        try {

            const response = await fetch("https://formspree.io/f/xpqvnrez", {

                method: "POST",

                body: formData,

                headers: {
                    "Accept": "application/json"
                }

            });

            if (response.ok) {

                document.getElementById("successMessage").style.display = "block";

                contactForm.reset();

                setTimeout(() => {

                    document.getElementById("successMessage").style.display = "none";

                }, 3000);

            } else {

                alert("❌ Failed to send message.");

            }

        } catch (error) {

            alert("❌ Something went wrong. Please try again.");

        }

    });

}
