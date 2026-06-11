function find(n){
    let num=prompt("enter number");
    if(n==num){
        console.log("guess is correct")
        
    }
    else if(n<num){
        console.log("guess is tooo big");
        find(n);

    }
    else{
        console.log("guess is tooo small");
        find(n);

    }
}
let number=Math.floor(Math.random()*10)+1;
find(number)