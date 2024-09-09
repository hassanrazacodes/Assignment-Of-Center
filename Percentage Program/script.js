//Percentage Program Assignment

let grade = prompt("Enter a num to check your Grade")

if(grade > 100 || grade < 0) {
    console.log("You Entered A Wrong Number")
}

 else if(grade >= 80 ) {
    console.log("Your Grade is A")
}

else if(grade >= 70) {
    console.log("Your Grade is B")
}

else if(grade >= 60 ) {
    console.log("Your Grade is C")
}

else if(grade < 59 ) {
    console.log("Your Grade is Fail")
}