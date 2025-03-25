let answer ;
let booleanAnswer = false;
while(booleanAnswer === false ){
    answer = prompt( " What is the “official” name of JavaScript? ");

    if (answer === "ECMAScript"){
        alert("Right!");
        booleanAnswer = true;
    }
    else{
        alert("Didn’t know? ECMAScript!");
    }
}