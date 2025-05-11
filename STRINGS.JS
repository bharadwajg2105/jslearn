//
// string wala lecture
const value="mayank "
const m="bhardwaj"
console.log(value+m)//outdated format
//here we use is ${} within `` not''
console.log(`my first name is ${value}an dmty last name is ${m}`)
//declaring a string


const gameName= new String('mayank')
/*console.log(gameName.toUpperCase())//convert karne ke liye
console.log(gameName)
console.log(gameName.length)//stringlength
console.log(gameName.charAt(2))//letetr at position 2

*/

const neww=gameName.substring(4,9)
console.log(neww)  


const newest=gameName.slice(-3,4)
console.log(newest)

//slice aur substring me sirf yahi antar h k slicem -ve use kar skte h
//replace
const x="mayank"
console.log(x.replace('y','a'))
//we can split any string into different strimgs after a common word 
//example
console.log(gameName.split('y'))
