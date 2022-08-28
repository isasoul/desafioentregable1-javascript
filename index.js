const NUMERO_GASTOS = prompt ("ingrese la cantidad de gastos que desea sumar")
const SUELDO = prompt("ingrese su sueldo: ")

let sumatoria = 0
let restante_sueldo = 0
for (let index = 1; index <= NUMERO_GASTOS; index ++){
    const GASTO = prompt(" ingrese el gasto: "+ index)
    console.log ( NUMERO_GASTOS)
    sumatoria = sumatoria + parseFloat(GASTO)
    console.log (sumatoria)
}
alert("el total de gastos es: " + sumatoria)
restante_sueldo =  parseFloat(SUELDO) - sumatoria   
alert("te queda para el resto del mes: "+ restante_sueldo)