window.alert('Bem vindo a calculadora de nota')

var nome = window.prompt('Informe seu nome, por favor:')
var msg = 'Olá! Seja Bem Vindo '
window.alert(`${msg} ${nome}`)

var msgRetorno=''

function calcular() {
    var nota1 = window.document.querySelector('#n2')
    var m1 = Number(nota1.value)
    var nota2 = window.document.querySelector('#n3')
    var m2 = Number(nota2.value)
    var resultado = (m1 + (m2*2))/3
    resultado = resultado.toFixed(2)
    checaNota(resultado)  
    cal.innerHTML= `Seu resultado é ${resultado}, então você está ${msgRetorno}`
    
}

function checaNota(resultado) {
    
    if( resultado >= 5){
        msgRetorno="Aprovado"
    } else if (resultado >=3 && resultado <= 4.99){
       msgRetorno= "EXAME"
    } else {
       msgRetorno= 'Reprovado'
    }

}

function calcularNece() {
    var nota1= window.document.querySelector('#n1')
    var m1= Number(nota1.value)
    var resultado =  ((m1-15)/2)
    valorPositivo = Math.abs(resultado)
    valorPositivo = valorPositivo.toFixed(2)
    resp.innerHTML= `Você precisa ${valorPositivo}`

}



