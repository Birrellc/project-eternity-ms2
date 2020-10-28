function sendMail(bookingForm) {
    emailjs.send("gmail", "eternity",{
        "from_name": bookingForm.fullnamebooking.value,
        "from_email": bookingForm.emailbooking.value,
        "number_of_guests": bookingForm.tablesizeselect.value,
        "date_time": bookingForm.date_time.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}


function sendMailContact(contactForm) {
    emailjs.send("gmail", "eternity-contact",{
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.email.value,
        "subject": contactForm.subject.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}