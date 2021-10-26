let nombre = prompt("Ingrese su nombre");
let anioNac = parseInt(prompt("Ingrese su año de nacimiento"));
const anioActual = 2021;
let edadAct = anioActual - anioNac;

if(anioNac < anioActual){
    alert(`Bienvenido ${nombre}, tenes ${edadAct} años.`);
}