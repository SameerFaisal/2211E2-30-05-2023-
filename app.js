// class Person{
//     name
//     age
//     CNIC
//     phone
//     constructor(name,age,CNIC,phone){
//         this.name=name
//         this.age=age
//         this.CNIC=CNIC
//         this.phone=phone
//     }
//         canWalk(){
//         console.log(this.name+" aged: "+this.age+" Having CNIC: "+this.CNIC+" Can walk")
//     }
//     introduce(){
//         console.log(this.name+" aged: "+this.age+" Having CNIC: "+this.CNIC+" Phone: "+this.phone)
//     }
// }

// const p1=new Person()
// p1.name="Arham"
// p1.age=20
// p1.CNIC="1234567890"
// p1.canWalk()
// const p2=new Person()
// p2.name="Areesh"
// p2.age=25
// p2.CNIC="0987654321"
// p2.canWalk()
// const p3=new Person("Arham",20,12345,2984758)
// p3.introduce()
// const p1=new Person("Areesh",23,734698,9457092875)
// p1.introduce()
// const p2=new Person("Bilal",30,985698,9872657826)
// p2.introduce()

// class Vehicle{
//     name
//     make
//     color
//     number
//     constructor(name,make,color,number){
//         this.name=name  
//         this.make=make
//         this.color=color
//         this.number=number
//     }

//     display(){
//         console.log(this.name+" is a "+this.make+" vehicle with color: "+this.color+" and number: "+this.number)
//     }
// }

// const v1=new Vehicle("Mehran","Suzuki","Grey","AAA-123")
// v1.display()
// const v2=new Vehicle("City","Honda","White","BBB-321")
// v2.display()
// class Student{
//     name
//     roll
//     batch
//     schoolName
//     constructor(name,roll,batch,schoolName){
//         this.name=name
//         this.roll=roll
//         this.batch=batch
//         this.schoolName=schoolName
//     }
//     display(){
//         console.log(this.name+" is a student of "+this.schoolName+" and roll: "+this.roll+" and batch: "+this.batch)
//     }
// }

// const s1=new Student("Ateeb",129,"2211E2","Aptech Learning")
// s1.display()
// const s2=new Student("Mehak",130,"2212C2","Aptech Learning")
// s2.display()

// class Vehicle{
    
// }

// class Car extends Vehicle{}
// class Bike extends Vehicle{}
// class Bus extends Vehicle{
// }

// class ElectricCar extends Car{}

//01-06-2023

class Vehicle{
    name
    brand
    number
    color
    model
    constructor(name,brand,number,color,model){
        this.name=name
        this.brand=brand
        this.number=number
        this.color=color
        this.model=model
    }
    displayDetails(){
        console.log(`Vehicle name is ${this.name} made by ${this.brand} having number ${this.number} colored ${this.color} and model is ${this.model}`)
    }
}

class Car extends Vehicle{
    transmission
    constructor(name,brand,number,color,model,transmission){
        super(name,brand,number,color,model)
        this.transmission=transmission

}
displayDetails(){
    super.displayDetails()
    console.log(`Transmission is ${this.transmission}`)
}
}
const c1=new Car("Corolla","toyota","AAB-222","Black",2022,"Auto")
c1.displayDetails()






