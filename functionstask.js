
//functions task
//named function without input without return
//1.Write a function to print the first 5 multiples of 7.
// function multiplesof(){
//     let count=0
//     for(let i=1;i<=50;i++){
//           if(i%7===0){
//             count=count+1
//             console.log(i);
            
//           }
//         if(count===5){
//          break;
//     }
//     }
    
// }
// multiplesof()

//2.check whether give number is prime or not
// function primeornot(){
// let n=5
// let count=0
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         count=count+1
//     }

// }
// if(count==2){
//     console.log('prime number')
// }
// else{
//     console.log('not a prime number')
// }
// }
// primeornot()

//3.Write a function to print the first 5 prime 
// function rangeprime(){
// let countp=0

// for(let j=1;j<=50;j++){
//     let count=0
//     n=j
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//        count=count+1
//     }

//  } 
//      if(count==2){
//     countp=countp+1
//     console.log(j); 
// }
// if(countp==5){
//     break;
// }
// }
// }
// rangeprime()

//named function with input without return
//4.write a function to reverse a number
// function reverseofnumber(n){
//   
// rev=0
// while(n>0){
//     ld=n%10
//     rev=rev*10+ld
//     n=parseInt(n/10)
// }
// console.log('reverse of a number:',rev);
// }
// reverseofnumber(123)


//5.check wether the number is palindrom or not
// function checkpalindrom(n){
//     n=121
// temp=n
// rev=0
// while(n>0){
//     ld=n%10
//     rev=rev*10+ld
//     n=parseInt(n/10)
// }
// if(rev==temp){
//     console.log('palindrom number');
    
// }
// else{
//      console.log('not a palindrom number'); 
// }
// }
// checkpalindrom(121)

//6.Factorial of a number
// function factorialof(n){
// let fact=1
// for(let i=1;i<=n;i++){
//     fact=fact*i
// }
// console.log(`factorial of number ${n} is : ${fact}`);
// }
// factorialof(5)

//named function without input with return
//7.prints whether n is a perfect number
// function perfectnumber(){
//     let n=6
// let sum=0
// for(let i=1;i<n;i++){
//     if(n%i==0){
//         sum=sum+i
//     }
// }
// if(sum==n){
//     return `${n} is perfect number`;   
// }
// else{
//     return `${n} not a perfect number`; 
// }
// }
// console.log(perfectnumber());

//8.prints whether n is an Armstrong number
// function armstrong(){
//     let n=153
// let temp=n
// let sum=0
// let l=n.toString().length
// while(n>0){
//     let ld=n%10
//     sum=sum+ld**l
//     n=parseInt(n/10)
// }
// if(sum===temp){
//     return 'armstrong number'
    
// }
// else{
//     return ' not a armstrong number'
// }
// }
// console.log(armstrong());

//9. Write a function that searches from 1 to 100 and returns
// the first number whose digit sum is 10.

// function sumofdigits(){
//     for(let i=1;i<=100;i++){
//     let n=i
//     let sum=0
// while(n>0){
//     ld=n%10
//     sum=sum+ld
//     n=parseInt(n/10)
// }
// if(sum===10){
//     return i 
// }
// }
// }
// console.log(sumofdigits());



//named function with input with return
//10.swap two numbers
// function swap(a,b){
//     let c=a
//     a=b
//     b=c
//     return `${a},${b}`
// }
// console.log(swap(13,15));

//11.count the number of digits in n.
// function countdigits(n){
//     let count=0
//     while(n>0){
//         ld=n%10
//         count=count+1
//         n=parseInt(n/10)
//     }
//     return count
// }
// console.log(countdigits(15673));

//12.display the palindrome years from till the given year
// function palindromyear(year){
//     let res=0
//     for(let i=1;i<=year;i++){
//         let n=i
// let temp=n
// let rev=0

// while(n>0){
//     ld=n%10
//     rev=rev*10+ld
//     n=parseInt(n/10)
// }
// if(rev===temp){
//     res=res+temp.toString()+'\n'
// }
// }
// return res
// }
// console.log(palindromyear(2026));

