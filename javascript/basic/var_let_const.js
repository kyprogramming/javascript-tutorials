// VAR
// var global =  10;
// function example(){
//     var local;
//      local = 20;
//      local = 30;
//      local = 40;

//     if(true) {
//         var block = 30;
//     }
//     console.log('local', local);
// }
// console.log("global", window.global);
// example();

// LET
// let script =  10;
// function example(){
//     let local;
//     if(true) {
//         let block = 30;
//     }
//     console.log('block', block);
// }
// console.log("global", window.script);
// example();


// CONST
const script =  10;
function example(){
    
    if(true) {
        const block = 30;
    }
    console.log("local", local);
    const local  = 20;
}
console.log("global", script);
example();



