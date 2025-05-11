//if want to join 2 arr
const arr1=[1,2,3,4,5,6,]
const arr2=[7,8,9,5,4]
const complete=arr1.concat(arr2)//arr1 me arr2 judegi but ise use karne ke liye alag se const declare karna padega

console.log(...arr1,...arr2)//concatenate ka tareeka 
console.log(complete)
//let us suppose of an array where we ahave multiple sub arays inside it  and if we wan tto merge all the arrays inside it ,
const newwf=[1,2,3,4,[5,6,[7,8]],9,10,11,0o2]
console.log(newwf)//simply print kargea
const flatarr=newwf.flat(Infinity)//merge karke karega
console.log(flatarr)

//converting string into array
const x="mayank"
console.log(Array.from(x))

//converting elements into array
const y="mayank"
const z="mayank"
const yz="mayank"
const zy="mayank"
console.log(Array.of(y,z,yz,zy))



