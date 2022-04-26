
let promesa = new Promise((resolve)=>{
setTimeout(()=>{

},2000)

 resolve(true)
})

promesa.then((resultado)=>{
console.log("Funciona")
}
)