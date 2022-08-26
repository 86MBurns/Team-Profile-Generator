const fs = require('fs');

function writePage(Html) {
    fs.writeFile('./index.html', html, err =>{
        if(err){
            throw err;
        }
        copyCss()
    })
}