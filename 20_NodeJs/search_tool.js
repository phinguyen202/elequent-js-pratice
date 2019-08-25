const fs = require("fs");

let command = process.argv[2];
let regex = RegExp(process.argv[3]);

const baseDirectory = process.cwd();

if (command == 'gref') {
    doSearch(baseDirectory);
}

function doSearch(path) {
    fs.readdir(path, (err, files) => {
        files.forEach(file => {
            const pathChild = path + '\\' + file;
            if (fs.lstatSync(pathChild).isFile()) {
                if (regex.test(file)) console.log(pathChild);
            } else {
                doSearch(pathChild);
            }
        });
    });
}
