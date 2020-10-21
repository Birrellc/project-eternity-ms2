function sendMail(bookingForm) {
    emailjs.send("gmail", "eternity",{
        "from_name": bookingForm.fullname.value,
        "from_email": bookingForm.email.value,
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