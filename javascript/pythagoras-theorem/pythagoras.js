const x = document.getElementById("output-1");
const y = document.getElementById("output-2");
const z = document.getElementById("output-3");
const feedback = document.getElementById("feedback")

const calculate = document.getElementById("calculate")


    // function calculation_1(x, y,) {
    // return Math.sqrt(x**2 + y**2);
    // }

    const input_1 = document.getElementById("input-1");
    const input_2 = document.getElementById("input-2");
    const input_3 = document.getElementById("input-3");
   
    calculate.addEventListener("click", calculate_missing)

     function calculate_missing() {
        const i1 = input_1.value;
        const i2 = input_2.value;
        const i3 = input_3.value;
        
        if (i1 && i2 && !i3) {
            input_3.value = Math.sqrt(i1**2 + i2**2); 
            x.textContent = input_3.value
        }
        else if(i1 && i3 && !i2) {
            input_2.value = Math.sqrt(i1**2 + i3**2);
            y.textContent = input_2.value
        }
        else if(i2 && i3 && !i1) {
            input_1.value = Math.sqrt(i2**2 + i3**2);
            z.textContent = input_1.value
        }
        else {
            feedback.textContent = "invalid data";
            feedback.style.color = "red";
        }
    }
    input_3.addEventListener("input", function () {
            let val = event.target.value
            x.textContent = val
        })
    input_1.addEventListener("input", function () {
            let val2 = event.target.value;
            z.textContent = val2;
        })
        input_2.addEventListener("input", function () {
            let val3 = event.target.value
            y.textContent = val3
        })
    // // console.log(hh);
    
// let hey = calculation_1(2,4)
// console.log(hey);
array.forEach(element => {
    
});