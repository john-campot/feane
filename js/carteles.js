alert ("Hola, bienvenido a cafedel");
console.log ("Hola, bienvenido a cafedel");

function obtenerDatos() {
    let nombre = prompt("introduzca su nombre:");
    let apellido = prompt("introduzca su apellido:"); 
    alert (`tu nombre es ${nombre} y tu apellido es ${apellido}`);
}

obtenerDatos()


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

let tiposDeCafe = ["cafeExpreso", "cafeRistretto", "cafeCapucchino", "cafeConPanna",
]

tiposDeCafe[4] = "cafeAfogatto";
tiposDeCafe[5] = "cafeMachiatto";

document.write (tiposDeCafe[0]);

