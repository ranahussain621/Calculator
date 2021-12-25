
    var array = ["+","-","/","*","."];

function calculator(num){
    var numbar = document.getElementById('inputrow');
    numbar.value += num;
}

function result(){
 
        var result = document.getElementById('inputrow');
        result.value = eval(result.value);
       result = result.value;   
}

function clr(){
   let btninput = document.getElementById('inputrow');
let clear = ' ';
   btninput.value = clear;
}