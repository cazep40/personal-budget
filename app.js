alert("App de controlar tu presupuesto personal");
let nombre = prompt("Cual es su nombre?", "Nombre de usuario");
alert("Bienvenido, " + nombre + "!");


const billetera = [];


let opcion = prompt(`Cual es la operacion que vas a realizar?
        1- Ingresar dinero
        2- Retirar dinero
        3- Sumar todos los ingresos
        0- Salir
        `)

while (opcion != "0") {

    if (opcion == "1") {
        operacionBilletera("Ingreso");
    }

    if (opcion == "2") {
        operacionBilletera("Retiro");

    }

    if (opcion == "3") {

        const billeteraIngresos = billetera.filter(elmt => elmt.tipo == "Ingreso")

        const sumaIngresos = (billeteraIngresos.reduce ((acc,elmt) => acc + elmt.monto,0));
        alert(`Suma de ingresos = ${sumaIngresos}`);
        break;
    }

    opcion = prompt(`Cual es la operacion que vas a realizar?
        1- Ingresar dinero
        2- Retirar dinero
        3- Sumar todos los ingresos
        0- Salir
        `)
}

alert("Gracias por usar la billetera digital");


function operacionBilletera(tipoOperacion) {
    let descripcion = prompt("Cual es la descripcion de la operacion?").trim();
    if (descripcion.length == 0) {
        alert("Descripción invalida")
        return;
    }

    let monto = Number(prompt("Cual es el monto de la operacion"));
    if (monto <= 0) {
        alert("Monto inválido");
        return;
    }

    const operacion = {
        descripcion: descripcion,
        monto: monto,
        tipo: tipoOperacion
    }
    billetera.push(operacion);
    alert("Operacion realizada correctamente");
    console.log(billetera)
}

