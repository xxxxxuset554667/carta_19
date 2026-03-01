document.addEventListener("DOMContentLoaded", function() {

    const envelope = document.getElementById("envelope");

    function toggleEnvelope() {
        envelope.classList.toggle("open");
    }

    // Evento click (desktop)
    envelope.addEventListener("click", function(e) {
        e.stopPropagation();
        toggleEnvelope();
    });

    // Evento touch (iPhone)
    envelope.addEventListener("touchstart", function(e) {
        e.preventDefault(); 
        toggleEnvelope();
    }, { passive: false });

});
