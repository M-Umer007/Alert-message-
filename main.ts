// let b=1

// function addName(a:string="Hello",d:string="World") {
//      while (b!=7) {
//           console.log(a+d,+1)
//           b++
//      } 
// }
// addName()
// console.log(b)


const INP = document.getElementById("Owl")as HTMLInputElement

function greet(input: string):string {
    return "Hello" + input
}
if(INP){
    INP.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            console.log(greet(INP.value));
            alert(greet(INP.value)); 
        }
    })};