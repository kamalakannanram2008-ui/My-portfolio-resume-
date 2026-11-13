const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile Navigation
menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});

// Close menu after clicking a link
const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});

// Welcome message
console.log("Welcome to Kamalakannan R Portfolio!");
