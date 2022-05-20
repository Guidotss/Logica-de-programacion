const s = 7;  //pto inicial de la casa. 
const t = 10; // pto final de la casa.
const a = 4;  //ubicacion del arbol de manzanas.
const b = 12; //ubicacion del arbol de naranjas.
const m = 3; //cantidad de manzanas.
const n = 3; //cantidad de naranjas. 
const apples = [2,3,-4]; //unidades de distancia de cada manzana.
const oranges = [3,-2,-4]; //unidades de distancia de cada naranja.

/*
    para poder determinar los puntos en los que caera cada fruta hay que sumar el punto donde se encuentra el arbol (a,b) con cada uno de los elementos de los vectores
    que contienen las unidades de distancia de cada fruta: 
                                                            *manzanas = [4+2,4+3,4+(-4)] = [6,7,0]
                                                            *naranjas = [12+3,12+(-2),12+(-4)] = [15,10,8];
    
    como la casa se encuentra en el rango de 7-10, entonces 1 manzana caera en la casa y 2 naranjas caeran en la casa. 
*/

//Solucion general: 

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    const  ptosManzanas = []; 
    const  ptosNaranjas = []; 
    let Cmanzanas = 0; 
    let Cnaranjas = 0; 
    
    
    for(let i =0; i < m; i++){
        ptosManzanas.push(apples[i]+a); 
    }

    for(let j = 0; j < n; j++){
        ptosNaranjas.push(oranges[j] + b); 
    }

    for(let i = 0; i < m; i++){
        if(ptosManzanas[i]<=t && ptosManzanas[i]>=s){
            Cmanzanas++; 
        }
    }
    for(let j = 0; j < n; j++){
        if(ptosNaranjas[j]<=t && ptosNaranjas[j]>=s){
            Cnaranjas++
        }
    }
    console.log(Cmanzanas);
    console.log(Cnaranjas);    
}


console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
