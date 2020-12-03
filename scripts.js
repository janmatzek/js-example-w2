// last part of the lecture:
// general syntax:
//      $(selector).action()

$('.second').prepend('<strong>Hello, </strong>');


$('button').click(() => {
    $('.first').toggleClass('hidden')
});




// from first part of the lecture to the third
console.log("This is SPAR... JavaScript!");
let colors = ["orange", "blue", "green", "purple"]
post = {
    title: "My post",
    description: "My first post, awesome!",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

console.log(colors);
console.log(post);

// condition
let age = 22;
if (age >= 18) {
    console.log("You're an adult")
} else {
    console.log("You're a kid!")
}

//              the code will iterate until the condition is true
for (let i = 0; i < 10; i++) {
    console.log(i)
}

let posts = [{
    title: "First post",
    likeCount: 222
}, {
    title: "Second post",
    likeCount: 222
}];

console.log(colors)

colors.forEach(item => {
   console.log(item) 
})

// function f(x)
let myFunction = x => {
    console.log(x);
}

myFunction(colors)

let greeter = name => {
    console.log(`Hello, ${name}`)
}
greeter("Adam")
greeter("Peter")

console.log("This is the end of our code")

// you make a comment by pressing cmd + shift + / (ú)