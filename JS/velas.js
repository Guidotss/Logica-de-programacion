

function velasTorta(vela){
    let Cvelas = 0;
    let Alta = 0; 
    
    for(let i = 0; i< vela.length; i++){
        if(vela[i] > Alta){
            Alta = vela[i]; 
        }
    }
    for(let i = 0; i < vela.length; i++){
        if(Alta == vela[i]){
            Cvelas++; 
        }
    }

    return Cvelas; 

}


console.log(velasTorta(vela));