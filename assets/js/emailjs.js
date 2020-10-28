function sendMail(contactForm) {
    emailjs.send("gmail", "eternity-contact", {
            "from_name": contactForm.fullname.value,
            "from_email": contactForm.email.value,
            "subject": contactForm.subject.value,
            "message": contactForm.message.value
        })
        .then(
            function () {
                alert("success");
                let submitButtonContact = document.getElementById("submitBtnContact");
                submitButtonContact.style.backgroundColor = "#00ff00";
                submitButtonContact.style.color = "#0a0908"
                submitButtonContact.innerHTML = "Submitted!";
                document.getElementById("submitBtnContact").disabled = true;
            },
            function (error) {
                alert("Error Please Try Again!")
                console.log("FAILED", error);
            });
            document.getElementById('contactForm').reset();
    return false;
}

function sendMailBooking(bookingForm) {
    emailjs.send("gmail", "eternity", {
            "from_name": bookingForm.fullnamebooking.value,
            "from_email": bookingForm.emailbooking.value,
            "number_of_guests": bookingForm.tablesizeselect.value,
            "date_time": bookingForm.date_time.value
        })
        .then(
            function () {
                alert("success");
                let submitButton = document.getElementById("submitBtnBooking");
                submitButton.style.backgroundColor = "#00ff00";
                submitButton.style.color = "#0a0908"
                submitButton.innerHTML = "Submitted!";
                document.getElementById("submitBtnBooking").disabled = true;
            },
            function (error) {
                console.log("FAILED", error);
            });
    return false;
}