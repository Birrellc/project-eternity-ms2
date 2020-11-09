let formContact = document.getElementById("contactForm");
formContact.addEventListener("submit", function (e) {
    e.preventDefault();
    let submitButtonContact = document.getElementById("submitBtnContact");
    submitButtonContact.innerHTML = "Submitting!";
    emailjs.send("gmail", "eternity-contact", {
            "from_name": contactForm.fullNameContact.value,
            "from_email": contactForm.emailContact.value,
            "subject": contactForm.subjectContact.value,
            "message": contactForm.messageContact.value
        })
        .then(
            function () {
                let submitButtonContact = document.getElementById("submitBtnContact");
                submitButtonContact.innerHTML = "Submitted!";
                document.getElementById("submitBtnContact").disabled = true;
            },
            function (error) {
                alert("Error Please Try Again!")
                console.log("FAILED", error);
            });
    document.getElementById('contactForm').reset();
    return false;
});

let formBooking = document.getElementById("bookingForm");
formBooking.addEventListener("submit", function (e) {
    e.preventDefault();
    let submitButtonContact = document.getElementById("submitBtnBooking");
                submitButtonContact.innerHTML = "Submitting!";
    emailjs.send("gmail", "eternity", {
            "from_name": bookingForm.fullNameBooking.value,
            "from_email": bookingForm.emailBooking.value,
            "number_of_guests": bookingForm.tableSizeSelectBooking.value,
            "date_time": bookingForm.date_time.value
        })
        .then(
            function () {
                let submitButtonContact = document.getElementById("submitBtnBooking");
                submitButtonContact.innerHTML = "Submitted!";
                document.getElementById("submitBtnBooking").disabled = true;
            },
            function (error) {
                alert("Error Please Try Again!")
                console.log("FAILED", error);
            });
    document.getElementById('bookingForm').reset();
    return false;
});