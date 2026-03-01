const envelope = document.getElementById("envelope");
const letter = document.querySelector('.letter');
const letterImg = document.querySelector('.letter img');

// On open: preload and swap the high-res image, then enlarge it inside the
// letter so it appears bigger and above the envelope (no full-screen overlay).
envelope.addEventListener('click', function () {
    envelope.classList.toggle('open');

    if (!letterImg) return;

    if (!envelope.classList.contains('open')) {
        // closing: remove expanded style
        letterImg.classList.remove('large');
        return;
    }

    const highRes = letterImg.dataset.highres || 'carta.jpeg';

    // If already loaded, just expand
    if (letterImg.dataset.loaded === 'true') {
        letterImg.classList.add('large');
        return;
    }

    // Preload high-res image, then swap and expand
    const pre = new Image();
    pre.onload = function () {
        letterImg.src = highRes;
        letterImg.dataset.loaded = 'true';
        // add class that makes it slightly larger and lifted
        // envelope.open { overflow: visible } ensures image can overflow
        letterImg.classList.add('large');
        // ensure image is visible once loaded
        letterImg.style.opacity = '1';
    };
    pre.onerror = function () {
        letterImg.src = highRes;
        letterImg.dataset.loaded = 'true';
        letterImg.classList.add('large');
        letterImg.style.opacity = '1';
    };
    pre.src = highRes;
});