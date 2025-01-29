// script.js
document.getElementById('menu-button').addEventListener('click', function() {
    const dropdown = document.getElementById('menu-dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// 메뉴 외부 클릭 시 드롭다운 닫기
window.addEventListener('click', function(event) {
    const dropdown = document.getElementById('menu-dropdown');
    if (event.target !== document.getElementById('menu-button')) {
        dropdown.style.display = 'none';
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// 다음 슬라이드로 이동
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// 이전 슬라이드로 이동
function prevSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

//setInterval(nextSlide, 5000); // 5초마다 다음 슬라이드로 이동

