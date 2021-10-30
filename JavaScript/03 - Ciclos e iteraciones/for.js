

userIng = "Pepe";
passIng = "pepa2";


for (let i = 0; i < 4; i++) {

    let user = prompt("Ingrese el usuario");
    let password = prompt("Ingrese la contraseña");

    if(user == userIng && password == passIng){

        alert(`Bienvenido ${userIng}.`);
        break;

    }else{

        alert(`Usuario y/o contrasena incorrectos`);

        break;
    }
    
}