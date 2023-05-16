// dz1
// var plus = document.querySelector('.plus');
// var minus = document.querySelector('.minus');
// var number = document.querySelector('.number');
//
// function counterFunction() {
//     var numberValue = 0;
//     minus.addEventListener('click',function () {
//         numberValue--;
//         number.value = numberValue
//     });
//
//     plus.addEventListener('click',function () {
//         numberValue++;
//         number.value = numberValue
//     });
// }
// counterFunction()
//
// //dz2

var clickButton = document.getElementById('p')
var displayText = document.getElementById('displayText')



clickButton.addEventListener('click',()=>{
     var input= prompt('enter something')
    if (input !== null){
        displayText.textContent = input
    }

})







//dz3

// var colors = {
//     красный: "STOP",
//     желтый: "WAIT",
//     зеленый: "GO"
// };
//
// var color = prompt("Введите цвет светофора:");
//
// if (color in colors) {
//     alert(colors[color]);
// } else {
//     alert("Введите корректный цвет светофора");
// }
//
// var arr2 = []
//
// for(let i = 0 ; i<=10;i++){
//     arr2.push(i)
// }
// console.log(arr2)