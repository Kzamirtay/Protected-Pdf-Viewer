var pdfViewer = document.getElementById("mainContainer");

if (pdfViewer) {
    pdfViewer.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
} else {
    console.error("Элемент PDF Viewer не найден");
}

window.addEventListener(
    "keydown",
    function (event) {
        if (
            event.keyCode === 83 &&
            (event.ctrlKey || event.metaKey) &&
            !event.altKey &&
            (!event.shiftKey || window.chrome || window.opera)
        ) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    },
    true
);
