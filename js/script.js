// Video Player Functionality
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.features-video');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    const videoTime = document.querySelector('.video-time');

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    function updateTime() {
        if (video.duration) {
            videoTime.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        }
    }
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            video.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateTime);
    video.addEventListener('ended', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    $('.testimonials-carousel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        pauseOnFocus: true,
        adaptiveHeight: true
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const modal = document.getElementById('successModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const contactForm = document.getElementById('contactForm');
    const sendButton = document.querySelector('.send-button');
    

    function openModal() {
        modal.style.display = 'flex';
        document.body.classList.add('no-scroll');
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.classList.remove('no-scroll');
    }
    
    closeModalBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        openModal();
        
        contactForm.reset();
    });
});

function initPricingCarousel() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentIndex = 0;
    
    showPricingCard(currentIndex);
    
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showPricingCard(index);
        });
    });
    
    function showPricingCard(index) {
        pricingCards.forEach(card => {
            card.classList.remove('active');
        });
        
        carouselDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        
        pricingCards[index].classList.add('active');
        carouselDots[index].classList.add('active');
        currentIndex = index;
    }
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % pricingCards.length;
        showPricingCard(currentIndex);
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    initPricingCarousel();
});