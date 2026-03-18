let transmission = prompt();

let num1;
let num2;
let abVal;

const analyzeFluxEvents = function(transmission){

    let c = 0 ;
    for(let i =0;i<transmission.length-1;i++){

        num1  = transmission.charCodeAt(i);
        num2 = transmission.charCodeAt(i+1);
        abVal = Math.abs(num1-num2);
        if(abVal == 0){
            continue;
        }
        else if(abVal > 0){
            c+= 1; 
        }


    }
    return c == 0 ? "Stream stable: no dominant flux events recorded." : `Detected ${c} high-voltage anomalies in signal stream.`


}
console.log(analyzeFluxEvents(transmission));