function factorial(num){
    var fact = 1;
    for(let i = 1 ; i <= num; i++){
        fact = fact * i;

    }
    return fact;
}
var fis = factorial(10);
console.log(fis);

function fibonacchi(n){
    if(n == 0){
        return [0];
    }
    if(n == 1){
        return [0,1];
    }
   var fibo = fibonacchi( n-1);
   fibo[n] = fibo[n-1] + fibo[n -2];
   return fibo;
}
console.log (fibonacchi(50));

function largest(number){
    var larg = 0;
    for(let i = 0 ; i < number.length; i++){
        var element = number[i];
        if(element > larg){
            larg = element;
        }
    }
    return larg;
}
var arrt = [10,20,03,55,89,75,25]
var larfe = largest(arrt);
console.log(larfe);
 

function smaller(small){
    var smal = arrn[0]
    for(let i = 0 ; i < small.length; i++){
        let elemn = small[i];
        if(elemn < smal){
            smal = elemn;
        }
    }
    return smal;
}
var arrn = [10,20,03,55,89,75,25]
var seml = smaller(arrn);
console.log(seml); 

function wooden(miles){
    if(miles <= 10 ){
        var count = miles * 10;
        return count;
    }
  else if (miles <= 20){
      var secondMiles = 10 * 10;
      var rest = miles - 10;
      var second10 = rest *50;
      let total = secondMiles + second10;
      return total;
  }
 else{
    secondMiles = 10 * 10;
    second10 = 10 * 50;
    var restmiles = miles - 20 ;
    var third = restmiles * 100;
    let totalani = secondMiles + second10 + third;
    return totalani;


 }

}
var fun = wooden(40);
console.log(fun);