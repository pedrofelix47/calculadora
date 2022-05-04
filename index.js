//FUNÇÃO PARA QUANDO O BOTÃO FOR PRESSIONADO CHAMAR O NUMERO CORRESPONDENTE.
function btnpress(num){
    var numero = document.getElementById('resultado').innerHTML  //irá subistituir o espaço em branco do campo do resultado pelo numero.
    document.getElementById('resultado').innerHTML = numero + num //fará com que o proximo núnmero digitado se adicione ao invés de substituir.
}

//FUNÇÃO PARA LIMPAR O CAMPO DO RESULTADO.
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//FUNÇÃO PARA APAGAR ULTIMO DIGITO.
function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //dividiu a string do resultado e apagou o ultimo.
}

// AO PASSAR UMA STRING COM UMA EXPRESSÃO ARITIMETICA COMO PARAMETRO NA FUNÇÃO AVAL ELA REALIZA O CALCULO AUTOMATICAMENTE.
function resultado(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = ""; //caso não haja valor o resultado fica em branco
    }
}