// Menú Móvil
function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Lógica de Scroll (Barra de progreso y Revelación)
window.addEventListener('scroll', () => {
    // Barra de progreso
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("progress-bar");
    if(progressBar) progressBar.style.width = scrolled + "%";

    // Reveal de secciones
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
});

// Contador
const countdownDate = new Date("March 9, 2026 00:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }
}, 1000);

// Rastro del Mouse
document.addEventListener('mousemove', (e) => {
    const rastro = document.createElement('div');
    rastro.className = 'mouse-trail';
    rastro.style.left = (e.pageX - 4) + 'px';
    rastro.style.top = (e.pageY - 4) + 'px';
    document.body.appendChild(rastro);
    setTimeout(() => rastro.remove(), 500);
});