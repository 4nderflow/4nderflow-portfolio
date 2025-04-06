let nav_links = document.getElementById("links");
let nav_links_selectors = document.querySelector(".nav-bar-links-contain");
let statusVAR = false;

nav_links.onclick = function() {
    if(statusVAR == false) {
        nav_links_selectors.style.opacity = "1";
        nav_links_selectors.style.transition = "opacity .2s ease-in-out";
        statusVAR = true;
    } else {
        statusVAR = false;
        nav_links_selectors.style.transition = "opacity .2s ease-in-out";
        nav_links_selectors.style.opacity = "0";
    }
    
} 