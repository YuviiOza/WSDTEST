// $(document).ready(function() {
//     // Counter Animation
//     function animateCounters() {
//         $('.counter').each(function() {
//             const $this = $(this);
//             const target = parseInt($this.attr('data-target'));
            
//             $({ countNum: 0 }).animate({
//                 countNum: target
//             }, {
//                 duration: 2000,
//                 easing: 'linear',
//                 step: function() {
//                     $this.text(Math.floor(this.countNum));
//                 },
//                 complete: function() {
//                     $this.text(target);
//                 }
//             });
//         });
//     }

//     // Services Cards Hover Effect
//     $('.services-cards .card').hover(
//         function() {
//             $(this).addClass('expanded');
//             $(this).siblings().addClass('minimized');
//         },
//         function() {
//             $(this).removeClass('expanded');
//             $(this).siblings().removeClass('minimized');
//         }
//     );

//     // Buddies Carousel
//     function initBuddiesCarousel() {
//         $('.buddies-carousel').slick({
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             autoplay: true,
//             responsive: [
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 1
//                     }
//                 }
//             ]
//         });
//     }

//     // Initialize functions
//     animateCounters();
//     initBuddiesCarousel();
// });

// function toggleAccordion(element) {
//     let allItems = document.querySelectorAll('.accordion-item');
    
//     // Remove "active" class from all except the clicked one
//     allItems.forEach(item => {
//         if (item !== element) {
//             item.classList.remove('active');
//         }
//     });

//     // Toggle active class on clicked item
//     element.classList.toggle('active');
// }

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

document.addEventListener("DOMContentLoaded", () => {
// document.addEventListener("mouseover", () => {
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
});

/* MEET OUR BUDDIES */
// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = document.querySelector(".carousel-container");

//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     carousel.addEventListener("mousedown", (e) => {
//         isDown = true;
//         startX = e.pageX - carousel.offsetLeft;
//         scrollLeft = carousel.scrollLeft;
//     });

//     carousel.addEventListener("mouseleave", () => {
//         isDown = false;
//     });

//     carousel.addEventListener("mouseup", () => {
//         isDown = false;
//     });

//     carousel.addEventListener("mousemove", (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - carousel.offsetLeft;
//         const walk = (x - startX) * 2; // Adjust scroll speed
//         carousel.scrollLeft = scrollLeft - walk;
//     });
// });
// $(document).ready(function() {
//     const $track = $('.carousel-track');
//     const $cards = $('.carousel-card');
//     const cardWidth = $cards.first().outerWidth(true);
//     let currentIndex = 0;
//     const totalCards = $cards.length;
//     const visibleCards = 3;

//     // Disable prev/next buttons when at the start or end
//     function updateNavigationButtons() {
//         $('.carousel-prev').prop('disabled', currentIndex === 0);
//         $('.carousel-next').prop('disabled', currentIndex + visibleCards >= totalCards);
//     }

//     // Next Button Click
//     $('.carousel-next').on('click', function() {
//         if (currentIndex + visibleCards < totalCards) {
//             currentIndex++;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             updateNavigationButtons();
//         }
//     });

//     // Previous Button Click
//     $('.carousel-prev').on('click', function() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//             updateNavigationButtons();
//         }
//     });

//     // Initial button state
//     updateNavigationButtons();

//     // Optional: Responsive Resize Handler
//     $(window).on('resize', function() {
//         const newCardWidth = $cards.first().outerWidth(true);
//         $track.css('transform', `translateX(-${currentIndex * newCardWidth}px)`);
//     });

//     // Optional: Touch/Swipe Support for Mobile
//     let touchStartX = 0;
//     $track.on('touchstart', function(e) {
//         touchStartX = e.originalEvent.touches[0].clientX;
//     });

//     $track.on('touchend', function(e) {
//         const touchEndX = e.originalEvent.changedTouches[0].clientX;
//         if (touchStartX > touchEndX && currentIndex + visibleCards < totalCards) {
//             // Swipe left
//             currentIndex++;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//         } else if (touchStartX < touchEndX && currentIndex > 0) {
//             // Swipe right
//             currentIndex--;
//             $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
//         }
//         updateNavigationButtons();
//     });
// });
$(document).ready(function() {
    const $track = $('.buddies-carousel-track');
    const $cards = $('.buddy-card');
    const cardWidth = $cards.first().outerWidth(true);
    let currentIndex = 0;
    const totalCards = $cards.length;
    const visibleCards = 3;

    function updateNavigationButtons() {
        $('.buddies-carousel-prev').prop('disabled', currentIndex === 0);
        $('.buddies-carousel-next').prop('disabled', currentIndex + visibleCards >= totalCards);
    }

    $('.buddies-carousel-next').on('click', function() {
        if (currentIndex + visibleCards < totalCards) {
            currentIndex++;
            $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
            updateNavigationButtons();
        }
    });

    $('.buddies-carousel-prev').on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
            updateNavigationButtons();
        }
    });

    updateNavigationButtons();
});

// OUR TEAM
$(document).ready(function() {
    const $track = $('.team-carousel-track');
    const $cards = $('.team-member-card');
    const cardWidth = $cards.first().outerWidth(true);
    let currentIndex = 0;
    const totalCards = $cards.length;
    const visibleCards = 3;

    function updateNavigationButtons() {
        $('.team-carousel-prev').prop('disabled', currentIndex === 0);
        $('.team-carousel-next').prop('disabled', currentIndex + visibleCards >= totalCards);
    }

    $('.team-carousel-next').on('click', function() {
        if (currentIndex + visibleCards < totalCards) {
            currentIndex++;
            $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
            updateNavigationButtons();
        }
    });

    $('.team-carousel-prev').on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            $track.css('transform', `translateX(-${currentIndex * cardWidth}px)`);
            updateNavigationButtons();
        }
    });

    updateNavigationButtons();
});