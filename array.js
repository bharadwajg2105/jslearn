const arr=[1,2,3,4,5,6,"mayank",'$']//any data can be added
//shallow copy
// the changes smade inn  copies are also in original arrays
//deep copy 
//changes copy tak hi rahenge
console.log(arr)//printing aarray
console.log(arr[3])//printing array 3rd element
arr.push(8)//adding the element at the end and tge element is written inside the bracket
arr.pop//delete the last element 
arr.unshift(9)//adding element at the start of array
arr.shift//first element ko remove karega
console.log(arr.includes(9))//batayega ke ye element hai ke nahi
console.log(arr.indexOf(9))//batayegwaa ke element kis jagah par hai nahi hai to -1 dedega
//splice aur slice me antar yahi h k  splice me range include hogi but 
//slice me nahi