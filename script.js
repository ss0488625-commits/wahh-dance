
const form = document.getElementById("joinForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const style = document.getElementById("style").value;

    if (!name || !email || !style) {
        document.getElementById("message").textContent =
            "Please complete all fields.";
        return;
    }

    document.getElementById("message").textContent =
        `Thanks, ${name}! Your interest in ${style} has been recorded in this demo.`;

    form.reset();
});
