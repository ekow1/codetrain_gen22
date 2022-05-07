

( (num1, num2,num3) =>{
console.log("NORMAL FUNCTION ----------------------------------")

    let total = num1 + num2 + num3;
    console.log(total)
    document.write(total + '<br>' + '<br>' ) 

    
})(5 ,10,15);



function even(value) {
    console.log("LOOP FUNCTION ----------------------------------")

    for (let i = 0; i <= value; i++) {
        if (i % 2 ===0) {

            document.write(`${i} <br>  <br>`)
            console.log(i);
            
        }
        
    }
    
}

even(10)


//multiply

console.log("ALERT ANSWER----------------------------------");


function mul(m , k) {
    
    let multiply;

    multiply = m * k;

    alert(`The answer is : ${multiply
    }`)
    console.log(multiply)
    
}

mul(20, 10);