const led_1 = document.getElementById("led-1");
const led_2 = document.getElementById("led-2");
const led_3 = document.getElementById("led-3");
const led_4 = document.getElementById("led-4");
const led_5 = document.getElementById("led-5");

const control = document.getElementById("control-center")


// inputting the leds into an array so i can call them once
const col = [led_1, led_2, led_3, led_4, led_5];
let spin = 0;
rotate(spin) 

// function for getting the animation duration
function rotate(spin) {
    blade.style.animationDuration = `${spin}s`;
}

// event listnener for keyboard
document.addEventListener("keydown", function (event) {
    const action = event.keyCode;
    // console.log(action);
    
    if (action == 49) {
        spin = 5;
        rotate(spin);
        led_1.style.backgroundColor = "greenyellow";
    } else {
        led_1.style.backgroundColor = "gray";
    }

    if (action == 50) {
        spin = 4;
        rotate(spin)
        led_2.style.backgroundColor = "greenyellow";
    } else {
        led_2.style.backgroundColor = "gray";
    }

    if (action == 51) {
        spin = 3;
        rotate(spin)
        led_3.style.backgroundColor = "yellow";
    } else {
        led_3.style.backgroundColor = "gray";
    }

    if (action == 52) {
        spin = 2;
        rotate(spin)
        led_4.style.backgroundColor = "gold";
    } else {
        led_4.style.backgroundColor = "gray";
    }

    if (action == 53) {
        spin = 1;
        rotate(spin);
        led_5.style.backgroundColor = "red";
    } else {
        led_5.style.backgroundColor = "gray";
    }

    if (action == 48) {
        spin = 0;
        rotate(spin);
    }

    if (action == 79) {
        col.forEach(function (color) {
            color.style.backgroundColor = "gray";
        });
        for (let i = spin; i <= 10; i++) {
            const element = i;
            setTimeout(function () {
                console.log(element);
                spin = element;
                rotate(spin);
            }, element * 500);
        }
    }
});

// event listnener for buttons
control.addEventListener("click", function(e){
    const btn = e.target.innerText;
    console.log(btn);

    if (btn == 0) {
        spin = 0;
        rotate(spin);
        col.forEach(function (color) {
            color.style.backgroundColor = "gray";
        })
    }
    if (btn == 1) {
        spin = 5;
        rotate(spin);
        led_1.style.backgroundColor = "greenyellow";
    } else {
        led_1.style.backgroundColor = "gray";
    }
    
    if (btn == 2) {
        spin = 4;
        rotate(spin)
        led_2.style.backgroundColor = "greenyellow";
    } else {
        led_2.style.backgroundColor = "gray";
    }

    if (btn == 3) {
        spin = 3;
        rotate(spin)
        led_3.style.backgroundColor = "yellow";
    } else {
        led_3.style.backgroundColor = "gray";
    }

    if (btn == 4) {
        spin = 2;
        rotate(spin)
        led_4.style.backgroundColor = "gold";
    } else {
        led_4.style.backgroundColor = "gray";
    }

    if (btn == 5) {
        spin = 1;
        rotate(spin);
        led_5.style.backgroundColor = "red";
    } else {
        led_5.style.backgroundColor = "gray";
    }
})
