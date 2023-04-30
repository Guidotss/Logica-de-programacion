function designerPdfViewer(h,word){
    const abc = "abcdefghijklmnopqrstuvwxyz"; 
    const abcArray = abc.split("")
    const abcObject = []; 
    let highestIndex = 0; 
    
    for(let i = 0; i < abcArray.length; i++){
        abcObject[i] =  {
            letter: abcArray[i],
            value:h[i]
        }
    }

    for(let i = 0; i < word.length; i++){
  
        const letterValues = abcObject.find(element =>                                                          element.letter ==                                                   word.split("")[i]);
  
        if(letterValues.value > highestIndex){
            highestIndex = letterValues.value; 
        }
    }
    
    return highestIndex * word.length; 
}
