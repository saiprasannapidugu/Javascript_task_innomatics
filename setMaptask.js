

//Remove duplicates from array without using any 
// Predefined methods or Set
// let arr=[10,20,30,20,30]
// let arr2=[]
// for(let i=0;i<=arr.length-1;i++){
//     let flag=false
//     for(let j=0;j<=arr2.length-1;j++){
//         if(arr[i]===arr[j]){
//            flag=true;
//            break;
//         }
//     }
//     if(flag===false){
//      arr2[arr2.length]=arr[i]
    
// }
// }
// console.log(arr2);

//Iterate Map ->for loop ,For of loop.
//for loop
// let mymap=new Map([
//     ['name','prasanna'],
//     ['age',21],
//     ['course','python']
// ])
// console.log(mymap);
// // converting map to array
// let arr=[...mymap]
// for(let i=0;i<=arr.length-1;i++){
//     console.log(arr[i]);
// }

//for of
//directly iterating map

// let mymap=new Map([
//     ['name','prasanna'],
//     ['age',21],
//     ['course','python']
// ])

// for(let [k,v] of mymap){
//     console.log(`${k} : ${v}`);
// }

//check whether keys() and Values() works with Map & Set or Not?
//iterating map by using keys()
// let mymap=new Map([
//     ['name','prasanna'],
//     ['age',21],
//     ['course','python']
// ])
// let arrkeys=mymap.keys()
// for(let key of arrkeys){
//     console.log(`${key} : ${mymap.get(key)}`);
// }


// let myvalues=mymap.values()
// console.log(myvalues);

//in set key() and values() returns same values
let myset=new Set([10,20,30,20,10])
console.log(myset.keys());
console.log(myset.values());
