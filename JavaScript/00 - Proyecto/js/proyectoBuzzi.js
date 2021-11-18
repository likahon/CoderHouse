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


//Prompt que solicita datos para el prestamo solicitado
let montoPrestamo = parseInt(prompt("ingrese el monto que desea recibir"));
let cantCuotas = parseInt(prompt("ingrese la cantidad de cantCuotas: 1 - 3 - 6 - 12"));

//Variables que almacenan el precio total con intereses y que divide el mismo por la cant de cuotas seleccionadas
let precioTotal = montoPrestamo + calcularInteres(montoPrestamo, cantCuotas);
let precioCuotas = parseInt(precioTotal / cantCuotas);

//Alerta que informa el valor total, la cant de cuotas y el monto por cuota
alert(`Debera abonar $${precioTotal} o $${precioCuotas} en ${cantCuotas}`);

//Recoleccion de datos de los clientes que aceptan las ofertas
let nombreApellido = prompt("Ingrese su nombre y apellido");
let dniCliente = parseInt(prompt("Ingrese su número de dni"));
let edadCliente = parseInt(prompt("Ingrese su edad"));
let paisCliente = prompt("Seleccione su país de residencia");
let provinciaCliente = prompt("Seleccione su provincia de residencia");
let localidadCliente = prompt("Seleccione su localidad de residencia");
let direccionCliente = prompt("Seleccione la dirección de su domicilio");
let codigoPostalCliente = parseInt(prompt("Ingrese su código postal"));
let telefonoCliente = parseInt(prompt("Ingrese su número de teléfono"));

//Guarda los datos almacenados en la clase registrarCliente
arrayClientes.push(new registrarCliente(nombreApellido, dniCliente, edadCliente, paisCliente, provinciaCliente, localidadCliente, direccionCliente, codigoPostalCliente, telefonoCliente, montoPrestamo, cantCuotas, precioCuotas));

registrarCliente.agradecerCliente(); // NO PUEDO LLAMAR AL METODO DE LA CLASE.

console.log(arrayClientes);
