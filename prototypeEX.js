

//prototypal inheritance task
//Example-1
let student={
    sname:'prasanna',
    age:22
}
let activites={
    calculatemarks:()=>{
        subject1=98,
        subject2=87
        total=subject1+subject2
        return `total marks:${total}`
    }
}
let Hobbies={
    Readingtime:()=>{
        booksread=3
        hoursperbook=2
        totalhours=booksread*hoursperbook
        return `total hours: ${totalhours}`
    },
    favoriteBook: 'Wings of Fire'


}

console.log(student);
student.__proto__ = activites
activites.__proto__ =Hobbies
console.log(student);
console.log(student.Readingtime());
console.log(student.calculatemarks());
console.log(activites.Readingtime());
console.log('student favorite book:',student.favoriteBook);

//Example-2
let Employee={
    ename:'Ram',
    e_id:1234
}
let salary={
    emsalary:()=>{
        monthlysalary=60000
        anualsalary=monthlysalary*12
        console.log('monthly salary:',monthlysalary);
        console.log('annualsalary:',anualsalary);
    }
}
let Bonus={
    calaculatebonus:()=>{
        bousperc='10%'
        bonusamount=6000
        console.log('Bonus percentage:',bousperc);
        console.log('bonus amount:',bonusamount);
    }
}
console.log(Employee);
Employee.__proto__ =salary
salary.__proto__=Bonus
Employee.emsalary()

Employee.calaculatebonus()

//Example-3
let Hospital={
    hospitalname:'city care',
    location:'hyderabad',
    displayHospital:()=>{
        hospital_code=1345,
        totalbeds=120
        console.log('hospital code',hospital_code);
        console.log('total beds:',totalbeds);
    }
}
let Doctor={
    doctor_name:'arun',
    specialization:'Cardiology',
    checkavailability:()=>{
        totalslots=10
        bookedslots=6
        remainingslots=totalslots-bookedslots
        console.log('Total slots:',totalslots);
        console.log('Booked slots:',bookedslots);
        console.log('remaining slots:',remainingslots);
    }
}
let patient={
    patinetname:'ram',
    age:22,
    calculateFee:()=>{
        consultationfee=1000
        medicalfee=2000
        totalfee=consultationfee+medicalfee
        console.log('consultation fee:',consultationfee);
        console.log('medical fee:',medicalfee);
        console.log('total fee:',totalfee);

    }

}
console.log(Hospital);
Hospital.__proto__ = Doctor
Doctor.__proto__ = patient
Hospital.calculateFee()
Hospital.checkavailability()
console.log('Age of patient:',Hospital.age);

