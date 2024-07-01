// let b=1
// function addName(a:string="Hello",d:string="World") {
//      while (b!=7) {
//           console.log(a+d,+1)
//           b++
//      } 
// }
// addName()
// console.log(b)
var INP = document.getElementById("Owl");
function greet(input) {
    return "Hello" + input;
}
if (INP) {
    INP.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            console.log(greet(INP.value));
            alert(greet(INP.value));
        }
    });
}
;
