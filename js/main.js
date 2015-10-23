var requiredFiles = [
    {
        extension : '.csv',
        instruction : 'In your CAD software, export a Centroid file in CSV format.' +
        ' It must include columns for Reference Designator, X Position, Y Position, Rotation, Part Name and Value. ' +
        'Drag the file to the drop target when it\'s ready.' +
        '<br/><br/>Tip: If you already have all your files ready you can drag them all at once instead of one at a time.',
        ready : false
    },
    {
        extension : '.gtp',
        instruction : 'Now you need the top layer solder paste Gerber. Export the .gtp file from your CAD and drop it on the target when you are ready.',
        ready : false
    },
    {
        extension : '.gbp',
        instruction : 'Next is the bottom layer solder paste Gerber. Export the .gbp file from your CAD and drag it to the target.',
        ready : false
    }
];

Dropzone.options.dropzone = {
    acceptedFiles : '.csv,.gtp,.gbp',
    init: function() {
        this.on('success', onDropzoneSuccess);
    }
};

function onDropzoneSuccess(file) {
    var extension = file.name.substring(file.name.lastIndexOf('.'));
    var file = getFileInfoByExtension(extension);
    file.ready = true;
    $('#check_' + extension.substring(1)).addClass('glyphicon glyphicon-ok');
    showInstructions();
}

function getFileInfoByExtension(extension) {
    for (var i = 0; i < requiredFiles.length; i++) {
        var file = requiredFiles[i];
        if (file.extension === extension) {
            return file;
        }
    }
}

function showInstructions() {
    // find the first file that isn't ready and show the instructions for it
    for (var i = 0; i < requiredFiles.length; i++) {
        var file = requiredFiles[i];
        if (file.ready) {
            continue;
        }
        $('#instructions').html(file.instruction);
        $('#stepCount').html('File ' + (i + 1) + ' of ' + requiredFiles.length);
        return;
    }
    window.location.href = "choose-package.html";
}


