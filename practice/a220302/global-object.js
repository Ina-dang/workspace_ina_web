let x = myFunction(); //x will be the globalthis object

function myFunction(){
    return this;
}

console.log(x);