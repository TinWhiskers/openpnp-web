var filesUploaded = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("file");
    filesUploaded++;
    $('#check_' + filesUploaded).addClass('glyphicon glyphicon-ok');
    if (filesUploaded == 1) {
        $('#instructions').html('Now you need to export your solder paste Gerber files. First you\'ll need a .gtp file for the top layer. Drag and drop the file when ready.');
        $('#stepCount').html('File 2 of 3');
    } else if (filesUploaded == 2) {
        $('#instructions').html('Next you\'ll need a .gbp file for the top layer. Drag and drop the file when ready.');
        $('#stepCount').html('File 3 of 3');
    } else if (filesUploaded == 3) {
        window.location.href = "choose-package.html";
    }
}
