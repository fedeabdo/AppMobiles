const fs = require('fs');

const readFilePromise = (filename) => {
    return new Promise( (resolve, reject) =>{
        fs.readFile(filename, (err, data) =>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
};
//user promises
let promise = readFilePromise('C:/Users/Usuario/OneDrive - Universidad de Montevideo/Imágenes/2018-11/BJCV4918 (1).jpg');
promise.then((data)=>{
    console.log('done: ' + data.length);
})
.catch((err) =>{
    console.log(err);
})