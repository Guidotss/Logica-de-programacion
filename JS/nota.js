let grados = [73,67,38,33]; 
let aux = 0; 

function gradingStudents(grados) {
    for(let i = 0; i < grados.length; i++){
        if(grados[i] >= 38){
            
            let bandera = true;
            for(let j = grados[i]; bandera!=false;){
                if(j % 5 == 0){
                    aux = j;  
                    bandera = false;
                    if(aux - grados[i] < 3){
                    grados.splice(i,1,aux); 
                    }
                }else{
                    j++; 
                }; 
            }
        }
    }  
    
    return grados;
}

console.log(gradingStudents(grados));