const envelope = document.getElementById("envelope");
const letterImg = document.querySelector('.letter img');

envelope.addEventListener('click', function () {

    envelope.classList.toggle('open');

    if (!letterImg) return;

    if (!envelope.classList.contains('open')) {
        letterImg.classList.remove('large');
        return;
    }

    const highRes = letterImg.dataset.highres || 'carta.jpeg';

    if (letterImg.dataset.loaded === 'true') {
        letterImg.classList.add('large');
        return;
    }

    const pre = new Image();

    pre.onload = function () {
        letterImg.src = highRes;
        letterImg.dataset.loaded = 'true';
        letterImg.classList.add('large');
        letterImg.style.opacity = '1';
    };

    pre.onerror = function () {
        letterImg.src = highRes;
        letterImg.dataset.loaded = 'true';
        letterImg.classList.add('large');
        letterImg.style.opacity = '1';
    };

    pre.src = highRes;
});es;
});
