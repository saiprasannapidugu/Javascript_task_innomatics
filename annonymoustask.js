//annonymous function without input and without return
//1.strong number
// let strong=function (){
//     let n=145
//     let temp=n
//     let sum=0
//     while(n>0){
//         ld=n%10
//         let fact=1
//         for(let i=1;i<=ld;i++){
//             fact=fact*i
//         }
//         sum=sum+fact
//         n=parseInt(n/10)
//     }
//     if(sum===temp){
//         console.log('strong number')
//     }
//     else{
//         console.log('not a strong number')
//     }
// }
// strong()

//2.Write the code to skip the 0 from the given number 10405
// let skips=function(){
//     let n=10405
//     let result=''
//     while(n>0){
//         ld=n%10
//         n=parseInt(n/10)
//         if(ld===0){
//             continue
//         }
//         result=result+String(ld)+''
//     }
//     console.log(result)

// }
// skips()

//3.Display the first armstrong  number in the range of 10 to n.
// let armstrong=function(){
//     let n=500
//     for(let i=10;i<=n;i++){
//         let x=i
//         let temp=x
//         let sum=0
//         l=x.toString().length
//         while(x>0){
//             ld=x%10
//             sum=sum+ld**l
//             x=parseInt(x/10)
//         }
//         if(sum===temp){
//             console.log(i);
//             break
//         }
//     }
// }
// armstrong()

//annonymous function with input and without return
//4.Find the average of prime numbers in the range of 1 to n
// let averageof=function(n){
//     let countp=0
//     let sum=0
//     for(let j=1;j<=n;j++){
//         let x=j
//         let count=0
//     for(let i=1;i<=x;i++){
//         if(x%i===0){
//             count=count+1
//         }
//     }
//     if(count==2){
//         // print(j)
//         countp=countp+1
//         sum=sum+j
//     }
//     }
//     let avg=sum/countp
//     console.log('average:',avg);
    
// }
// averageof(10)

//5.write code for the following pattern
//  543212345
//   5432345
//    54345
//     545
//      5
// let pattern=function(n){
// for(let j=1;j<=n;j++){
//     let output=''
//     for(let s=1;s<j;s++){
//         output=output+' '
//     }
//     for(let i=n;i>=j;i--){
//        output=output+i
//     }
//     for(let k=j+1;k<=5;k++){
//         output=output+k

//     }
//     console.log(output);
    
// }
// }
// pattern(5)

//6.Write a function that searches from 1 to 500
// and returns the first number whose
//  digit sum is even and which is not divisible by 5.

// let firstnumber=function(n){
// for(let i=10;i<=n;i++){
//     let x=i
//     let sum=0
//     while(x>0){
//         ld=x%10
//         sum=sum+ld
//         x=parseInt(x/10)
//     }
//     if(sum%2===0 && i%5!=0){
//         console.log(i);
//         break;
        
//     }
// }
// }
// firstnumber(500)

//annonymous function without input and with return
//7.Return the first even number between 1 and 20
// let firsteven=function(){
//     for(let i=1;i<=20;i++){
//         if(i%2===0){
//             return i
//         }
//     }
// }
// console.log(firsteven());

//8.Return the first palindrome number between 100 and 200
// let firstpalin=function(){
//     for(let i=100;i<=200;i++){
//         let x=i
//         let temp=x
//         let rev=0
//         while(x>0){
//             ld=x%10
//             rev=rev*10+ld
//             x=parseInt(x/10)
//         }
//         if(rev===temp){
//             return i
            
//         }
//     }
// }
// console.log(firstpalin());

//9.Return the count of vowels in a fixed string
// let countof=function(){
//     let s='javascript programming'
//     let count=0
//     for(let ch=0;ch<s.length;ch++){
//         if(s[ch]==='a' || s[ch]==='e' || s[ch]==='i' || s[ch]==='o' || 
//             s[ch]==='u' || s[ch]==='A' || s[ch]==='E' || s[ch]==='I' || s[ch]==='O' || s[ch]==='U' ){
//             count=count+1
//         }
//     }
//     return count;

// }
// console.log('count is:',countof());

//annonymous function with input and with return

//10.Find the number of digits
// let find=function(n){
//     let count=0
//     for(let i=1;i<=n;i++){
//         ld=n%10
//         count=count+1
//         n =parseInt(n/10)
//     }
//     return `count :${count}`

// }
// console.log(find(1234));

