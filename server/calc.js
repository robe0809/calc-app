// object to hold result of calculation function 
let calc = {
    result: 0
}

// calculation function 
function math (obj) {
    let operation = obj.type;
    if(operation === 'multiply') {
        calc.result = Number(obj.x) * Number(obj.y);  
    } else if (operation === 'divide') {
        calc.result = Number(obj.x) / Number(obj.y);
    } else if (operation === 'add') {
       calc.result = Number(obj.x) + Number(obj.y);
    } else if (operation === 'subtract') {
        calc.result = Number(obj.x) - Number(obj.y);
    } else {
        console.log('please enter an operation'); 
    }
}

module.exports = {
    math: math,
    calc: calc
}