document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;

    // You can add form validation if needed, here it’s assumed the form is valid

    // Hide the form and show confirmation message
    document.querySelector(".booking-form").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";

    // Log booking info to the console (or send to the server)
    console.log(`Booking details:
    Name: ${name}
    Email: ${email}
    Date: ${date}
    Time: ${time}
    Guests: ${guests}`);
});