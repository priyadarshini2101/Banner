function multiply(param1){
    return function(param2){
        return param1*param2;
    }
}





let a = multiply(5)(4)
console.log(a)

// let arr = [1,2,3,4,5]
// let x = 3
// function search(arr,x){
//     let mid = (arr.length)/2
//     if(arr[mid]===x){
//         console.log('mid element found')
//     }
//     else if(arr[mid]<=x){
//     mid=mid-1;
    
//     }
//     else if(arr[mid]>=x){
//         mid=mid+1;

// }
// }


// console.log(a)

// var obj ={
//     name:'priya',
//     age:30,
//     getage:function(){
//         return this.name + ''+ this.age
//     }
// }

// let k = obj.getage()
// console.log(k)



// class person {
//     constructor(name, age) {

//         this.name = name,
//             this.age = age
//     }
// }

// function first(){
//     console.log('first')
// }

// function second(){
//     console.log('first')
// }

// var str = 'madam'
// var str1 = ''

// for(let i=str.length-1;i>=0;i--){
//     str1+= str[i]
// }

// console.log(str1)

// if(str1 === str){
//     console.log('palindrome')
// }
// else{
//     console.log('not palindrome')
// }

// console.log(second())
// console.log(first())
// var a1 = [10,20,40,30]

// var k = a1

// a1 = [];
// console.log(a1)
// console.log(k)

// var n = [1,2,3]
// console.log(Array.isArray(n))

// var p1 = new person('priya',30)
// var p2 = new person('pradeep',30)

// console.log(p1)
// console.log(p2)

// var firstWord = "Mary";
// var secondWord = "Army";

// isAnagram(firstWord, secondWord); // true


// function isAnagram(first, second) {
//   // For case insensitivity, change both words to lowercase.
//   var a = first.toLowerCase();
//   var b = second.toLowerCase();

  

//   return a === b;
// }