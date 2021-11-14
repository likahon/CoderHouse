let interesesPorCuotas = {
    una: 0.10,
    tres: 0.30,
    seis: 0.60,
    doce: 2
}

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



let montoPrestamo = parseInt(prompt("ingrese el monto que desea recibir"));
let cantCuotas = parseInt(prompt("ingrese la cantidad de cantCuotas: 1 - 3 - 6 - 12"));

let precioTotal = montoPrestamo + calcularInteres(montoPrestamo, cantCuotas);
let precioCuotas = parseInt(precioTotal / cantCuotas);

alert(`Debera abonar $${precioTotal} o $${precioCuotas} en ${cantCuotas}`);


/* let nombreApellido = prompt("Ingrese su nombre y apellido");
let dniCliente = parseInt(prompt("Ingrese su número de dni"));
let edadCliente = parseInt(prompt("Ingrese su edad"));
let paisCliente = prompt("Seleccione su país de residencia");
let provinciaCliente = prompt("Seleccione su provincia de residencia");
let localidadCliente = prompt("Seleccione su localidad de residencia");
let direccionCliente = prompt("Seleccione la dirección de su domicilio");
let codigoPostalCliente = parseInt(prompt("Ingrese su código postal"));
let telefonoCliente = parseInt(prompt("Ingrese su número de teléfono"));

let datosCliente = new registrarCliente(nombreApellido, edadCliente, paisCliente, provinciaCliente, localidadCliente, direccionCliente, codigoPostalCliente, telefonoCliente, precioTotal, cantCuotas, precioCuotas); */