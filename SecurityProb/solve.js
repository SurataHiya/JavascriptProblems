let num = Number(prompt());
let num1 = num.toString();



const fun1 = function(num1){
    let c  = 0;
    for(let i = 0;i<num1.length;i++){
        c += Number(num1[i]);
    
    }
    return (c>=10 && c<=99)? "Security Level :Omega" : "Security Level :Sigma"

}

console.log(fun1(num1));



// What do you mean by sequential?
//It's like reading a book from start to finish, where you go through each chapter one by one.