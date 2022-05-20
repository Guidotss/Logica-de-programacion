let vector = [1,2,6,3,8,5,2,4]; 
let mayor = 0; 
let segMayor = 0;

vector.sort((a, b) => a - b);

for(let i = 0; i < vector.length; i++){
    if(vector[i] >mayor){
        mayor = vector[i];
    }
}
for(let i = 0; i < vector.length; i++){
    if(vector[i] < mayor){
        segMayor = vector[i];
    }
}
console.log(segMayor);