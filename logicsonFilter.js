//filter logics(using traditional way)
//1.Filter Duplicate Elements
// let arr=[10,20,30,20,40,10,50,30]
// let res=[]
// let count=1
// for(let i=0;i<=arr.length;i++){
//     for(let j=0;j<=res.length;j++){
//         if(arr[i]===res[j]){
//            count++
//         }
//     }
//     if(count===1){
//         res.push(arr[i])
//     }
// }
// console.log(res);

//2.Filter Prime Numbers
// function primenumbers(arr){
//     let res=[]
// for(let j=0;j<=arr.length;j++){
//     let count=0
//     let n=arr[j]
//     for(let i=1;i<=n;i++){
//         if(n%i===0){
//             count=count+1
//         }
//     }
//     if(count===2){
//         res.push(n)
//     }
// }
// return res
// }
// let arr=[2, 4, 5, 8, 11, 15, 17, 20, 23]
// let ans=primenumbers(arr)
// console.log(ans);

//3.Filter Palindrome Strings
// function palindromstring(arr){
//     let res=[]
//     for(let j=0;j<arr.length;j++){
//     let s=arr[j]
//     let rev=''
//     for(let i=s.length-1;i>=0;i--){
//         let ch=s[i]
//         rev=rev+ch
//     }
//     if(rev===s){
//         res.push(s)
//     }
//     }
//     return res

// }
// let arr=["madam", "hello", "level", "world", "radar"]
// let ans=palindromstring(arr)
// console.log(ans);

//4.Filter Students
// function filterstudents(students){
//     let res=[]
//    for(let i=0;i<students.length;i++){
//      if(students[i].marks>70 && students[i].age<22){
//         res.push(students[i])
//     }

//    }
//    return res

// }
// students=[
//     {name:"Rahul", marks:85, age:21},
//     {name:"Priya", marks:65, age:20},
//     {name:"Arjun", marks:92, age:23},
//     {name:"Sneha", marks:78, age:19},
//     {name:"Kiran", marks:88, age:21}
// ]
// let ans=filterstudents(students)
// console.log(ans);

//5.Filter Products

// products=[
//     {name:"Laptop", price:50000, rating:4.5, stock:true},
//     {name:"Mouse", price:800, rating:4.2, stock:true},
//     {name:"Keyboard", price:1500, rating:3.8, stock:true},
//     {name:"Headphones", price:1800, rating:4.5, stock:false},
//     {name:"Speaker", price:1200, rating:4.3, stock:true}
// ]
// function filterproducts(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].price<2000 && arr[i].rating>4.0 &&arr[i].stock===true){
//             res.push(arr[i])
//         }
//     }
//     return res
// }
// let ans=filterproducts(products)
// console.log(ans);

//Using Filter()
//1.Filter Duplicate Elements
// let arr=[10, 20, 30, 20, 40, 10, 50, 30]
// function myfunc(cv,i){
//     let count=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===cv){
//             count++
//         }
//     }
//     if(count>1 && arr.indexOf(cv)===i){
//         return true
//     }
//     // return false
// }
// let ans=arr.filter(myfunc)
// console.log(ans);

//2.Filter Prime Numbers
// let arr=[2, 4, 5, 8, 11, 15, 17, 20, 23]
// function primenumbers(cv){
//     let count=0
//     for(let i=1;i<=cv;i++){
//         if(cv%i===0){
//             count++
//         }
//     }
//     if(count===2){
//         return true
//     }
// }
// let ans=arr.filter(primenumbers)
// console.log(ans);

//3.Filter Palindrome Strings
// let arr=["madam", "hello", "level", "world", "radar"]
// function palindrom(cv){
//     let s=cv
//     let rev=''
//     for(let i=s.length-1;i>=0;i--){
//         rev=rev+s[i]
//     }
//     if(rev===s){
//         return true
//     }
// }
// let ans=arr.filter(palindrom)
// console.log(ans);

//4.Filter Students
// let arr=[
//     {name:"Rahul", marks:85, age:21},
//     {name:"Priya", marks:65, age:20},
//     {name:"Arjun", marks:92, age:23},
//     {name:"Sneha", marks:78, age:19},
//     {name:"Kiran", marks:88, age:21}
// ]
// function callback(cv){
//     if(cv.marks>70 && cv.age<22){
//         return true
//     }
// }
// console.log(arr.filter(callback));

//5.Filter Products
// let arr=[
//     {name:"Laptop", price:50000, rating:4.5, stock:true},
//     {name:"Mouse", price:800, rating:4.2, stock:true},
//     {name:"Keyboard", price:1500, rating:3.8, stock:true},
//     {name:"Headphones", price:1800, rating:4.5, stock:false},
//     {name:"Speaker", price:1200, rating:4.3, stock:true}
// ]
// console.log(arr.filter(cv=>cv.price<2000 && cv.rating>4.0 && cv.stock===true));

