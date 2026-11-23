//1.Even Number Squares
// let arr=[1, 2, 3, 4, 5, 6, 7, 8]
// let res=arr.filter(cv=>cv%2===0).map(n=>n**2)
// console.log(res);

//2.Transform Names
// let arr=["Ram", "Rahul", "Priya", "John", "Krishna"]
// let res=arr.map(cv=>cv.toUpperCase()).filter(s=>s.length>5)
// console.log(res);

//3.Student Marks Processing
// let arr=[
//     {name:"Rahul",marks:85},
//      {name:"Priya",marks:45},
//       {name:"Arjun",marks:75}, 
//       {name:"Sneha",marks:55}, 
//       {name:"Kiran",marks:90}
// ]
// let res=arr.filter(cv=>cv.marks>60).map(n=>n.name)
// console.log(res);

//4.Product Discount
// let arr=[
//     {name:"Mouse",price:800},
//      {name:"Keyboard",price:1500},
//       {name:"Monitor",price:12000},
//        {name:"Speaker",price:900}
// ]
// arr.map(cv=>({name:cv.name,price:cv.price-cv.price*(10/100)}))
// .filter(p=>p.price>1000).forEach(item=>console.log(item.name ,'-' ,'₹'+item.price))

//5.Employee Salary
// let arr=[
//     {name:"Rahul",salary:30000,experience:1},
//      {name:"Priya",salary:40000,experience:3},
//       {name:"Arjun",salary:50000,experience:5},
//        {name:"Sneha",salary:35000,experience:2}
// ]
// arr.filter(cv=>cv.experience>2).map(n=>({name:n.name,salary:n.salary+n.salary*(10/100)})).forEach(item=>console.log(item.name ,'-','₹',item.salary))

//6. Calculate Total Marks
// let arr=[85, 45, 75, 55, 90]
// let res=arr.filter(cv=>cv>60).reduce((ac,cv)=>{
//     ac=ac+cv
//     return ac
// },0)
// console.log(res);

//7.Calculate Total Cart Value
// let arr=[50000, 800, 1500]
// let res=arr.map(cv=>cv-cv*(10/100)).reduce((ac,cv)=>{
//     ac=ac+cv
//     return ac
// },0)
// console.log(res);

//8.Count Products by Category*
// let arr=[
//     {name:"Laptop", category:"Electronics", stock:true},
//     {name:"Mouse", category:"Electronics", stock:true},
//     {name:"Shirt", category:"Fashion", stock:false},
//     {name:"Shoes", category:"Fashion", stock:true},
//     {name:"Mobile", category:"Electronics", stock:false}
// ]
// let res=arr.filter(cv=>{category:cv.category
//     return cv.stock===true})
// .reduce((ac,cv)=>{
//     if(cv.category in ac){
//         ac[cv.category]++
//     }
//     else{
//         ac[cv.category]=1
//     }
//     return ac
    
// },{})
// console.log(res);

