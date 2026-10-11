

//plain objects Task
//using square bracket notation
let restaurant={
    name:'spice garden',
    '@cuisine':'Indian',
     rating :4.5,
     'opening time':'10 AM'
     
}
  let x='name'
//   console.log(restaurant);
  console.log('name:',restaurant[x]);
  console.log('cuisine:',restaurant['@cuisine']);
  console.log('Rating:',restaurant['rating']);
  console.log('Opening time:',restaurant['opening time'])

  //updating
  restaurant['name']='spicy kitchen'
  restaurant['@cuisine']='USA'
  restaurant['rating']=4.1
  restaurant['opening time']='11 AM'
   
  console.log('After updation');
  
   console.log(restaurant);
   //Adding data
   restaurant['delivery available']='Yes'
   console.log(restaurant);

   //delete the data
   delete restaurant.rating;
   console.log(restaurant);


//1.nested object
let onlineshopping={
    orderid:1025,
    customer:{
        name:'Ravi',
        city:'Hyderabad',
        address:{
            street:'Ameerpet',
            pincode:500016
        }
    },
    product:{
        name:'Headphones',
        brand:'sony',
        price:2500

    }
}
//Reading
console.log(onlineshopping);
console.log('Order id:',onlineshopping.orderid);
console.log('customer name:',onlineshopping.customer.name);
console.log('Customer city:',onlineshopping.customer.city);
console.log('customer street:',onlineshopping.customer.address.street);
console.log('customer pincode:',onlineshopping.customer.address.pincode);
console.log('product name:',onlineshopping.product.name);
console.log('brand :',onlineshopping.product.brand);
console.log('price:',onlineshopping.product.price);

//updating

onlineshopping.customer.name='Ramu'
onlineshopping.customer.address.street='Kukatpally'
onlineshopping.product.price=3000
console.log('After updation');

console.log(onlineshopping);

//adding 

onlineshopping.product.discount='20%'
console.log(onlineshopping);
//deleting

delete onlineshopping.customer.address.pincode
console.log(onlineshopping);

//Example-2
//hospital
let hospital={
    hospitalname:'city care hospital',
    location:{
        city:'hyderabad',
        state:'Telangana'

    },
    doctor:{
        name:'DR.Anil',
        specilization:'cardilogist',
        experience:'12years'
    },
    appointment:{
        date:'15 October',
        time:'10 AM',
        status:'Confirmed'
    }
}
console.log(hospital);
console.log('Hospital name:',hospital.hospitalname);
console.log('city:',hospital.location.city);
console.log('state:',hospital.location.state);
console.log('doctor name:',hospital.doctor.name);
console.log('specializatiopn:',hospital.doctor.specilization);
console.log('experience:',hospital.doctor.experience);
console.log('appointment date:',hospital.appointment.date);
console.log('appointment time:',hospital.appointment.time);
console.log('appointment status:',hospital.appointment.status);

//after updating
hospital.location.city='Warangal'
hospital.doctor.experience='10 years'
hospital.appointment.time='12 PM'
console.log(hospital);

//adding
hospital.location.country='India';
hospital.doctor.gender='male';
console.log(hospital);

//deleting
delete hospital.appointment.status
console.log(hospital);











  
  
  
  


















