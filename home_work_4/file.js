const fs = require('fs-extra');

fs.mkdirsSync('Folder1');

fs.ensureFileSync('Folder1/file.txt');

fs.mkdirsSync('Folder2');

fs.moveSync('Folder1/file.txt','Folder2/file.txt');

fs.mkdirsSync('Folder3');

fs.copySync('Folder2/file.txt','Folder3/file.txt');

fs.removeSync('Folder2/file.txt');
fs.removeSync('Folder3/file.txt');

fs.removeSync('Folder1');
fs.removeSync('Folder2');
fs.removeSync('Folder3');

console.log('I finished!');