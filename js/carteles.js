alert ("Hola, bienvenido a cafedel");
console.log ("Hola, bienvenido a cafedel");

function obtenerDatos() {
    let nombre = prompt("introduzca su nombre:");
    let edad = prompt("introduzca su edad:"); 
    alert (`tu nombre es ${nombre} y tu edad es ${edad}`);
}

function mayorDeEdad() {
    let edad = prompt("introduzca su edad"); 
    if  (edad >= 18) {
        alert ("Bienvenido puedes ingresar a nuestro sitio!");
    } else  {
      alert ("Disculpa eres menor de edad no puedes ingresar a nuestro sitio!")         
    };
};

mayorDeEdad();    

sumar();
sumarConParametros(4, 6);
obtenerDatos(); 




