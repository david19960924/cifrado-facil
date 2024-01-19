// Importa la librería CryptoJS (asegúrate de haber incluido los scripts antes)
//const CryptoJS = require('crypto-js');

// Clave secreta para el cifrado y descifrado (deberías manejar esto de manera segura en un entorno real)
//let secretKey = 'miClaveSecreta';

// Función para cifrar un mensaje
function encrypt(message, secretKey) {
    const ciphertext = CryptoJS.AES.encrypt(message, secretKey);
    return ciphertext.toString();
}

// Función para descifrar un mensaje
function decrypt(ciphertext, secretKey) {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}


function readMessage(option) {
    let secretKey = $("#idpassword").val();
    let message = $("#idmenssage").val();
    let resultado;

    switch (option) {
        case 1:
            resultado = encrypt(message, secretKey);
            break;
        case 2:
            resultado = decrypt(message, secretKey);
            break;
    }
    
    $("#idmenssage").val(resultado);
   
}


