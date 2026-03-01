const envelope = document.getElementById("envelope");

function toggleEnvelope() {
    envelope.classList.toggle("open");
}

// Soporte click (desktop)
envelope.addEventListener("click", toggleEnvelope);

// Soporte touch (iPhone)
envelope.addEventListener("touchstart", function(e){
    e.preventDefault();
    toggleEnvelope();
});
