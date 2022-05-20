const crew_id = [5,9,4,3,8,2];
const job_id = [9,8,1,10,1,4]; 

function getMinCost(crew_id, job_id) {
    const aux = []; 
    let crew_id_sorted = crew_id.sort((a,b) =>(a-b)); 
    let job_id_sorted = job_id.sort((a,b)=>(a-b)); 
    let suma =0; 
    let dif =0; 


    //console.log(crew_id_sorted);
    /* console.log(job_id_sorted); */

    for(let i =0; i <=crew_id.length;i++){
        if(crew_id_sorted.includes(job_id_sorted[i])){
            
           let index =  crew_id_sorted.indexOf(job_id_sorted[i]);
           aux.push(crew_id_sorted[index]);  
           crew_id_sorted.splice(index,1); 
    
        }
    }

    for(let j = 0; j < aux.length; j++){
       
        if(job_id_sorted.includes(aux[j])){
            let index2 = job_id_sorted.indexOf(aux[j]); 
            job_id_sorted.splice(index2,1); 
        }
    }

    for(let i =0; i < crew_id.length; i++){
        dif = crew_id_sorted[i] - job_id_sorted[i]; 
        
        if(dif < 0){
            suma += -1*(dif); 
        }else{
            suma+=dif; 
        }
    }
    
    return suma; 
}                                         


console.log(getMinCost(crew_id,job_id));