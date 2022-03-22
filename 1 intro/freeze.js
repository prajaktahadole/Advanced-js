//2. Explain the difference between Object.freeze() and const. Write relevant code and add comments.


// - 1 - object.freeze() -

//  object.freeze(obj) particularly freezes the obj and its key value pairs so that no other developer can make some alteration in data and it also helps in preventing from overwriting of key name or obj name.
// by adding this inbuilt function that object will be converting in the strict mode and no one can alter without freezing it.
//

const abc = {
    name:"x",
    class:3,
    roll:166,
}
 Object.freeze(abc); // if i remove the strict mode it will change the abc.name's value

    var one = abc.name = "priya";

    // console.log(one);

    console.log(ac); // it will not give priya because abc functon has been freezed(strict mode)


//- 2  - constant -
// const is used to prevent reassigning its value
// well one can make changes in obj keys if used for a object.
// const holding any value is immutable except arrays(pushing elements) and objects(keys).

const number = 21;

// var number = 91; // reassigning or modifying the number will give the already declared.

function changeNum(input){
    var result = this.number = input;

    //console.log(number); // if we give to print the number inside any function it will return the constant number.

    return result;
   
}

console.log(number);

var x = changeNum(91)
console.log(x)