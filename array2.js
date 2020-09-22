
var sum =0;

function aryFunc(){
    

var numbers = [45,28,22,10,55];

// numbers.forEach(function(val,idx,ary){
//     console.log(val,idx,ary);
//     sum+=val;
// });

numbers.forEach(callBackFunc);
console.log(sum);
document.getElementById("ary").innerHTML = sum;
}
function callBackFunc(v,i,a){
    sum+= v;
}
