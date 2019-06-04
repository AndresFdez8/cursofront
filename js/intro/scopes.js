var global = 1;
global2 = 2;



function fn1(){
    var local1 = 3;
    local2 = 4; // es global porque no esta declarada con var 

function fn2(){
    console.log(local1);
}
fn2();
}

console.log(global1);
console.log(global2);
console.log(local1);
console.log(local2);
