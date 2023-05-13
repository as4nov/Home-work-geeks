function logDataType(data) {
    let dataType = typeof data
    console.log(dataType)
}
logDataType('ulan')

//////////

let calculator = (number1,number2,operator) =>{
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
    }
};
console.log(calculator(3,7,'*'))

//////

function getPositionArrayElement(element,array) {
    for (let i = 0; i <array.length;i++) {
        if (array[i] === element){
            return i
        }
    }
    return -1
}
let myArray = [4,6,78,3,245,786,864]
let position = getPositionArrayElement(864,myArray)
console.log(position)
