function printOdds(){
    for (var i = 1; i < 21; i++){
        if (i % 2 !== 0){
            console.log(i);
        }
    }
}

function decreasingMult3(){
    for (var i = 100; i >= 0; i--){
        if(i % 3 === 0){
            console.log(i);
        }
    }
}

function printSequence(){
    for (var i = 4; i > -4; i -= 1.5){
        console.log(i);
    }
}

function sigma(){
    var sum = 0
    for (var i = 1; i < 101; i++){
        sum+=i;
    }
    console.log(sum);
}

function factorial(){
    var product = 1;
    for (var i = 1; i < 13; i++){
        product *= i;
    }
    console.log(product);
}

printOdds();
decreasingMult3();
printSequence();
sigma();
factorial();