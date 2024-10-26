// JavaScript for lightbox functionality
const portfolioItems = document.querySelectorAll('.portfolio-item img');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        // Logic to open the clicked image in a lightbox
    });
});

var touchStartX = 0;
    var touchEndX = 0;
    var carousel = document.getElementById('portfolioCarousel');

    carousel.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX) {
            $('#portfolioCarousel').carousel('next');
        }
        if (touchEndX > touchStartX) {
            $('#portfolioCarousel').carousel('prev');
        }
    }
  
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".navbar").style.top = "0";
        } else {
            document.querySelector(".navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

