//Objeto que define los intereses según las cuotas seleccionadas
let interesesPorCuotas = {
    una: 0.10,
    tres: 0.30,
    seis: 0.60,
    doce: 2
}

//Array que almacena los datos de los clientes que aceptan la oferta realizada.
let arrayClientes = [];

//Clase que recolecta la info de los datos del cliente previamente a ser enviadas al array de clientes.
class registrarCliente {

    constructor(nombreApellido, dni, edad, pais, provincia, localidad, direccion, codigoPostal, telefono, montoPrestamo, cantCuotas, precioCuotas) {

        this.nombreApellido = nombreApellido;
        this.dni = dni;
        this.edad = edad;
        this.pais = pais;
        this.provincia = provincia;
        this.localidad = localidad;
        this.direccion = direccion;
        this.codigoPostal = codigoPostal;
        this.telefono = telefono;
        this.montoPrestamo = montoPrestamo;
        this.cantCuotas = cantCuotas;
        this.precioCuotas = precioCuotas;

    }

    agradecerCliente() {

        alert(`${this.nombre}, su crédito está aprobado, gracias por confiar en nosotros`);

    }

}

//Función que calcula el precio con intereses mediante switch
function calcularInteres(montoPrestamo, cantCuotas) {
    
    let interes = 0;

    switch (cantCuotas) {
        case 3:
            interes = montoPrestamo * interesesPorCuotas.tres;
            return interes;

        case 6:
            interes = montoPrestamo * interesesPorCuotas.seis;
            return interes;

        case 12:
            interes = montoPrestamo * interesesPorCuotas.doce;
            return interes;

        default:
            alert("Ingrese un montoPrestamo correcto");
            break;
    }
    console.log(typeof(cantCuotas));
}



function aceptaPrestamo() {

    let montoPrestamo = parseInt(document.getElementById("montoIngresado").value);
    let cantCuotas = parseInt(document.getElementById("cant_de_cuotas").value);

    let precioTotal = montoPrestamo + calcularInteres(montoPrestamo, cantCuotas);
    let precioCuotas = parseInt(precioTotal / cantCuotas);

    let planillaRegistro = document.getElementById("formClientes");
    planillaRegistro.innerHTML = `
            <div class="row g-3" id="formContacto">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre y Apellido" aria-label="Nombre y Apellido" id="NombreYApellido">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="DNI" aria-label="DNI" id="dniCliente">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Edad" aria-label="Edad" id="edadDelCliente">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Pais" aria-label="Pais" id="paisDelCliente">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Provincia" aria-label="Provincia" id="provinciaDelCliente">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Localidad" aria-label="Localidad" id="localidadDelCliente">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Dirección" aria-label="Direccion" id="direccionDelCliente">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="C.P" aria-label="Last name" id="cpDelCliente">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Teléfono" aria-label="Telefono" id="telefonoDelCliente">
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button" id="boton1" onclick="formCliente(); creditoAprobado()">Enviar formulario</button>
                    </div>
                    

                <div>
                    <h3>Valor Total: ${precioTotal}</h3>
                    <h3>Valor mensual a abonar: ${precioCuotas}</h3>
                </div>
        
        `
    return { montoPrestamo, cantCuotas, precioCuotas };
}

function creditoAprobado() {

    $("#formContacto").hide();
    $(".contForms").append(`<span class="saludoMensaje">Gracias por confiar en nosotros, proximamente nos estaremos comunicando con ustéd para informarle sobre el estado del crédito.</span>`);

}

function formCliente() {

    let nombreApellido = document.getElementById("NombreYApellido").value;
    sessionStorage.setItem("NombreYApellido", nombreApellido);

    let dniCliente = document.getElementById("dniCliente").value;
    sessionStorage.setItem("dniDelCliente", dniCliente);

    let edadCliente = parseInt(document.getElementById("edadDelCliente").value);
    sessionStorage.setItem("edadDelCliente", edadCliente);

    let paisCliente = document.getElementById("paisDelCliente").value;
    sessionStorage.setItem("paisDelCliente", paisCliente);

    let provinciaCliente = document.getElementById("provinciaDelCliente").value;
    sessionStorage.setItem("provinciaDelCliente", provinciaCliente);

    let localidadCliente = document.getElementById("localidadDelCliente").value;
    sessionStorage.setItem("localidadDelCliente", localidadCliente);

    let direccionCliente = document.getElementById("direccionDelCliente").value;
    sessionStorage.setItem("direccionDelCliente", direccionCliente);

    let codigoPostalCliente = parseInt(document.getElementById("cpDelCliente").value);
    sessionStorage.setItem("cpDelCliente", codigoPostalCliente);

    let telefonoCliente = parseInt(document.getElementById("telefonoDelCliente").value);
    sessionStorage.setItem("telefonoDelCliente", telefonoCliente);

    const { montoPrestamo, cantCuotas, precioCuotas } = aceptaPrestamo();

    // Guarda los datos almacenados en la clase registrarCliente
    arrayClientes.push(new registrarCliente(nombreApellido, dniCliente, edadCliente, paisCliente, provinciaCliente, localidadCliente, direccionCliente, codigoPostalCliente, telefonoCliente, montoPrestamo, cantCuotas, precioCuotas));

    console.log("Usuario registrado");

}

function simularPrestamo() {

    let montoPrestamo = parseInt(document.getElementById("montoIngresado").value);
    let cantCuotas = parseInt(document.getElementById("cant_de_cuotas").value);

    let precioTotal = montoPrestamo + calcularInteres(montoPrestamo, cantCuotas);
    let precioCuotas = parseInt(precioTotal / cantCuotas);

    let planillaRegistro = document.getElementById("formClientes");
    planillaRegistro.innerHTML = `
            <div class="row g-3">
                    
                <div>
                    <h3>Valor Total: ${precioTotal}</h3>
                    <h3>Valor mensual a abonar: ${precioCuotas}</h3>
                </div>
        
        `

    console.log(cantCuotas)
}

let simularUnPrestamo = document.getElementById("simularPrestamo");
simularUnPrestamo.addEventListener("click", simularPrestamo);


console.log(arrayClientes);