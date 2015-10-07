import {resolve} from 'path';
import glob from 'glob';

glob(resolve(process.cwd()+'/app/**/*_tape.js'), function (err, files) {
    if(err) throw new Error(err);
    files.forEach(function (file) {
        require(resolve(file));
    });
});
