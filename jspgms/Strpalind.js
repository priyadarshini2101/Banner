
//String palindrome
var s1 = "Madam"

var k = ""

for(let i=s1.length-1;i>=0;i--){
     k+= s1[i]
     
}
console.log(k)
console.log(s1)

if(k.toLowerCase() === s1.toLowerCase()){
    console.log('palindrome')
}
else{
    console.log('Not a palindrome')
}

//string comparision

// var s1 ='madam'
// var s2 = 'priya'

// if(s1 === s2){
//     console.log('String are equal')
// }
// else{
//     console.log('Not equal')
// }

