var privateFilePath = lbl('readMe.txt');
var publicFilePath = 'writeMe.txt';

var readMe = lbl('writeMe.txt');

lprint(publicFilePath);
// Upgrades label of publicFilePath after writing from private file
publicFilePath = readMe;
lprint(publicFilePath);

var publicFilePath2 = 'writeMe2.txt';

// Throws exception when trying to upgrade in secret control
// will only allow it if the labels of readMe and publicFilePath2 are
// on the same level
if (readMe == 'writeMe.txt') {
    publicFilePath2 = 'test';
}