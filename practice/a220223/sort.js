
/* string sort*/
console.log("======String Sort======")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.reverse());


/* number sort*/
console.log("======Number Sort======")

const points = [40, 100, 1, 5, 25, 10];
console.log(points);

//using compare function
points.sort(function(a,b){return a-b})
console.log(points);

// descending
points.sort(function(a,b){return b-a})
console.log(points);



console.log("======Random Order======")
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a,b){return 0.5 - Math.random()});
console.log(points1);


console.log("======Highest or Lowest Array Value")
const points2 = [40, 100, 1, 5, 25, 10];
console.log(points2);
points2.sort(function(a,b){return a-b})
console.log(`The lowest value is ${points2[0]}`);
points2.sort(function(a,b){return b-a})
console.log(`The highest value is ${points2[0]}`);


console.log("======find the highest & lowest number======")
var arr = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
console.log(arr);
console.log(myArrayMax(arr));

function myArrayMin(arr){
    return Math.min.apply(null, arr);
}
console.log(arr);
console.log(myArrayMin(arr));

console.log("======function find Max & Min======")
var arr = [40, 100, 1, 5, 25, 10];
function myArrayMax(arr){
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max){
            max = arr[len];
        }
    }
    return max;
}
console.log(myArrayMax(arr));

function myArrayMin(arr){
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min){
            min = arr[len];
        }
    }
    return min;
}
console.log(myArrayMin(arr));

