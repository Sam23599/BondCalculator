// Function to send data to backend server
function sendData() {
  // Get form data
  var formData = new FormData(document.getElementById("my-form"));

  // Send form data to backend server
  // Replace the URL below with the URL of your backend server
  fetch("http://example.com/my-backend", {
    method: "POST",
    body: formData
  })
  .then(response => {
    // Handle response from backend server
    console.log("Data sent successfully!");
    // Redirect to new page after sending data
    window.location.href = "result.html";
  })
  .catch(error => {
    console.error("Error sending data: ", error);
  });
}

// Add event listener to submit button
document.getElementById("submit-btn").addEventListener("click", function(event) {
  // Prevent default form submission behavior
  event.preventDefault();
   window.location.href = "result.html";

  // Call sendData function
  sendData();
});
