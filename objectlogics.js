

//4.reverse the each element in the array
// let arr=['hero','zero','ram','inno']
// let revarr=[]
// for(let j=0;j<=arr.length-1;j++){
//     let s=arr[j]
//     let rev=''
// for(let i=s.length-1;i>=0;i--){
//     rev=rev+s.charAt(i)
//     revarr[j]=rev
// }

// }
// console.log(revarr);

//5.display the palindrom strings from the given array
// let myarr=['Madam','mom','dad','hero','inno'];
// let resarr=[]
// console.log('palindromes in given array:');
// for(let j=0;j<=myarr.length-1;j++){
//     let s=myarr[j]
// let rev=''
// for(let i=s.length-1;i>=0;i--){
    
//    rev=rev+s.charAt(i)
   
// }
// if(rev===s){
//     resarr[resarr.length]=rev
// }
// }
// console.log(resarr);

//6.covert each string in the array to upper case
// let arr=['hero','abc','xyz']
// let resarr=[]
// for(let j=0;j<=arr.length-1;j++){
//     let s=arr[j]
// let res=''
// for(let i=0;i<=s.length-1;i++){
//    res=res+String.fromCharCode(s.charCodeAt(i)-32)
//    resarr[j]=res
// }

// }
// console.log(resarr);

//7.display the count of vowels of each string in given array
//store the count of vowels in object
// let arr=['hero','abc','xyz']
// let newobj={}
// for(let j=0;j<=arr.length-1;j++){
//     let s=arr[j]
// let count=0
// for(let i=0;i<=s.length-1;i++){
//     ch=s.charAt(i)
//     if(ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U' || ch==='a' ||  ch==='e' || ch==='i' || ch==='o' || ch==='u'){
//         count=count+1
        
//     }
// }
// newobj[s]=count

// }
// console.log(newobj);

//8.count the words in given string
// let str='Welcome to javascript'
// let count=1
// for(let i=0;i<=str.length-1;i++){
//     if(str.charAt(i)===' '){
//         count=count+1
//     }
// }
// console.log('number of words in string:',count);

//9.display word by word from string 
// let oldstr='Welcome to javascript'
// let str=oldstr+' '
// let word=''
// for(let i=0;i<=str.length-1;i++){
//     if(str.charAt(i)!==' '){
//         word=word+str.charAt(i)
//     }
//    else{
//      console.log(word);
//      word=''
//    }
// }

//10.display the words along with thier lengths
// let oldstr='Welcome to javascript'
// let str=oldstr+' '
// let word=''
// let count=0
// for(let i=0;i<=str.length-1;i++){
//     if(str.charAt(i)!==' '){
//         word=word+str.charAt(i)
//         count=count+1
//     }
//    else{
//      console.log(`${word} : ${count}`);
//      word=''
//      count=0

//    }
// }

//11. Create an object where each word in the given string is a key and its length is the value.
let oldstr='welcome to javascript'
let str=oldstr+' '
let obj={}
let word=''
let count=0
for(let i=0;i<=str.length-1;i++){
    if(str.charAt(i)!==' '){
        word=word+str.charAt(i)
        count=count+1
    }
   else{
     obj[word]=count
     word=''
     count=0

   }
}
console.log(obj);