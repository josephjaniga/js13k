var fs              = require('fs'),
    Buffer          = require('buffer').Buffer,
    constants       = require('constants'),
    size            = 0,
    encoded         = '',
    fileName        = '',
    inputFileName   = '',
    base64FileName  = '',
    fileExtension   = '';

if(process.argv.length != 3){
    console.log("you didn't specify the name of the file to encode.");
    return;
} else {
    fileName = process.argv[2];
    inputFileName = fileName;
    base64FileName = fileName + '.txt';

    // remove the path
    fileExtension = inputFileName.split('.');
    fileExtension = fileExtension[fileExtension.length-1];
    console.log(fileExtension);
}

fs.lstat(inputFileName, function(err, stats) {
    size = stats.size;
});

fs.open(inputFileName, 'r', function(status, fd) {
    if (status) {
        console.log(status.message);
        return;
    }

    var buffer = new Buffer(size);
    fs.read(fd, buffer, 0, size, 0, function(err, num) {
        encoded = buffer.toString('base64', 0, num);
        encoded = '"' + 'data:audio/'+fileExtension+';base64,' + encoded + '";';
        fs.writeFile(base64FileName, encoded, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });
    });
});