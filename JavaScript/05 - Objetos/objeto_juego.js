let image1 = 'https://static.wikia.nocookie.net/videojuego/images/9/91/Goomba.jpg/revision/latest/top-crop/width/360/height/450?cb=20110706014214';
let image1 = 'https://static.wikia.nocookie.net/mario/images/3/3f/GOOMBA_TOONOKI.png/revision/latest?cb=20111104213411&path-prefix=es';


function Goomba(nivel, altura){
    this.nivel = nivel;
    this.altura = altura;

    this.eliminar = 1;
    this.image = image1;
    this.cola = false;
    
    if(this.nivel > 3){
        this.image = '';
        this.cola = true;
        this.eliminar = 2;
    }


}

const goomba1 = new goomba(1, 2);
const goomba2 = new goomba(1, 2);
const goomba3 = new goomba(1, 3);
const goomba4 = new goomba(1, 3);
const goomba5 = new goomba(1, 3);
const goomba6 = new goomba(1, 4);
const goomba7 = new goomba(1, 4);
const goomba8 = new goomba(1, 4);