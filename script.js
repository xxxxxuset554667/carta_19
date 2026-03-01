document.addEventListener("DOMContentLoaded", function() {

    const envelope = document.getElementById("envelope");

    function toggleEnvelope() {
        envelope.classList.toggle("open");
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
