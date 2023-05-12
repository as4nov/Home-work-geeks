
var arr = [10, 20, 30, 50, 235, 30006, 503453257]
for (i of arr) {
   if(String(i)[0]==="1" || String(i)[0]==="2" || String(i)[0]==="5"){
      console.log(i);
   }
}

for (let i = 20 ; i>=0 ; i--){
   console.log(i)
}

var colors = {
   красный: "Стоп",
   желтый: "Приготовьтесь",
   зеленый: "Идите"
};

var color = prompt("Введите цвет светофора:");

if (color in colors) {
   alert(colors[color]);
} else {
   alert("Введите корректный цвет светофора");
}


var arr2 = []

for(let i = 0 ; i<=10;i++){
   arr2.push(i)
}
console.log(arr2)

