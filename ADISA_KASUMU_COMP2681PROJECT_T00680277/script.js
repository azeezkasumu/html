//donation
function validateDonationAmount() {
// Get the value entered in the donation input field
var donation = document.getElementById("donation-input").value;

// Convert the value to a number
var donationAmount = parseFloat(donation);

// Check if the value is a valid number
if (isNaN(donationAmount) || donationAmount <= 0) {
alert("Please enter a valid donation amount!");
} else {
// Show the thank you message
alert("Thank you for your donation!");
}
}



//coutdown timer

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 1, 2023 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown-timer"
    document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-timer").innerHTML = "EXPIRED";
    }
  }, 1000);



//inquiries

  function showThankYou() {
    // Display thank you message
    alert("Thank you for your submission!");
  }
