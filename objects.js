//singleteon--when decalred as constructor 


//object literals
const mysym=Symbol("key1")

const user={//iske andar object ki saari information likhi jayegi
    name:"mayank",
    "user name":"bharadwajg2105",
    [mysym]:"keyyy",//upar symbol declare kar liya ab kahi bhi use karf saktte h 
    class:"btech",
    section :"O",
    email:"bhardwaj09041996@gmail.com"


}
/*
accesing data

1)console.log(user.name)   iss tareeke se string access hogi but name me space hai to nahi hogi
for example console.log(user.user name) --ye galat hai
2)console.log(user["user name"])
*/
//console.log(user.user name)
console.log(user["user name"])

//using symbols
//just declare it outside the object and use 
console.log(user[mysym])
//updation
user.email="mayank.bhardwaj_23@gla.com"
//freezing
//Object.freeze(user)
//printing object
//console.log(user)

//Functions in JS

user.greeting=function(){
    //define teh use of the fucntion
    console.log("HELLO FELLA")

}

console.log(user.greeting())


//using the value inside the object in function 

user.greet=function(){
    console.log(`hello ${this.name}how are you`)

}
console.log(user.greet())
