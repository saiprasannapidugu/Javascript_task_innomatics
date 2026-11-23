//reduce logics using traditional loops
//1.Find Average:
// let arr=[10, 20, 30, 40, 50]
// function myfunc(arr){
//     let sum=0
//     let avg=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     avg=sum/arr.length
//     return avg
// }
// console.log(myfunc(arr));

//2.Count Positive Numbers:
// let arr=[-10, 20, -5, 30, 0, 40, -2]
// function myfunc(arr){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>0){
//            count++
//         }
//     }
//     return count
// }
// console.log(myfunc(arr));

//3.Find the Most Frequent Element:
// let arr=[1, 2, 3, 2, 4, 2, 5, 3]
// function myfunc(arr){
//     let maxcount=0
//     let mn=arr[0]
//     for(let i=0;i<arr.length;i++){
//          let count=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++
//             }
//         }
//         if(count>maxcount){
//         maxcount=count
//         mn=arr[i]
//     }
//     }
//     return mn 
// }
// console.log(myfunc(arr));

//4.Count Even Numbers:
// let arr=[10, 15, 20, 25, 30, 35]
// function myfunc(arr){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2===0){
//            count++
//         }
//     }
//     return count
// }
// console.log(myfunc(arr));

//5.Count Occurrences:
// let arr=[1, 2, 2, 3, 1, 4, 2, 3]
// function myfunc(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         let count=0

//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++
//             }
//         }
//         obj[arr[i]]=count
//     }
//     return obj
// }
// console.log(myfunc(arr));

//6.Find Second Largest:
// let arr=[10, 50, 30, 80, 60]
// function myfunc(arr){
//     let lar=arr[0]
//     let slar=arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>lar){
//             slar=lar
//             lar=arr[i]
//         }
//         else if(arr[i]>slar && arr[i]!==lar){
//             slar=arr[i]
//         }

//     }
//     return slar
// }
// console.log(myfunc(arr));

//7.Sum of Object Properties:
// let arr=[
//     {name:"Rahul", marks:80},
//     {name:"Priya", marks:90},
//     {name:"Arjun", marks:70}
// ]
// function myfunc(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i].marks
//     }
//     console.log('total marks:',sum);
// }
// myfunc(arr)

//8.Calculate Total Cart Price:
// let arr=[
//     {name:"Laptop", price:50000},
//     {name:"Mouse", price:800},
//     {name:"Keyboard", price:1500}
// ]
// function myfunc(arr){
//     let prod=0
//     for(let i=0;i<arr.length;i++){
//        prod=prod+arr[i].price
//     }
//     console.log('product:',prod);
// }
// myfunc(arr)

//9.Count Vowels:
// let arr=["javascript", "react", "python", "java"]
// function myfunc(arr){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         let s=arr[i]
//         for(let j=0;j<s.length;j++){
//             let ch=s[j]
//         if(ch>='A' && ch<='Z' || ch>='a' && ch<='z'){
//             if(ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U' || ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
//                 count++
//             }
//         }
//     }
//     }
//     console.log(count);
// }
// myfunc(arr)

//with reduce()
//1.Find Average:
// let arr=[10, 20, 30, 40, 50]
// function callback(ac,cv){
//     return ac+cv
// }
// let sum=arr.reduce(callback,0)
// let avg=sum/arr.length
// console.log(avg);

//2.Count Positive Numbers:
// let arr=[-10, 20, -5, 30, 0, 40, -2]
// function callback(ac,cv){
//     if(cv>0){
//         ac++
//     }
//     return ac
// }
// let c=arr.reduce(callback,0)
// console.log(c);

//3.Find the Most Frequent Element:
// let arr=[1, 2, 3, 2, 4, 2, 5, 3]
// function callback(ac,cv){
//     let count=0
//     let mf=cv
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===cv){
//             count++
//         }
//     }
//     if(count>ac.maxCount){
//         ac.maxCount=count
//         ac.maxElement=cv
//     }
//     return ac
// }
// let res=arr.reduce(callback,{
//     maxCount:0,
//     maxElement:null
// })
// console.log(res.maxElement);

//4.Count Even Numbers:
// let arr=[10, 15, 20, 25, 30, 35]
// function callback(ac,cv){
//     if(cv%2===0){
//         ac++
//     }
//     return ac

// }
// let res=arr.reduce(callback,0)
// console.log(res);

//5.Count Occurrences:
// let arr=[1, 2, 2, 3, 1, 4, 2, 3]
// function callback(ac,cv){
//   if(cv in ac){
//     ac[cv]++
//   }
//   else{
//     ac[cv]=1
//   }
//   return ac
// }
// let res=arr.reduce(callback,{})
// console.log(res);

//6.Find Second Largest:
// let arr=[10, 50, 30, 80, 60]
// function callback(ac,cv){
//     if(cv>ac.lar){
//         ac.slar=ac.lar
//         ac.lar=cv
//     }
//     else if(cv>ac.slar && cv!==ac.lar){
//         ac.slar=cv
//     }
//     return ac
// }
// let ans=arr.reduce(callback,{lar:0,slar:0})
// console.log(ans.slar);

//7.Sum of Object Properties:
// let arr=[
//     {name:"Rahul", marks:80},
//     {name:"Priya", marks:90},
//     {name:"Arjun", marks:70}
// ]
// function callback(ac,cv){
//     ac.sum=ac.sum+cv.marks
//     return ac  
// }
// let ans=arr.reduce(callback,{sum:0})
// console.log(ans.sum);

//8.Calculate Total Cart Price:
// let arr=[
//     {name:"Laptop", price:50000},
//     {name:"Mouse", price:800},
//     {name:"Keyboard", price:1500}
// ]
// function callback(ac,cv){
//     ac.total=ac.total+cv.price
//     return ac
// }
// let ans=arr.reduce(callback,{total:0})
// console.log(ans.total);

//9.Count Vowels:
// let arr=["javascript", "react", "python", "java"]
// function callback(ac,cv){
//     for(let i=0;i<cv.length;i++){
//         let ch=cv[i]
//         if(ch>='A' && ch<='Z' || ch>='a' && ch<='z'){
//             if(ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U' || ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u'){
//                 ac++
//             }

//         }
        
//     }
//     return ac

// }
// let res=arr.reduce(callback,0)
// console.log(res);