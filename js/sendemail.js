function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_76g6b0i", "template_i1gncug", parms).then(alert("Email sent!"));
}