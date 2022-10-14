//================= HAMSTER ======================
class Hamster { 
    constructor(owner,name,price=15){
        this.owner ='';
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
console.log(animal.getPrice())

//========================== PERSON =========================
class Person extends Hamster{
    
    constructor(name,age=0,height=0,weight=0,mood=0,hamsters,bankAccount=0){
        super()
        
        this.name = name;
        this.age = age
        this.height =height
        this.weight = weight;
        this.mood = mood
        this.hamsters = []
        this.bankAccount = bankAccount
    }
    getName(){
        console.log(this.name)
    }
    getAge(){
        console.log(this.age)
    }
    getWeight(){
        console.log(this.weight)
    }
    greet(){
        console.log(`hello ${this.name}`)
    }
    eat(eat){
        eat = [this.weight++ , this.mood++]
     return eat

    }
    excercise(){
        return this.mood--
    }
    ageUp(age){
        age = [this.age++ ,
              this.height++,
              this.weight++,
              this.mood--,
              this.bankAccount+=10]
        return age
    }
    buyHamster(hamster){
        this.hamsters.push(hamster)
        hamster = [this.mood+=10 
        , (this.bankAccount- super.getPrice())]
         return hamster

    }
}
const kathy = new Person('kathy',34,160,134,5,'',500)
console.log(kathy)
kathy.greet()
kathy.getWeight()
console.log(kathy.ageUp())
console.log(kathy.ageUp())
console.log(kathy.ageUp())
console.log(kathy.excercise())
console.log(kathy.excercise())
console.log(kathy.eat())
console.log(kathy.eat())
console.log(kathy.buyHamster())
console.log(kathy.buyHamster())
//console.log(kathy.getPrice())
//console.log(kathy.wheelRun)