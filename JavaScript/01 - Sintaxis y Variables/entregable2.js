
        var nota1 = parseInt(prompt("Ingrese la primera nota"));
        var nota2 = parseInt(prompt("Ingrese la segunda nota"));
        var nota3 = parseInt(prompt("Ingrese la tercera nota"));
        var resultadoFinal = (nota1 + nota2 + nota3) / 3;

        if(resultadoFinal <= 2){
            alert("Debe recursar");
        }else if(resultadoFinal > 2 && resultadoFinal < 7){
            alert("Debe volver a rendir");
        }else if(resultadoFinal >= 7 && resultadoFinal <= 10){
            alert("Cursada aprobada");
        }else{
            alert("Ingrese una nota válida");
        }