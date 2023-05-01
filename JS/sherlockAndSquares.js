function squares(a, b) {
    let counter = 0; 

    for(let i = a; i <= b; i++){
        if(Number.isInteger(Math.sqrt(i))){
            counter++;
        }
    }
    return counter;
    
}
console.log(squares(358658006,842644090)); 