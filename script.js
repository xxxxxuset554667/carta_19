document.addEventListener("DOMContentLoaded", function() {

    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    function toggleEnvelope() {
        envelope.classList.toggle("open");
        letter.classList.toggle("show");

        // Bloquear scroll cuando la carta esté abierta
        if (letter.classList.contains("show")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }

    envelope.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleEnvelope();
    });

    envelope.addEventListener("touchstart", function(e) {
        e.preventDefault();
        toggleEnvelope();
    }, { passive: false });

});