//11.Find the sum of even digits
// let sumeven=function(n){
//     let sum=0
//     while(n>0){
//         ld=n%10
//         if(ld%2===0){
//             sum=sum+ld
//         }
//         n=parseInt(n/10)
//     }
//     return `sum: ${sum}`
// }
// console.log(sumeven(1234));

//12.Find the number of words in a sentence
// let numberof=function(s){
//     let count=1
//     for(let i=0;i<s.length;i++){
//           if(s[i]===' '){
//             count=count+1
//           }
//     }
//     console.log(count);
    
// }
// numberof('javascript is the easy language')

//arrow function without input and without return
//13.Find the number of words in a sentence
// let numberof=s=>{
//     let count=0
//     let inword=false
//     for(let i=0;i<s.length;i++){
//         if( s[i]!==' ' &&  inword===false){
//             count=count+1
//             inword=true
//         }
//         else if( s[i]===' '){
//             inword=false
//         }
//     }
//     console.log(count);
// }
// numberof('javascript is the easy language')

//14.Print even numbers from 1 to 20
// let evennumbers=()=>{
//     for(let i=1;i<=20;i++){
//         if(i%2===0){
//             console.log(i)
//         }
//     }
// }
// evennumbers()

//15.Find the largest digit in a number
// let largestdigit=()=>{
//     let n=345267
//     let lar=0
//     while(n>0){
//         ld=n%10
//         if(ld>lar){
//             lar=ld
//         }
//         n=parseInt(n/10)
//     }
//     console.log('largest number:',lar)
// }
// largestdigit()

//arrow function with input and without return
//16.Find the sum of digits at even positions
// let sumdigits=n=>{
//     let sum=0
//     let position=1
//     while(n>0){
//         ld=n%10
//         if(position%2==0){
//             sum=sum+ld
//         }
//         position++
//         n=parseInt(n/10)
//     }
//     console.log('sum of digits at even positions:',sum)
// }
// sumdigits(24567)

//17.Print characters that occur only once
// let characters=s=>{
//     for(let i=0;i<s.length;i++){
//         let count=0
//         for(let j=0;j<s.length;j++){
//             if(s[i]===s[j]){
//                 count=count+1
//             }
//         }
//         if(count===1){
//             console.log(s[i]);
            
//         }
//     }
// }
// characters('program')

//18.Find the second largest digit
// let secondlarge=n=>{
//     let lar=0
//     let slar=0
//     while(n>0){
//         ld=n%10
//         if(ld>lar){
//             salr=lar
//             lar=ld
//         }
//         else if(ld>slar && ld!=lar){
//             slar=ld
//         }
//         n=parseInt(n/10)
//     }
//     console.log('second largest digit:',slar);
    
// }
// secondlarge(345627)

//arrow function without input and with return
//19.Reverse a fixed string
// let Reversestring=()=>{
//     let s='program'
//     let temp=''
//     for(let i=0;i<s.length;i++){
//         temp=s[i]+temp
//     }
//     return temp
// }
// console.log(Reversestring());

//20.Print the multiplication table of 7
// let multipl=()=>{
//     let n=7
//     let result=''
//     for(let i=1;i<=10;i++){
//        result= result+`${n} x ${i} = ${n*i} \n`
    
//     }
//     return result

// }
// console.log(multipl());

//21.Return the first number between 50 and 100 divisible by 9
// let firstnumber=()=>{
//     for(let i=50;i<=100;i++){
//         if(i%9===0){
//             return i
//         }
//     }
// }
// console.log(firstnumber());

//arrow function with input and with return
//22.Return the count of consonants in a fixed string
// let consonants=(s)=>{
//     let count=0
//     for(let i=0;i<=s.length;i++){
//         if(s[i]!=='a'  && s[i]!=='e' && s[i]!=='i' && s[i]!=='o' && s[i]!=='u' && s[i]!=='A' && s[i]!=='E' && s[i]!=='I' && s[i]!=='O' &&  s[i]!=='I'){
//             count=count+1
//         }
//     }
//     return count
// }
// console.log(consonants('javascript'));

//23.Return the sum of odd numbers in a range
// let sumrange=(n)=>{
//     let sum=0
//     for(let i=1;i<=n;i++){

//         if(i%2!=0){
//             sum=sum+i
//         }
//     }
//     return sum
// }
// console.log(sumrange(10));

//24.Return the number of digits that are greater than 5
// let numberof=n=>{
//     let count=0
//     while(n>0){
//         ld=n%10
//         if(ld>5){
//             count=count+1
//         }
//         n=parseInt(n/10)
//     }
//     return count
// }
// console.log(numberof(45673));








