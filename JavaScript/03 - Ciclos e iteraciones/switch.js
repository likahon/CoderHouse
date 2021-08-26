/* 
1 - Rojo
2 - Azul
3 - Amarillo
4 - Rosado
5 - Negro
*/


/* let dato = parseInt(prompt("Ingrese código"));
while(dato != 0){
    if(dato == 1){
        console.log("Rojo");
    }else if(dato == 2){
        console.log("Azul");
    }else if(dato == 3){
        console.log("Amarillo");
    }else if(dato == 4){
        console.log("Rosado");
    }else if(dato == 5){
        console.log("Negro");
    }else{
        console.log("No se reconoce el código");
    } 
}*/


let dato = parseInt(prompt("Ingrese código"));


while(dato != 0){
    switch(dato){
        case 1:
            console.log("Rojo");
            break;
        case 2:
            console.log("Azul");
            break;
        case 3:
            console.log("Amarillo");
            break;
        case 4:
            console.log("Rosado");
            break;
        case 5:
            console.log("Negro");
            break;
        default:
            console.log("No se reconoce el código");
            break;
    }
}