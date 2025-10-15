const user_input = document.getElementById("user_input");
const output = document.getElementById("output")

user_input.addEventListener("keyup", function (event) {
    // console.log(event.target.value);
    const value = event.target.value;

        if (value > 0) {
            if (value % 2 == 0) {
                output.textContent = "Even Number"
            } else {
                output.textContent = "Odd Number"
            }
        } else {
                output.textContent = "invalid input"
            }
});

    function add (x, y, z){
        return x + y + z;
    }
    let addition = add (2, 3, 4);
    console.log(addition);
    




