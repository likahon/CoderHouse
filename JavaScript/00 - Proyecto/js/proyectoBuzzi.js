//Objeto que define los intereses según las cuotas seleccionadas
let interesesPorCuotas = {
    una: 0.10,
    tres: 0.30,
    seis: 0.60,
    doce: 2
}

/* let clientesAceptanPrestamo = [{"Roberto Ramirez", 18567543, 55, "Argentina", "Mendoza", "San Martin", "Calle Falsa 123", 1534, 65438765, 60000, 3, 20000}, {"Carlos Ramirez", 15567543, 55, "Argentina", "Catamarca", "San Carlos", "Calle Falsa 321", 6543, 12340987, 90000, 3, 30000}]; */

//Array que almacena los datos de los clientes que aceptan la oferta realizada.
let arrayClientes = [];

//Clase que recolecta la info de los datos del cliente previamente a ser enviadas al array de clientes.
class registrarCliente{

    constructor(nombreApellido, dni, edad, pais, provincia, localidad, direccion, codigoPostal, telefono, montoPrestamo, cantCuotas, precioCuotas){
    
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

    agradecerCliente(){

        alert(`${this.nombre}, su crédito está aprobado, gracias por confiar en nosotros`);

    }

}

//Función que calcula el precio con intereses mediante switch
function calcularInteres(montoPrestamo, cantCuotas){
    
    let interes;

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
}

function aceptaPrestamo() {

    let montoPrestamo = document.getElementById("montoIngresado").value;
    let cantCuotas = document.getElementById("cant_de_cuotas").value;

    let planillaRegistro = document.getElementById("formClientes");

        planillaRegistro.innerHTML = `
            <div class="row g-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre y Apellido" aria-label="Nombre y Apellido">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="DNI" aria-label="DNI">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Edad" aria-label="Edad">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Pais" aria-label="Pais">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Provincia" aria-label="Provincia">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Localidad" aria-label="Localidad">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Dirección" aria-label="Direccion">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="C.P" aria-label="Last name">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Teléfono" aria-label="Telefono">
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-primary" type="button"  onclick="formCliente()">Enviar formulario</button>
                    </div>
                </div>

                <div>
                    <h3>Valor Total: ${montoPrestamo}</h3>
                    <h3>Valor mensual a abonar: ${montoPrestamo / cantCuotas}</h3>
                </div>
        
        `
}

function formCliente() {

    console.log("Usuario registrado");
    
}




//Prompt que solicita datos para el prestamo solicitado

/* let montoPrestamo = parseInt(prompt("ingrese el monto que desea recibir")); */

/* let cantCuotas = parseInt(prompt("ingrese la cantidad de cantCuotas: 1 - 3 - 6 - 12")); */

//Variables que almacenan el precio total con intereses y que divide el mismo por la cant de cuotas seleccionadas
let precioTotal = montoPrestamo + calcularInteres(montoPrestamo, cantCuotas);
let precioCuotas = parseInt(precioTotal / cantCuotas);

//Alerta que informa el valor total, la cant de cuotas y el monto por cuota
/* alert(`Debera abonar $${precioTotal} o $${precioCuotas} en ${cantCuotas}`); */



//Recoleccion de datos de los clientes que aceptan las ofertas
/* let nombreApellido = prompt("Ingrese su nombre y apellido");
sessionStorage.setItem("NombreYApellido", nombreApellido);
let dniCliente = parseInt(prompt("Ingrese su número de dni"));
sessionStorage.setItem("dniDelCliente", dniCliente);
let edadCliente = parseInt(prompt("Ingrese su edad"));
sessionStorage.setItem("edadDelCliente", edadCliente);
let paisCliente = prompt("Seleccione su país de residencia");
sessionStorage.setItem("paisDelCliente", paisCliente);
let provinciaCliente = prompt("Seleccione su provincia de residencia");
sessionStorage.setItem("provinciaDelCliente", provinciaCliente);
let localidadCliente = prompt("Seleccione su localidad de residencia");
sessionStorage.setItem("localidadDelCliente", localidadCliente);
let direccionCliente = prompt("Seleccione la dirección de su domicilio");
sessionStorage.setItem("direccionDelCliente", direccionCliente);
let codigoPostalCliente = parseInt(prompt("Ingrese su código postal"));
sessionStorage.setItem("cpDelCliente", codigoPostalCliente);
let telefonoCliente = parseInt(prompt("Ingrese su número de teléfono"));
sessionStorage.setItem("telefonoDelCliente", telefonoCliente); */

//Guarda los datos almacenados en la clase registrarCliente
arrayClientes.push(new registrarCliente(nombreApellido, dniCliente, edadCliente, paisCliente, provinciaCliente, localidadCliente, direccionCliente, codigoPostalCliente, telefonoCliente, montoPrestamo, cantCuotas, precioCuotas));

arrayClientes[0].agradecerCliente();

console.log(arrayClientes);
