console.log (document)
obtenerDatos()

alert ("Hola, bienvenido a cafedel");
console.log ("Hola, bienvenido a cafedel");

function obtenerDatos() {
    let nombre = prompt("introduzca su nombre:");
    let apellido = prompt("introduzca su apellido:"); 
    alert (`tu nombre es ${nombre} y tu apellido es ${apellido}`);
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



 

let tiposDeCafe = ["cafeExpreso", "cafeRistretto", "cafeCapucchino", "cafeConPanna",
]

tiposDeCafe[4] = "cafeAfogatto";
tiposDeCafe[5] = "cafeMachiatto";

document.write (tiposDeCafe[0]);

function seleccionCafe(){
    let cafe = prompt("Seleccione el cafe que desea")
    if  (cafe == 1) {
        alert("Cafe Expreso!");
    }
    else if (cafe == 2) {
         alert("Cafe Ristretto!");
   
    }
    if (cafe == 3) {
        alert("Cafe Capucchino!");    
    }
        seleccionCafe(1, 2, 3);  }


let boton = document.getElementById("Comprar");
boton.addEventListener("click", agregar);;
function agregar(){
    console.log("agregar");
}


