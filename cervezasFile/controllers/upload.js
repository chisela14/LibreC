const {request, response} = require('express')

const uploadFile = (req = request, res = response) => {

    if (!req.files) {
        res.send({
            status: false,
            message: 'No file uploaded'
        });
    }else{
        // Recoger el archivo con el nombre del input (se le dará el nombre de "ejemplo")
        let file = req.files.ejemplo;
        
        // Mover el archivo al directorio indicado
        file.mv('./files/' + ejemplo.name);

        //Enviar respuesta
        res.send({
            status: true,
            message: 'File is uploaded',
            data: {
                name: ejemplo.name,
                size: ejemplo.size
            }
        });
    }

    
}

module.exports = {uploadFile}