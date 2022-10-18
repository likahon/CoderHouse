Sugar Syntax: Abreviacion que nos permite dar una instrucción en un lenguaje determinado. Ejemplo i = i + 1 ---> i++.
Polyfills: Es un pedazo de codigo que escribimos nosotros para que el codigo sea compatible en todos los navegadores.

Ejemplo de Polyfills:

let data = [1, 2, 3];
let result = data.find(elem => elem > 1);

console.log(result);

array.prototype.customFind = function(cb){
    let result;
    for (let i=0; i<this.length; i++) {
        if(cb(this[i])) {
            result = this[i];
            break;
        }
    }
    return result;
}

let customResult = data.customFind(elem = elem > 1);

console.log(result);
console.log(customResult);


Webpack: sirve para empaquetar los módulos (modularización).

npm run build: hace lo mismo que npm start, pero en vez de hacerlo en el navegador, lo hace en local para luego llevarlo a un servidor de hosting (nos sirve para hace una build de react a JS, html, etc).

Transpiling: 