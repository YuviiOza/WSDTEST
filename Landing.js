
// function toggleAccordion(element) {
//     let allItems = document.querySelectorAll('.accordion-item');

//     // Close all items except the clicked one
//     allItems.forEach(item => {
//         if (item !== element) {
//             item.classList.remove('active');
//         }
//     });

//     // Toggle active class on clicked item
//     element.classList.toggle('active');
// }

// document.addEventListener("DOMContentLoaded", () => {
// // document.addEventListener("mouseover", () => {
//     const counters = document.querySelectorAll(".count");

//     counters.forEach(counter => {
//         counter.innerText = "0";
//         const updateCount = () => {
//             const target = +counter.getAttribute("data-target");
//             const current = +counter.innerText;
//             const increment = target / 100; // Adjust speed

//             if (current < target) {
//                 counter.innerText = Math.ceil(current + increment);
//                 setTimeout(updateCount, 20); // Speed of counting
//             } else {
//                 counter.innerText = target;
//             }
//         };
//         updateCount();
//     });
// });


// $(document).ready(function() {
//     const $track = $('.buddies-carousel-track');
//     const $cards = $('.buddy-card');
//     const cardWidth = $cards.first().outerWidth(true);
//     let currentIndex = 0;
//     const totalCards = $cards.length;
//     const visibleCards = 3;

//     function updateNavigationButtons() {
//         $('.buddies-carousel-prev').prop('disabled', currentIndex === 0);
//         $('.buddies-carousel-next').prop('disabled', currentIndex + visibleCards >= totalCards);
//     }

//     $('.buddies-carousel-next').on('click', function() {
//         if (currentIndex + visibleCards < totalCards) {
//             currentIndex++;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             updateNavigationButtons();
//         }
//     });

//     $('.buddies-carousel-prev').on('click', function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             updateNavigationButtons();
//         }
//     });

//     updateNavigationButtons();
// });

// // OUR TEAM
// $(document).ready(function() {
//     const $track = $('.team-carousel-track');
//     const $cards = $('.team-member-card');
//     const cardWidth = $cards.first().outerWidth(true);
//     let currentIndex = 0;
//     const totalCards = $cards.length;
//     const visibleCards = 3;

//     function updateNavigationButtons() {
//         $('.team-carousel-prev').prop('disabled', currentIndex === 0);
//         $('.team-carousel-next').prop('disabled', currentIndex + visibleCards >= totalCards);
//     }

//     $('.team-carousel-next').on('click', function() {
//         if (currentIndex + visibleCards < totalCards) {
//             currentIndex++;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             updateNavigationButtons();
//         }
//     });

//     $('.team-carousel-prev').on('click', function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             updateNavigationButtons();
//         }
//     });

//     updateNavigationButtons();
// });

// // HAMBURGER
// document.addEventListener('DOMContentLoaded', function() {
//     const hamburgerMenu = document.querySelector('.hamburger-menu');
//     const navLinks = document.querySelector('.nav-links');

//     hamburgerMenu.addEventListener('click', function() {
//         navLinks.classList.toggle('active');
        
//         // Optional: Hamburger animation
//         this.classList.toggle('active');
//     });
// });

// Accordion Toggle Function
// Accordion Toggle Function
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

    // Hamburger Menu Functionality
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('menu-open');

            // Prevent body scroll when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Close menu when a nav link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('menu-open');
                document.body.style.overflow = 'auto';
            });
        });
    }
}); // Added the missing closing bracket here

// Rest of the code remains the same as in the previous submission

// Responsive Carousel Functions
// $(document).ready(function() {
//     // Function to handle carousel responsiveness
//     function initCarousel($track, $cards, navPrevSelector, navNextSelector) {
//         const cardWidth = $cards.first().outerWidth(true);
//         let currentIndex = 0;
//         const totalCards = $cards.length;
//         const visibleCards = window.innerWidth < 768 ? 1 : 3;

//         function updateNavigationButtons() {
//             $(navPrevSelector).prop('disabled', currentIndex === 0);
//             $(navNextSelector).prop('disabled', currentIndex + visibleCards >= totalCards);
//         }

//         $(navNextSelector).on('click', function() {
//             if (currentIndex + visibleCards < totalCards) {
//                 currentIndex++;
//                 $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//                 updateNavigationButtons();
//             }
//         });

//         $(navPrevSelector).on('click', function() {
//             if (currentIndex > 0) {
//                 currentIndex--;
//                 $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//                 updateNavigationButtons();
//             }
//         });

//         // Touch/Swipe Support
//         let touchStartX = 0;
//         $track.on('touchstart', function(e) {
//             touchStartX = e.originalEvent.touches[0].clientX;
//         });

//         $track.on('touchend', function(e) {
//             const touchEndX = e.originalEvent.changedTouches[0].clientX;
            
//             if (touchStartX > touchEndX && currentIndex + visibleCards < totalCards) {
//                 // Swipe left
//                 currentIndex++;
//                 $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             } else if (touchStartX < touchEndX && currentIndex > 0) {
//                 // Swipe right
//                 currentIndex--;
//                 $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             }
            
//             updateNavigationButtons();
//         });

//         updateNavigationButtons();

//         // Responsive resize handler
//         $(window).on('resize', function() {
//             const newVisibleCards = window.innerWidth < 768 ? 1 : 3;
//             if (newVisibleCards !== visibleCards) {
//                 currentIndex = 0;
//                 $track.css('transform', 'translateX(0)');
//                 updateNavigationButtons();
//             }
//         });
//     }

//     // Initialize Buddies Carousel
//     initCarousel(
//         $('.buddies-carousel-track'), 
//         $('.buddy-card'), 
//         '.buddies-carousel-prev', 
//         '.buddies-carousel-next'
//     );

//     // Initialize Team Carousel
//     initCarousel(
//         $('.team-carousel-track'), 
//         $('.team-member-card'), 
//         '.team-carousel-prev', 
//         '.team-carousel-next'
//     );
// });
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
