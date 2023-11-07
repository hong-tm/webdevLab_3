function zoomIn() {
    var img = document.getElementById('zoom-img');
    img.style.transform = 'scale(1.2)';
    img.style.transition = 'transform 0.3s ease';
}

function zoomOut() {
    var img = document.getElementById('zoom-img');
    img.style.transform = 'scale(1)';
    img.style.transition = 'transform 0.3s ease';
}

window.addEventListener("load", function () {
    var loaderWrapper = document.querySelector(".loader-wrapper");
    loaderWrapper.style.display = "none";
});
