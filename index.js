const interesFijo = 1.85

function calcularcuotaMensual(monto,meses){
console.log("Detalle de las cuotas: ")
let valorCuota= (monto * interesFijo) /24
for ( let i= 1; i<= meses; i++ ) {
    console.log("Cuota " + i + "$" + valorCuota.toFixed(2))
}

console.log("El total de dinero a devolver es: $" + parseInt(monto)*interesFijo)
}

function simularPrestamo(){
    let dineroAsolicitar = prompt("Ingresa el monto que necesitas: ")
    let totalCuotas = prompt(" Ingresa las cuotas en las que devolveras el dinero: (Hasta 24)")

    if (dineroAsolicitar != `` && dineroAsolicitar != null ) {
        if (totalCuotas >= 6 && totalCuotas <= 24) {
            calcularcuotaMensual(dineroAsolicitar, totalCuotas)
        } else {
            console.warn("La cantidad de meses minima es 6 y maxima 24")
        }
    } else {
        console.warn("Debes ingresar un monto valido.")
    }
}

