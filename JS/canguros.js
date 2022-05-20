const x1 = 0; //posicion inicial del primer canguro.
const v1 = 3; // unidades que avanza el primer canguro con cada salto.
const x2 = 4; // posicion inicial del segundo canguro.
const v2 = 2; // unidades que vanza el segundo canguro con cada salto. 

function kangaroo(x1, v1, x2, v2) {

    if(v1 > v2){
        let ratio = (x2 - x1)%(v2 - v1); 

        if(ratio == 0){
            return 'YES'; 
        }
    }
    return 'NO';
}

console.log(kangaroo(x1, v1, x2, v2));

   
