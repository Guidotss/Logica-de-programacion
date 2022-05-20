let multiplos = [];
let suma  = 0

for(let i = 0; i < 1000; i ++){
    if(i % 3 == 0|| i % 5 == 0){
        multiplos.push(i);
        suma += i;
    }
}

console.log(suma);
