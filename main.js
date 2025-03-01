// Change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100);
});

// Show "Are you signed in?" popup only on first visit (not after login/signup)
window.addEventListener('load', () => {
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(() => {
            document.getElementById('check-signin-popup').classList.add('show');
        }, 1000); // Show after 1 second
    }
});

// Handle "Yes" button (just close popup)
document.getElementById('yes-btn').addEventListener('click', () => {
    document.getElementById('check-signin-popup').classList.remove('show');
    sessionStorage.setItem('popupShown', 'true'); // Prevent showing again
});

// Handle "No" button (show sign-in popup)
document.getElementById('no-btn').addEventListener('click', () => {
    document.getElementById('check-signin-popup').classList.remove('show');
    
    setTimeout(() => {
        document.getElementById('signin-popup').classList.add('show');
    });

    sessionStorage.setItem('popupShown', 'true'); // Prevent showing again
});

// Redirect to sign-up page when clicking "Sign up"
document.getElementById('signup-btn').addEventListener('click', () => {
    sessionStorage.setItem('popupShown', 'true'); // Prevent showing again
    window.location.href = "index.html"; // Change this to your login page URL
});

// Show/hide FAQ answer
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Change icon
        const icon = faq.querySelector('.faq_icon i');
        icon.className = icon.className === 'uil uil-plus-square' ? 'uil uil-minus-square' : 'uil uil-plus-square';
    });
});

// Initialize Swiper
var swiper = new Swiper(".myswiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        }
    }
});

// Show/hide nav menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

// Close nav button
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeNav);
