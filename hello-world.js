function greet(){
    console.log("Hello World!");
}

function greetTime(){
    setTimeout(function(){
        console.log("Hello world! Prepare to be taken over!");
    }, 10000);
}

greet();
greetTime();