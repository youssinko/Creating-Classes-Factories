//================= HAMSTER ======================
class Hamster { 
    constructor(owner,name,price=15){
        this.owner =owner;
        this.name = name;
        this.price = price;
    }
    wheelRun(){
        console.log("squeak squeak");
    }
    eatFood(){
    console.log("nibble nibble");
    }
    getPrice(){
        return this.price
    }

}
const animal = new Hamster('Rania','yousef')
//animal.wheelRun()
//console.log(animal.getPrice())

// //========================== PERSON =========================
// class Person{
    
//     constructor(name,age=0,height=0,weight=0,mood=0,hamsters=[],bankAccount){
        
        
//         this.name = name;
//         this.age = age
//         this.height = height
//         this.weight = weight
//         this.mood = mood
//         this.hamsters = []
//         this.bankAccount = bankAccount
//     }
//     getName(){
//         console.log(this.name)
//     }
//     getAge(){
//         console.log(this.age)
//     }
//     getWeight(){
//         console.log(this.weight)
//     }
//     greet(){
//         console.log(`hello ${this.name}`)
//     }
//     eat(){
//        console.log(this.weight++) 
//        console.log(this.mood++)
//     }
//     excercise(){
//         return this.mood--
//     }
//     ageUp(){
//         console.log(this.age++) 
//         console.log(this.height++)
//         console.log (this.weight++)
//         console.log (this.mood--)
//         console.log (this.bankAccount+=10)
             
//     }
        
    
//     buyHamster(hamsterPet){
//         this.hamsters.push(hamsterPet)
//         this.mood+=10 
//         this.bankAccount = this.bankAccount - hamsterPet.getPrice()
         
//      }
     
//         }
// // let hamsterPet = Hamster
// const kathy = new Person('kathy',34,160,134,'','',500)

// kathy.buyHamster(animal)        
// // console.log(kathy)
// // kathy.greet()
//  //kathy.getWeight()
// // kathy.ageUp()
// // console.log(kathy.ageUp())
// // console.log(kathy.excercise())
// // kathy.eat()
// //console.log(kathy.eat())
// // console.log(kathy.wheelRun)
//======================= .Create a Story with your Person class =========
class Person1{
    
    constructor(name,age=0,height=0,weight=0,mood=0,hamsters,bankAccount=0,eat=3,excercise=1){
        
        
        this.name = name;
        this.age = age
        this.height =height
        this.weight = weight;
        this.mood = mood
        this.hamsters = []
        this.bankAccount = bankAccount
        this.eat = eat;
        this.excercise = excercise

    }
    getName1(){
        console.log(this.name)
    }
    getAge1(){
        console.log(this.age)
    }
    getWeight1(){
        console.log(this.weight)
    }
    greet1(){
        console.log(`hello ${this.name}`)
    }
    eating1(overEating){
       if(this.eat < 5){
        console.log(`${this.name}, You need to eat ${this.eat * 5} times a day`)
        
       }else{ 
        
        console.log(this.weight++)
       }

    }
    exercising1(){
        if(this.weight > 43){ 
        console.log(`${this.name}, You need to exercise ${this.excercise * 5} times a day`)
        }
        else if(this.weight === 40)
        {
            console.log(`${this.name}, You have achieved the ideal weight.Now, you can excercise ${this.excercise + 1} times a day and eat ${this.eat + 1} times a day`)
        }
    }

    ageUp1(){
        console.log(this.age+=12)
       
    }
    buyHamster1(gus){
        this.hamsters.push(gus)
        
         console.log(gus)
    }
   
}
const timmy = new Person1('Timmy',5 ,43,40,0,'',0,1,1)
const newHamster = new Hamster('Timmy','Gus')

console.log(timmy)
timmy.ageUp1()
timmy.eating1()
timmy.exercising1()
timmy.buyHamster1(newHamster)
