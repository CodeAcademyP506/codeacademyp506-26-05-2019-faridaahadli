// 1.Find the number of digits in a nonnegative integer n.
// Code for 1

/*var num=12343
var countOfDigits=0;
if(num>=0){
    while(num>0){
        qaliq=num%10;
        num=(num-qaliq)/10
        countOfDigits++
}
console.log(countOfDigits)
}
else{
    console.log("You must enter positive integer")
}*/

// 2.The size of the rectangular door a, b are given, and the size of the cabinet, which is shaped like a cuboid x, y, z. Is it possible to carry through the closet door, if allowed to carry it so that each edge of the cabinet was parallel or perpendicular to each side of the door.

// Code for 2

/*function check(a,b,x,y,z){
    if((a>x && b>y) || (a>x && b>z)){
        return 1
    }
    else if ((a>z && b>y) || (a>z && b>x)) {
        return 1
    } 
    else if ((a>y && b>x) || (a>y && b>z)) {
        return 1
    } 
    else {
        return 0
    }
}
console.log(check(5,7,4,6,8))*/


// 3.Find the maximum element of the given array.
//    Code for 3


/*var a=[5,7,4,8,6]
var max=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max=a[i]
        }
}
console.log(max)*/



// 4.Find the minimum element of the given array.
// Code for 4

/*var a=[5,7,4,8,6]
var min=a[0];
for(let i=0;i<a.length;i++){
    if(min>a[i]){
        min=a[i]
        }
}
console.log(min)*/

// 5.Write a program for computing factorial witth recursion and without recursion


//  Code with recursion
/*function factorial(n){
    if(n===0){
        return 1
    }
    else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5))*/


// Code without recursion
/*function factorial(n){
    var result=1;
    for(let i=1;i<=n;i++){
        result=result*i
    }
    return result
}
console.log(factorial(6))*/

// 6.Write a program for finding product of 2 maximum element of array
//   Code for 6

/*var a=[1,2,5,7,3,9,11,12,9,13]

var bool=true;
while(bool){
    bool=false;
    for(let i=0; i<a.length-1;i++){
     if(a[i]>a[i+1]){
         temp=a[i]
         a[i]=a[i+1]
         a[i+1]=temp
         bool=true;
     }
    }
}
var product=a[a.length-1]*a[a.length-2]

console.log(product)*/


// 7.Print two arrays which first contains even numbers of given array and socond contins odd numbers of given array.

// Code for 7

// var a=[1,2,5,8,3,9,11,12,14]
// var even=[];
// var odd=[];
// for(let i=0;i<a.length;i++){
//     if(a[i]%2==0){
//         even.push(a[i])
//     }
//     else{
//         odd.push(a[i])
//     }
// }
// console.log(even)
// console.log(odd)