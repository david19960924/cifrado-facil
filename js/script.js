function readMessage() {
    /**Obtener datos
     *              -->cifrado
     * Mostrar datos
     */
    let secretKey = $("#idpassword").val();
    let message = $("#idmenssage").val();
    let option = $("#algoritmo").val();
    let resultado;

    switch (option) {

        case "AES":

            resultado = CryptoJS.AES.encrypt(message, secretKey);
            break;
        case "DES":

            resultado = CryptoJS.DES.encrypt(message, secretKey);
            break;
        case "TripleDES":

            resultado = CryptoJS.TripleDES.encrypt(message, secretKey);
            break;
        case "Rabbit":

            resultado = CryptoJS.Rabbit.encrypt(message, secretKey);
            break;
        case "RC4":

            resultado = CryptoJS.RC4.encrypt(message, secretKey);
            break;
    }


    $("#idmenssage").val(resultado.toString());
}

function decryptMessage() {
    /**Obtener datos
     *              -->descifrado
     * Mostrar datos
     */
    let option = $("#algoritmo").val();
    let secretKey = $("#idpassword").val();
    let message = $("#idmenssage").val();
    let resultado;

    switch (option) {
        case "AES":
            resultado = CryptoJS.AES.decrypt(message, secretKey);
            break;
        case "DES":
            resultado = CryptoJS.DES.decrypt(message, secretKey);
            break;
        case "TripleDES":
            resultado = CryptoJS.TripleDES.decrypt(message, secretKey);
            break;
        case "Rabbit":
            resultado = CryptoJS.Rabbit.decrypt(message, secretKey);
            break;
        case "RC4":
            resultado = CryptoJS.RC4.decrypt(message, secretKey);
            break;
    }

    originalText = resultado.toString(CryptoJS.enc.Utf8);
    $("#idmenssage").val(originalText);
}



function copiar() {
    const textarea = document.getElementById('idmenssage');

    textarea.select();
  
    // Intenta copiar el texto al portapapeles
    document.execCommand('copy');

    textarea.blur();

    $("#copiar").text('\u2714 Copiado!');

    setTimeout(function () { $("#copiar").text('Copiar'); }, 3000);
}
