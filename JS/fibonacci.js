let a = 0; 
let b = 1;
let fibo = []
let suma = 0;


for(let i = 0; i < 40; i++){
    let c = a + b
    a = b; 
    b = c;
    fibo.push(c)
    if(c < 4000000 && c % 2 == 0){
        suma += c
    }
    
}
console.log(suma);