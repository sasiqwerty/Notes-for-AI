// Get the header
const header = document.getElementById("stickyHeader");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky-active" when you leave the scroll position
function checkSticky() {
    if (window.scrollY > sticky) { // Use window.scrollY
        header.classList.add("sticky-active");
    } else {
        header.classList.remove("sticky-active");
    }
}

// Listen for scroll events
window.addEventListener("scroll", checkSticky);
