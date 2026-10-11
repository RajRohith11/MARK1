```javascript
// MAPIFY MARKETING - JAVASCRIPT

// Smooth scroll to the services section
const exploreBtn = document.querySelector(".primary-btn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function (event) {
        const servicesSection = document.querySelector("#services");

        if (servicesSection) {
            event.preventDefault();

            servicesSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// Add a shadow to the navbar when scrolling
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.08)";
        } else {
            navbar.style.boxShadow = "none";
        }
    }
});

// Display a welcome message in the console
console.log("Welcome to Mapify Marketing!");
console.log("Strategy. Creativity. Growth.");
```