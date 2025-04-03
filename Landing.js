function toggleAccordion(element) {
    let allItems = document.querySelectorAll('.accordion-item');

    // Close all items except the clicked one
    allItems.forEach(item => {
        if (item !== element) {
            item.classList.remove('active');
        }
    });

    // Toggle active class on clicked item
    element.classList.toggle('active');
}

// Counter Animation
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".count");

    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 100; // Adjust speed

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20); // Speed of counting
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

}); // Added the missing closing bracket here
// Hamburger Menu Functionality
    // const hamburgerMenu = document.querySelector('.hamburger-menu');
    // const navLinks = document.querySelector('.nav-links');

    // if (hamburgerMenu) {
    //     hamburgerMenu.addEventListener('click', function() {
    //         navLinks.classList.toggle('active');
    //         this.classList.toggle('menu-open');

    //         // Prevent body scroll when menu is open
    //         document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    //     });

    //     // Close menu when a nav link is clicked
    //     document.querySelectorAll('.nav-links a').forEach(link => {
    //         link.addEventListener('click', () => {
    //             navLinks.classList.remove('active');
    //             hamburgerMenu.classList.remove('menu-open');
    //             document.body.style.overflow = 'auto';
    //         });
    //     });
    // }
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            // Toggle menu
            navLinks.classList.toggle('active');
            this.classList.toggle('menu-open');

            // Animate nav items
            if (navLinks.classList.contains('active')) {
                navItems.forEach((item, index) => {
                    item.style.animationDelay = `${index * 0.1}s`;
                });
            }

            // Prevent body scroll when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('menu-open');
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking nav links
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('menu-open');
                document.body.style.overflow = 'auto';
            });
        });
    }
});
$(document).ready(function() {
    function initCarousel($track, $cards, navPrevSelector, navNextSelector) {
        let currentIndex = 0;
        const totalCards = $cards.length;

        // Adjust for mobile or desktop
        function updateCarousel() {
            const isMobile = window.innerWidth <= 768;
            const cardWidth = isMobile ? $track.width() : $cards.first().outerWidth(true);
            
            $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
        }

        // Next button functionality
        $(navNextSelector).on('click', function() {
            if (currentIndex < totalCards - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        // Previous button functionality
        $(navPrevSelector).on('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        // Touch/Swipe Support
        let touchStartX = 0;
        $track.on('touchstart', function(e) {
            touchStartX = e.originalEvent.touches[0].clientX;
        });

        $track.on('touchend', function(e) {
            const touchEndX = e.originalEvent.changedTouches[0].clientX;
            
            if (touchStartX > touchEndX && currentIndex < totalCards - 1) {
                // Swipe left
                currentIndex++;
            } else if (touchStartX < touchEndX && currentIndex > 0) {
                // Swipe right
                currentIndex--;
            }
            
            updateCarousel();
        });

        // Resize handler
        $(window).on('resize', updateCarousel);

        // Initial setup
        updateCarousel();
    }

    // Initialize carousels
    initCarousel(
        $('.buddies-carousel-track'), 
        $('.buddy-card'), 
        '.buddies-carousel-prev', 
        '.buddies-carousel-next'
    );

    initCarousel(
        $('.team-carousel-track'), 
        $('.team-member-card'), 
        '.team-carousel-prev', 
        '.team-carousel-next'
    );
});
