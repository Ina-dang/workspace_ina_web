var x = 'global';

function foo() {
    console.log(x); //local
    var x = 'local'; 
    console.log(x); //local
}

foo();
console.log(x); //global

globalThis.x ; //global 가리킴
console.log(typeof globalThis.x);
console.log(globalThis.x);


