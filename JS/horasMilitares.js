let hora = '12:45:54PM'; 

function HoraMilitar(hora){
    let horaArray = hora.split(':');

    if(hora.includes('AM')){
    
        if(horaArray[0] == 12){
            horaArray[0] = '00'; 
        }

       let nuevaHora = horaArray.join(':');
       let nuevaHoraStr = nuevaHora.slice(0,-2)

       console.log(nuevaHoraStr);

       return nuevaHoraStr; 

    }
    else if(hora.includes('PM')){
        if(horaArray[0]  < 12){
            let horaParse = parseInt(horaArray[0]); 
            let hora24 = horaParse + 12 
            horaArray[0] = JSON.stringify(hora24)
            let nuevaHora = horaArray.join(':');
            let nuevaHoraStr = nuevaHora.slice(0,-2)

            console.log(nuevaHoraStr);
            return nuevaHoraStr

        }else{
            let nuevaHora = horaArray.join(':'); 
            let nuevaHoraStr = nuevaHora.slice(0,-2); 

            console.log(nuevaHoraStr);

            return nuevaHoraStr; 
        }
    }
}


HoraMilitar(hora)
