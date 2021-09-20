// function largest(number){
//     var large = 0;
//     for (let i = 0;i < number.length ; i++){
//          var element = number[i]; 
//          if (element > large)
//          large=element ;
//     }
//     return large;
// }
// var num = [10,21,54,45,90,65,70];
// var larger = largest(num);
// console.log(larger);


// function smallest(num){
//     var min = numb[0] ;
//     for (let i = 0; i < num.length; i++){
//         var element = num[i];
//         if(element < min){
//              min = element ;
//         }
//     }
//     return min;
// }

// var numb = [91,20,71,30,55,99];
// var small = smallest(numb);
// console.log(small);

// function fiboncchi(n){
//     if(n == 0){
//         return [0];
//     }
//     if(n == 1){
//         return [0,1];
//     }
//     var fibo = fiboncchi(n -1) ;
//     fibo [n] = fibo[n - 1] + fibo[n - 2];
//     return fibo;
// }
// var fiba = fiboncchi(20);
// console.log(fiba);


// function chair(num){
//     var number = num * 3 ;

//     return  number;
// }
// var more = chair(10);
// console.log(more ,'cft');

function fibonacchi(n){
    if(n == 0){
        return [0];
    }
    if (n == 1){
        return [0,1];
    }
    var fibo = fibonacchi(n -1);
    fibo[n] = fibo[n -1] + fibo[n - 2];

    return fibo;
}
var fg = fibonacchi(20);
console.log(fg);

function factorial(num){
    var fact= 1;
    for(let i = 1; i <= num;i++){
        fact = fact * i ;

    }
    return fact;
}

var favt = factorial(10);
console.log(favt);

function largest(number){
    var nus = 0;
    for(i = 0 ; i < number.length; i++){
        var element = number[i];
        if(element > nus){
            nus = element;
        }
    }
    return nus;
}
var arrt = [10,20,03,55,89,75,25]
var large = largest(arrt);
console.log(large);

function smaller(namber){
    var sml = arrn[0];
    for(let i = 0 ; i< namber.length; i++){
        var elent = namber[i];
        if(elent < sml){
            sml = elent;
        }
    }
    return sml;
}
var arrn = [10,20,03,55,89,75,25]
var seml = smaller(arrn);
console.log(seml);    