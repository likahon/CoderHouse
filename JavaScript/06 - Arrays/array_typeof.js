
const array = [12, " qwere ", 8989, true];

for (const elemento of array) {
    
    if (typeof elemento == "string") {
        console.log(elemento, "->", elemento.trim());
    }

}