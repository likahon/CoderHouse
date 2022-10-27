// Callback Hell
const production = () =>{

    console.log('Order received. Starting Production...')

    setTimeout(() => {
        console.log('Calentar el agua en la pava')
        setTimeout(() => {
            console.log('Vertir la yerba en el mate')
            setTimeout(() => {
               console.log('Tapar el mate con la mano y sacar el polvo')
               setTimeout(() => {
                    console.log('Acomodar la yerba de forma inclinada')
                    setTimeout(() => {
                        console.log('Agregar un poco de agua a temperatura ambiente')
                        setTimeout(() => {
                            console.log('Introducir la bombilla tapando la punta')
                            setTimeout(() => {
                                console.log('Desechar el primer sorbo de mate')
                                setTimeout(() => {
                                    console.log('Agregar el agua caliente')
                                }, 2000);
                            }, 4000);
                        }, 1000);
                    }, 2000);
               }, 3000); 
            }, 2000);
        }, 5000);
    }, 8000);



}

production()