// Require the given module 
var fs = require('fs');

var privateFilePath = lbl('readMe.txt');
var publicFilePath = 'writeMe.txt';

// Store the private file's contents in a private variable
var readMe = lbl(fs.readFileSync(privateFilePath, 'utf-8'));

lprint(publicFilePath);
// Upgrades label of publicFilePath after writing from private file
fs.writeFileSync(publicFilePath, readMe);
lprint(publicFilePath);

var publicFilePath2 = 'writeMe2.txt';

// Throws exception when trying to upgrade in secret control
// will only allow it if the labels of readMe and publicFilePath2 are
// on the same level
if (readMe == 'test') {
    fs.writeFileSync(publicFilePath2, 'test');
}