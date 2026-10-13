function display(std){
    console.log(std);
    console.log('employee name:',std.e_name);
    console.log('employee district:',std.e_address.dist);
    console.log('employee adress pincode:',std.e_address.street.pincode);
    //updating
    std.e_name='shravya'
    std.e_address.dist='rangareddy'
    std.e_address.street.h_no='41-2'
    console.log('======after updation======');
    console.log(std);
    //deleting
    delete std.e_salary;
    delete std.e_address.state;
    delete std.e_address.street.pincode
    console.log('=======after deletion=======');
    console.log(std);
}
display({
    e_name:'prasanna',
    e_salary:60000,
    e_address:{
        state:'telangana',
        dist:'warangal',
        street:{
            h_no:'3-3',
            pincode:'506331'
        }
    }
})