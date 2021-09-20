// console.log('nazmul hasan');

// function nameWise(number){
//     var functor = 1 ;
//     for(i=1;i<=8;i++){
       
//         functor = functor * i;
       
    
//     }

// }

// var name = nameWise();
// console.log(name);

// var nameprice = '343';
// var namepricer = parseInt(nameprice);
// var nameprices = '342';
// var namepricers = parseInt(nameprices);

// var namer = namepricer + namepricers;
// console.log(namer);


// let adeit = ['Nazmul','Nafiz','Nadim','Setu','kaka'];

// let nameof = adeit.indexOf('Setu');
// console.log(nameof);


// var Nmber =[40,20,10,100,85];

// for(i=0; i < Nmber.length;i++){
//         myNumber = Nmber[i];
//         console.log(myNumber);
// }



// function mylove(taka){
//     var amardrker = 250000;

//     var amarsmy = amardrker / taka ;

//     return amarsmy;
// }
// var amarai = 20000;
    
// var lakbe = mylove(amarai);
// console.log(lakbe);
// var color = 'yellow'

// switch(color){
//     case 'blue':
//      console.log ('coolor is blie');
//      break
//     case 'yellow':
//      console.log ('coolor is yellow');
//      break
//     case 'green':
//      console.log ('coolor is blie');
//      break
//     case 'aqua':
//      console.log ('coolor is blie');
//      break
// }
// function leapYear(year){
    
//     var newyear = year % 4 ;
//     if ( newyear == 0){
//         console.log('this year is leap year');

//     }
//     else{
//         console.log('this year is not a leap year');

        
//     }
// }
// var nowtalk = 2023
// ;
// var lap = leapYear(nowtalk);
// console.log(lap);
// factorial
 
// function factorial(){
//     var fact=1;
//     for(i = 1;i <= 8; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// var recap =factorial()
// console.log(recap);
// function factorial(n){
//     if(n == 1)
//     return 1;
//    return n * factorial (n-1);
// }

// var myfact = factorial(10);
// console.log(myfact);


// let number = 10.55;
// let output = Math.round(number);
// console.log(output);

// let beach = Math.random() * 6;
// let nasa =  Math.round(beach);

// console.log(nasa);

// var amibusness = 445;
// var nafizgovt = 435;
// var abbudkn = 550;

// var hight = Math.max(amibusness , nafizgovt, abbudkn );
// console.log(hight);


// let number = [10,12,13,34,45,];
// var sum = 0;
// for(i = 0;i < number.length; i++){
//      let element =number[i];

//         sum = sum + element ;
   
// }
// console.log(sum);
// var number = [10, 20, 30, 40, 50, 60, 70, ];

// number[3] = 100;
// number.push = 120;
// number.pop()
// console.log(number);

// function factorial(number){
//       var largest = 0;
//         for (i= 0 ; i< number.length;i++){
//         var element = number[i];
//         if(element > largest){
//                 largest = element;
//         }
//    }
       
//         return largest;
// }
// var age = [10 , 20, 40, 73, 84, 40, 11];
// var name = factorial(age);
// console.log(name);

// function factorial(numbers){
//         var large = 0 ;
//         for(i = 0; i < numbers.length; i++){
//                 var element = numbers[i];
//                 if(element > large){
//                         large = element;
//                 }
//         }
//         return large;

// }
 
// var age = [20, 30, 40, 11, 65, 21, 71, 10];
// var largest = factorial(age);
// console.log(largest);

// function fibonacchi(num){
//         if(typeof num != 'number'){
//                 return "numbers only.Don't type other things";
//         }
//         var fibo = [0,1];
//         for(let i=2;i<= num;i++){
//                 fibo[i] =fibo[i-1] +fibo [i-2];
        
//         }
//         return fibo;
// }
// var nachi = fibonacchi(6);
// console.log(nachi);

// function fibonacchi(n){
//         if(n == 0){
//                 return [0];
//         }
//         if(n == 1){
//                 return [0,1];
//         }
//         const fibo = fibonacchi (n -1);
//         fibo[n] = fibo[n-1] +fibo[n-2];
//         return fibo;
// }
// var fiboelement = fibonacchi(6);
// console.log(fiboelement);
// 
console.log(element);

function namer(names){
    var names = ['nazmul','nafiz','rasel','faysal']
    var unicq =[];
    for(const element of names){
        
        if (unicq.indexOf(element) == -1){
            unicq.push(element);
        }
        
    }
    return unicq;
}
var row =namer(names);
console.log(row);
