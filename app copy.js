alert("App de controlar tu presupuesto personal");
let nombre = prompt("Cual es su nombre?", "Nombre de usuario");
alert("Bienvenido, " + nombre + "!");


const billetera = [];


let opcion = prompt(`Cual es la operacion que vas a realizar?
        1- Ingresar dinero
        2- Retirar dinero
        0- Salir
        `)

while (opcion != "0") {

    if (opcion == "1") {
        //Todo el codigo a ejecutar si la opcion es 1 => Ingreso
        let descripcionIngreso = prompt("Cuál es la descripción del ingreso?").trim();

        //Validacion de la descripcion 
        if (descripcionIngreso.length == 0) {
            alert("Descripción inválida");
            continue;
        }

        let montoIngreso = Number(prompt("Cuál es el monto a ingresar?"));

        //validaciones de monto

        if (montoIngreso >= 0) {
            alert("Monto inválido");
            //vamos a reinicar el ciclo
            continue;
        }

        //Objeto literal

        const ingreso = {
            descripcion: descripcionIngreso,
            monto: montoIngreso,
            tipo: "Ingreso"
        }

        //push propiedad para ingresar un nuevo elemento al array
        //se inserta al final del array

        billetera.push(ingreso);
        alert("Ingreso realizado correctamente");
        console.log(billetera)
    }

    if (opcion == "2") {
        let descripcionRetiro = prompt("Cuál es la descripción del retiro?").trim();


        //Validacion de la descripcion 
        if (descripcionRetiro.length == 0) {
            alert("Descripción inválida");
            continue;
        }

        let montoRetiro = Number(prompt("Cuál es el monto a retirar?"));

        if (montoRetiro >= 0) {
            alert("Monto inválido");
            //vamos a reinicar el ciclo
            continue;
        }

        //Objeto literal

        const retiro = {
            descripcion: descripcionRetiro,
            monto: montoRetiro,
            tipo: "Retiro"
        }

        billetera.push(retiro);
        alert("Retiro ingresado correctamente");
        console.log(billetera)
    }

    opcion = prompt(`Cual es la operacion que vas a realizar?
        1- Ingresar dinero
        2- Retirar dinero
        0- Salir
        `)
}

alert("Gracias por usar la billetera digital");

