//default parameter
function message(text="default parameter"){
    console.log(text);
}
message();//print default parameter
message("my name is khan");


//rest parameter

function sum(x,y,...z){
    console.log(`x= ${x},y= ${y},z= ${z}`)
}
sum(10,20,30,40,50);
//...z is rest parameter
// rest parameter used only at the end 