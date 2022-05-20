for(let i = 0; i < 6; i++){
    let string = ""; 
    for(let j = 0; j < 6 - i -1; j++){
        string+=" "; 
    }
    for(let k = 0; k < i+1; k++){
        string += "#"; 
    }
    console.log(string);
}