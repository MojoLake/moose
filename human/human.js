window.onload = function () {
    const pieces = document.getElementsByTagName('svg');
    let orange = Array(pieces.length).fill(0);
    for (var i = 0; i < pieces.length; i++) {
        let piece = pieces[i];
        piece.onclick = function(t) {
            // if (t.target.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.getAttribute('data-position');
            // if (t.target.parentElement.getAttribute('data-position') != null) document.getElementById('data').innerHTML = t.target.parentElement.getAttribute('data-position');
            if (orange[i] == 1) {
                orange[i] = 0;
                piece.style.fill = "#f4f4f4";
            } else {
                orange[i] = 1;
                piece.style.fill = "#ff7d16";
            }
        }
    }
}


function handleClick() {
    window.location.href="./image_distortion/index2.html";
}