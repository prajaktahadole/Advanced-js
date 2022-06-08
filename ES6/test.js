//normal function

function test () {
    console.log("hello world")
}

let test = function () {
    console.log("hello world")
}

//arrow function 
let test = ()=> {
    console.log("hello world")
}

//replacing  function() to ()=>


///using arrow function callback function

let arr = [1, 2, 3, 4]

arr.forEach(function(el){
    console.log("el", el)
})
//is the same as

let arr1 = [1, 2, 3, 4]

arr1.forEach((el) =>{
    console.log("el", el)
})

