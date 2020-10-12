const fs = require('fs');


function renameFiles(dir, currentExt, newExt) {

    const exceptions = ['JS-to-JSX.js'];


    fs.readdir(dir, (err, files) => {
        
        err ? console.log(`There was an error: ${err}`)
        :
        files.forEach(file => {

            const [name, ext] = file.split('.');

            if (!exceptions.includes(file) && ext === currentExt) {

                const renamedFile = `${name}.${newExt}`;

                fs.rename(file, renamedFile, (err) => 
                    err ? console.log(`Couldn't rename ${file} because ${err}`) 
                    : 
                    console.log(`${file} -> ${renamedFile}`))
            }

        })
    })
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Directory: ', dir => 
    readline.question('Current file extension: .', currentExt => 
        readline.question('New file extension: .', newExt => {
            renameFiles(dir, currentExt, newExt)
            readline.close();
        })
    )
);

