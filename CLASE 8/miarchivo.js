//DECLARACION DE UNA CLASE
class Moneda{
    constructor(Denominacion,ValorDolares){
        this.Denominacion=Denominacion
        this.ValorDolares=ValorDolares
    }
}

//FUNCION PARA CONVERTIR EL VALOR INGRESADO A DOLARES
function Convertir(ValorIngresado,ValorDolares){
    return ValorIngresado*ValorDolares
}

let monedasALL = []
//MONEDAS DISPONIBLES
const moneda1= new Moneda("Pesos Mexicanos",20)
const moneda2= new Moneda("Pesos Argentinos",103)
const moneda3= new Moneda("Yenes",115)
const moneda4= new Moneda("Pesos Uruguayos",44)


monedasALL.push(moneda1)
monedasALL.push(moneda2)
monedasALL.push(moneda3)
monedasALL.push(moneda4)

const monedaMEX=(monedasALL.find(monFind=> monFind.ValorDolares===20))
const monedaARG=(monedasALL.find(monFind=> monFind.ValorDolares===103))
const monedaYEN=(monedasALL.find(monFind=> monFind.ValorDolares===115))
const monedaURU=(monedasALL.find(monFind=> monFind.ValorDolares===44))

//RECOGER EL VALOR DEL USUARIO

function capturarValor(){
   let id=document.getElementById("id1").value
   let resultado = Convertir(id,monedaMEX.ValorDolares)
   
   const h2 = document.createElement("h2")
   h2.innerHTML = `El resultado es ${resultado} ${moneda1.Denominacion}`
   document.body.appendChild(h2)
   
   
}


