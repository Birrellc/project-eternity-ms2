function sendMailBooking(bookingForm) {
    emailjs.send("gmail", "eternity", {
            "from_name": bookingForm.fullnamebooking.value,
            "from_email": bookingForm.emailbooking.value,
            "number_of_guests": bookingForm.tablesizeselect.value,
            "date_time": bookingForm.date_time.value
        })
        .then(
            function (success) {
                alert("Form Submited Successfully!", success);
            },
            function (error) {
                alert("Error detected please try again", error);
            });
    document.getElementById("bookingForm").reset();
}

function sendMailContact(contactForm) {
    emailjs.send("gmail", "eternity-contact", {
            "from_name": contactForm.fullname.value,
            "from_email": contactForm.email.value,
            "subject": contactForm.subject.value,
            "message": contactForm.message.value
        })
        .then(
            function () {
                alert("Form Submited Successfully!", success);
            },
            function (error) {
                alert("Error detected please try again", error);
            });
    document.getElementById("#contactForm").reset();
}