document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        slides[currentSlide].classList.add('slide-animating');
        setTimeout(function () {
            slides[currentSlide].classList.remove('slide-animating');
            showSlide(currentSlide + 1);
        }, 500);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    document.getElementById('prevBtn').addEventListener('click', function () {
        prevSlide();
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        nextSlide();
    });
});
