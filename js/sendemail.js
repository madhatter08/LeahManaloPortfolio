function sendMail() {
  // Email limit logic
  const emailLimit = 3; // Maximum emails allowed per day
  const now = new Date();
  const emailData = JSON.parse(localStorage.getItem("emailData")) || {};

  // Check if the last reset was more than 24 hours ago
  if (
    emailData.lastReset &&
    new Date(emailData.lastReset) < now.setHours(now.getHours() - 24)
  ) {
    // Reset email count
    emailData.count = 0;
    emailData.lastReset = new Date();
  }

  // Initialize data if not set
  emailData.count = emailData.count || 0;
  emailData.lastReset = emailData.lastReset || new Date();

  if (emailData.count >= emailLimit) {
    alert(
      `You’ve reached your daily limit of ${emailLimit} emails. Please try again in 24 hours.`
    );
    return false; // Prevent email sending
  }

  // Increment email count
  emailData.count++;
  localStorage.setItem("emailData", JSON.stringify(emailData));

  // Existing email sending logic
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_76g6b0i", "template_i1gncug", parms)
    .then(() => {
      alert("Email sent!");

      // Clear form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    })
    .catch((error) => {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    });

  return false; // Prevent form submission refresh
}
