function process(name : string , callback: () => void){
    console.log("Main function");
    callback();
}
process("yashpal", () =>{
    console.log("Great work");
})

let callback1: () => string ;
callback1 = () =>{
    return "callback1";
}
function process1(callback1: () => string){
    console.log("yashpal");
}

function basic1( i :  number , fun: ()=> number){
    console.log(fun);
}

basic1(10, ()=>{return 20;});

function f1(name :string , callback: ()=>string){
    console.log(name + callback());
}

f1("yashpal", callback1);

function delayed(name : string , callback: () => void){
   
    setTimeout(()=>{
        console.log("just wait");
    }, 4000);
    console.log(name);
    console.log(callback());
} 
delayed("yashpal", () => "rout");

function getUser(callback: () => void): void{
    console.log("User fetched");
    callback();
}
function getUserData(callback: () => void): void{
    console.log("Received data");
    callback();
}
function getUserResult(callback: () => void): void{
    console.log("User result is here now")
    callback();
}
getUser(()=>{
    getUserData(()=>{
        getUserResult(()=>{
            console.log("nested callback function")
        });
    })
});
