//map questions using traditional loops
//1.Square and Cube
// let arr=[2, 3, 4, 5]
// function squarecubes(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         let obj={}
//         obj.square=arr[i]**2
//         obj.cube=arr[i]**3
//         res.push(obj)
//     }
//     return res 
// }
// console.log(squarecubes(arr));

//2.Transform Strings
// let arr=["javascript", "react", "python", "java"]
// function myfunc(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         let s=arr[i]
//         let obj={}
//         let str=''
//         for(let j=0;j<s.length;j++){
//             let ch=s[j]
//             str=str+String.fromCharCode(ch.charCodeAt(0)-32)
//         }
//         obj.name=str
//         obj.length=s.length
//         res.push(obj)
//     }
//     return res
// }
// console.log(myfunc(arr));

//3.Extract Full Names
// let arr=[
//  {firstName:"Rahul", lastName:"Sharma"},
//  {firstName:"Priya", lastName:"Reddy"},
//  {firstName:"Arjun", lastName:"Kumar"}
// ]
// function myfunc(arr){
//     let res=[]
//     let str=''
//     for(let i=0;i<arr.length;i++){
//         str=str+arr[i].firstName+' '+arr[i].lastName
//         res.push(str)
//         str=''
//     }
//     return res
// }
// console.log(myfunc(arr));

//4.Update Student Results
// let arr=[
//     {name:"Rahul", marks:85},
//     {name:"Priya", marks:32}, 
//     {name:"Arjun", marks:65}
// ]
// function myfunc(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         let obj={}
//         obj.name=arr[i].name
//         obj.marks=arr[i].marks
//         if((arr[i].marks)>=40){
//             obj.result='Pass'
//         }
//         else{
//             obj.result='Fail'
//         }
//         res.push(obj)
//     }
//     return res  
// }
// console.log(myfunc(arr));

//5.Transform Product Prices
// let arr=[
//     {name:"Laptop", price:50000},
//      {name:"Mouse", price:800},
//       {name:"Keyboard", price:1500}
// ]
// function myfunc(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         let obj={}
//         obj.name=arr[i].name
//         obj.price=arr[i].price
//         obj.finalPrice=arr[i].price+arr[i].price*(18/100)
//         res.push(obj)
//     }
//     return res
// }
// console.log(myfunc(arr));

//6.Character Increment
// let arr=["abc", "hero"]
// function myfunc(arr){
//     let res=[]
//     let str=''
//     for(let i=0;i<arr.length;i++){
//        let s=arr[i]
//        for(let j=0;j<s.length;j++){
//         let ch=s[j]
//         str=str+String.fromCharCode(ch.charCodeAt(0)+1)
//        }
//        res.push(str)
//        str=''
//     }
//     return res
// }
// console.log(myfunc(arr));

//using map()
//1.Square and Cube
// let arr=[2, 3, 4, 5]
// let myfunc=(cv)=>{
//     let obj={}
//     obj.square=cv**2
//     obj.cube=cv**3
//     return obj
// }
// console.log(arr.map(myfunc));

//2.Transform Strings
// let arr=["javascript", "react", "python", "java"]
// let myfunc=(cv)=>{
//     let obj={}
//     let str=''
//     for(let i=0;i<cv.length;i++){
//        let ch=cv[i]
//        str=str+String.fromCharCode(ch.charCodeAt(0)-32)
//     }
//     obj.name=str
//     obj.length=cv.length
//     return obj
// }
// console.log(arr.map(myfunc));

//3.Extract Full Names
// let arr=[
//  {firstName:"Rahul", lastName:"Sharma"},
//  {firstName:"Priya", lastName:"Reddy"},
//  {firstName:"Arjun", lastName:"Kumar"}
// ]
// let myfunc=(cv)=>`${cv.firstName} ${cv.lastName}`
// console.log(arr.map(myfunc));

//4.Update Student Results
// let arr=[
//     {name:"Rahul", marks:85},
//      {name:"Priya", marks:32}, 
//      {name:"Arjun", marks:65}
// ]
// let myfunc=(cv)=>{
//     cv.name=cv.name
//     cv.marks=cv.marks
//     if(cv.marks>=40){
//         cv.result='Pass'
//     }
//     else{
//         cv.result='Fail'
//     }
//     return cv
// }
// console.log(arr.map(myfunc));

//5.Transform Product Prices
// let arr=[
//     {name:"Laptop", price:50000},
//      {name:"Mouse", price:800},
//       {name:"Keyboard", price:1500}
// ]
// let myfunc=(cv)=>{
//     cv.name=cv.name
//     cv.price=cv.price
//     cv.finalPrice=cv.price+cv.price*(18/100)
//     return cv
// }
// console.log(arr.map(myfunc));

//6.Character Increment
// let arr=["abc", "hero"]
// let myfunc=(cv)=>{
//     let str=''
//     for(let i=0;i<cv.length;i++){
//     str=str+String.fromCharCode(cv.charCodeAt(i)+1)
//     }
//     return str
// }
// console.log(arr.map(myfunc));

