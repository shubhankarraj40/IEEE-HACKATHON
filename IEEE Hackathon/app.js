   // Mobile Navigation Toggle
   const hamburger = document.getElementById("hamburger");
   const navLinks = document.querySelector(".nav-links");

   hamburger.addEventListener("click", () => {
     navLinks.classList.toggle("active");
   });

   // Modal Functionality
   const registerBtn = document.getElementById("registerBtn");
   const registerModal = document.getElementById("registerModal");
   const closeModal = document.getElementById("closeModal");

   registerBtn.addEventListener("click", () => {
     registerModal.classList.add("show");
   });

   closeModal.addEventListener("click", () => {
     registerModal.classList.remove("show");
   });

   window.addEventListener("click", (e) => {
     if (e.target === registerModal) {
       registerModal.classList.remove("show");
     }
   });

   // Registration Form Submission
   document
     .getElementById("registrationForm")
     .addEventListener("submit", function (e) {
       e.preventDefault();
       alert(
         "Thank you for registering! We will contact you soon with more details."
       );
       registerModal.classList.remove("show");
     });

   // Countdown Timer
   const countdownDate = new Date("July 15, 2025 09:00:00").getTime();

   function updateCountdown() {
     const now = new Date().getTime();
     const distance = countdownDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor(
       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById("days").innerHTML = days
       .toString()
       .padStart(2, "0");
     document.getElementById("hours").innerHTML = hours
       .toString()
       .padStart(2, "0");
     document.getElementById("minutes").innerHTML = minutes
       .toString()
       .padStart(2, "0");
     document.getElementById("seconds").innerHTML = seconds
       .toString()
       .padStart(2, "0");

     if (distance < 0) {
       clearInterval(countdownInterval);
       document.getElementById("countdown-timer").innerHTML =
         "<h3>Hackathon In Progress!</h3>";
     }
   }

   updateCountdown();
   const countdownInterval = setInterval(updateCountdown, 1000);

   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
     anchor.addEventListener("click", function (e) {
       e.preventDefault();

       document.querySelector(this.getAttribute("href")).scrollIntoView({
         behavior: "smooth",
       });

       // Close mobile menu if open
       if (navLinks.classList.contains("active")) {
         navLinks.classList.remove("active");
       }
     });
   });