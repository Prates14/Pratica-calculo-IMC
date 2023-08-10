function Calcular() {
    const form = document.querySelector('.form')

    form.onsubmit = function(evento) { //previnir atualização do formulario
        evento.preventDefault()
    }
    const dadoPeso = document.getElementById('input-valor-1').value //valor do peso
    const dadoAlt = document.getElementById('input-valor-2').value //valor da altura
    let conclusao = document.querySelector('.conclusao') //texto-resultado do formulario

    //Calcular valor do IMC
    let peso = Number(dadoPeso)
    let altura = Number(dadoAlt)
    let imc = peso / (altura * altura) //valor do imc

    if(imc !== Number){ //aviso ao usuário de preenchimento incorreto do formulário
        conclusao.innerHTML = 'Por favor, preencher os dois campos acima com números (peso e altura)'
    }

    if(peso === 0){
        conclusao.innerHTML = 'Por favor, adicione um peso(kg)'
        return
    }
    if(altura === 0){
        conclusao.innerHTML = 'Por favor, adicione uma altura(m)';
        return
    }

    if(imc < 18.5){ //análise do IMC do usuário
        conclusao.innerHTML = `Seu IMC é de ${imc.toFixed(1)}. Você está abaixo do peso.`
    } else if(imc <= 24.9){
        conclusao.innerHTML = `Seu IMC é de ${imc.toFixed(1)}. Seu peso está normal.`
    } else if(imc <= 29.9){
        conclusao.innerHTML = `Seu IMC é de ${imc.toFixed(1)}. Você está com sobrepeso`
    } else if(imc <= 34.9){
        conclusao.innerHTML = `Seu IMC é de ${imc.toFixed(1)}. Você tem obesidade grau 1`
    } else if(imc <= 39.9){
        conclusao.innerHTML = `Seu IMC é de ${imc.toFixed(1)}. Você tem obesidade grau 2`
    } else if(imc >= 40){
        conclusao.innerHTML = `Seu IMC é de ${imc.toFixed(1)}. Você tem obesidade grau 3`
    }
    
}
