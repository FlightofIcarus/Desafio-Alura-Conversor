var real = prompt("Digite o valor em real que deseja converter")
var dolar = 5.11
var euro = 5.550
var ethereum = 7901.39
var valorFinal = null

function escolherMoeda() {
   
    var radio = document.getElementsByName("seletor")
    
    for (i = 0; i < radio.length; i++) {
       
        if(radio[i].checked)
       
        switch (radio[i].value) {
           
                 case "dolar":
                valorFinal = real * dolar
                valorFinal = valorFinal.toFixed(2)
                 document.getElementById("resultado").innerHTML = "$"+valorFinal
               
                break;
           
                case "euro":
                    valorFinal = real * euro
                    valorFinal = valorFinal.toFixed(2)
                document.getElementById("resultado").innerHTML = "$"+valorFinal
               
                break
           
                case "ethereum":
                    valorFinal = real * ethereum
                    valorFinal = valorFinal.toFixed(2)
                document.getElementById("resultado").innerHTML = "$"+valorFinal
           
                default:
               
                break;
           }
    }
   
 }

function atualizar() {
    
real = prompt("Digite o valor em real que deseja converter")
}
