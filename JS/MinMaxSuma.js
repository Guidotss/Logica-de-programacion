let arr = [1,2,3,4,5]; 
let aux = []; 

function minMaxSum(arr){
    let min =10000000000000000; 
    let max = 0
    
    

    for(let i = 0; i < arr.length; i++){
        let suma = 0;
        let numero = arr[i]; 
        arr.splice(i,1,0); 

        for(let j = 0; j < arr.length; j++){
            suma+=arr[j]; 
        }

        if(suma > max){
            max = suma; 
        }
        if(min > suma){
            min = suma;
        }


        arr.splice(i,1,numero); 
    }

    console.log(min,max);

}

minMaxSum(arr)