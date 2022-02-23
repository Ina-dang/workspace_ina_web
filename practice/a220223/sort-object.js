const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010},
]

//연도별 정렬
cars.sort(function(a,b){return a.year - b.year});

console.log(cars);

//글자 정렬
cars.sort(function(a,b) {
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();

    if(x < y) {return -1;}
    if(x > y) {return 1;}
    return 0;
})

console.log(cars);