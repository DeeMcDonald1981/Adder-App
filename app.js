function addNumbers(a,b){
    const sum = a + b;
    return sum;
}

let showFunction = document.getElementById("showFunction");
let output = document.getElementById("output");
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

showFunction.addEventListener('click', ()=>{
    
    const val1 = num1.value;
    const val2 = num2.value;
    if (val1.trim() !== '' && val2.trim() !== '') {
        const numVal1 = Number(val1);
        const numVal2 = Number(val2);
        if (!isNaN(numVal1) && !isNaN(numVal2)) {
            const sum = numVal1 + numVal2;
            console.log(`The sum of ${numVal1} +  ${numVal2}  = ${sum} `)
            output.textContent = `${val1} +  ${val2} = ${addNumbers(numVal1, numVal2)}`
        } else {
            console.log("No value found! Please enter a value in both fields")
            output.innerHTML = "<span class='error'>No value found! Please enter a value in both fields</span>"

        }
    } else {
            console.log("No value found! Please enter a value in both fields")
            output.innerHTML = "<span class='error'>No value found! Please enter a value in both fields</span>"

        }
    });
