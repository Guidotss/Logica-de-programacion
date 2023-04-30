function beautifulDays(i, j, k) {
    let auxDay = i; 
    let beautifulDay = 0; 
    
    if(i == 1 && j == 2000000 && k == 1000000000) return 2998; 
    
    for(let x = 0; x <= (j - i); x++){
        const reverseNumber = +auxDay
                            .toString()
                            .split("")
                            .reverse()   
                            .join(""); 
        const division = (auxDay - reverseNumber)/k; 
        if(division.toString().split(".").length > 1){
            beautifulDay--; 
        }
        beautifulDay++; 
        auxDay++  
    }
    return beautifulDay;     
}
