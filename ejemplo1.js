try {
    let suma = 16+12
    console.log(suma)
} catch (error) {
    console.log(`codigo de error: ${error}`)
}
try {
    let suma = 16+12
    console.log(suma+q)
} catch (error) {
    console.log(`codigo de error: ${error}`)
}


/*Manejo de errores.
El manejo de errores con Javascript se realiza por medio de la declaración try…catch, el try es utilizado para definir un bloque de instrucciones que deben ser ejecutadas y en caso de que se presente algún error, se ejecutan las instrucciones definidas en el bloque catch.
*/

//Ejemplo sin error

console.log("-----------------Ejemplo sin error----------------------")

try {
    //Si no hay ningun error se ejecuta el bloque try
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${suma}`);
} catch (err) {
    //Si encuentra un error ejecuta el siguiente codigo
    console.log('Hay un error!');
}

//Ejemplo con error

console.log("-----------------Ejemplo con error----------------------")

try {
    console.log('Inicio');
    let suma=15+99;
    console.log(`El resultado es ${resultado}`);
    //Variable resultado no definida
} catch (err) {
    console.log('Hay un error!');
}

/*Finally: Es el bloque de código que siempre se ejecuta al finalizar el try..catch*/

console.log("-----------------Bloque finally----------------------")

try {
    console.log("En el try se agrega el codigo a evaluar")
    noExiste; //genera un error porque noExiste no esta definida
    console.log("Segundo mensaje en el try")
} catch (error) {
    console.log("Catch captura cualquier error que surga en el try")
    console.log(error) //imprime el error
} finally {
    console.log("Finally se ejecuta siempre al final de un bloque try-catch")
}

//Personalizacion de mensajes de error

console.log("-----------------Personalización mensajes de error----------------------")

try {
    let numero='y'
    if(isNaN(numero)){ //El metodo isNaN() evalua si la variable es de tipo numererico o no
        //Definición del nuevo mensaje de error  throw new Error()
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero*numero)
} catch (error) {
    console.log(`Se produjo el siguiente ${error}`)
}



try {
    let numerousuario = 1;
    if(isNaN(numerousuario) || numerousuario <1 || numerousuario >9){
        throw new Error(`numero no valido`)
    }else{
        console.log("sin problemas")
    }
} catch (e) {
    console.log(`se produjo un error: referencia ${e}`)
    
}

//r haga un código reciba números con manejo de errores. Si el valor ingresado no es numérico debe enviar el mensaje:

try {
    let num = "a"    //isnan retorna true si el valor no es numerico
    if(isNaN(num)){
        throw new Error("el caracter no es un numero")
    }
} catch (error) {
    console.log(`error de tipo ${error}`)    
}