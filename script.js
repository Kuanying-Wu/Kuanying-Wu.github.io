function openImage(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = src;
}

function closeImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
