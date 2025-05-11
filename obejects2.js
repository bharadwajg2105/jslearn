 //const fbuser=new Object()//singleton object
 const fbuserr={}//non singleton 
 fbuserr.name="mayank",
 fbuserr.username="bharadwajg2105",
 fbuserr.class="btech",
 fbuserr.section ="O",
 fbuserr.email="bhardwaj09041996@gmail.com"


 const auser={
naame:{
    fname:"mayank",
    lname:"bhardwaj"
}
 }
 //console.log(auser.naame)


 //merging objects

 const obj={1:"2",2 :"2"}
 const obj1={1:"2",2 :"2"}
 const obj2={1:"2",2 :"2"}
 //const obj3=Object.assign({},obj,obj1,obj2)


 const obj3={...obj, ...obj1, ...obj2}
 console.log(obj3)
//to print values of keys and key name 

console.log(Object.keys(auser))
console.log(Object.values(auser))