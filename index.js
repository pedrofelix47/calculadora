var contnum = 0

//FUNÇÃO PARA QUANDO O BOTÃO FOR PRESSIONADO CHAMAR O NUMERO CORRESPONDENTE.
function btnpress(num){
    
    
    if(contnum < 14){ //LIMITA A QUANTIDADE DE CARACTERES USADOS
    var numero = document.getElementById('resultado').innerHTML  //GUARDA O NUMERO DIGITADO NA VARIAVEL "NUMERO".
    document.getElementById('resultado').innerHTML = numero + num //ADICIONA O NUMERO DIGITADO NO CAMPO RESULTADO.
    contnum++
    }    

}

//FUNÇÃO PARA LIMPAR O CAMPO DO RESULTADO.
function clean(){
    document.getElementById('resultado').innerHTML = "";
    contnum == 0;
}

//FUNÇÃO PARA APAGAR ULTIMO DIGITO.
function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1) //dividiu a string do resultado e apagou o ultimo.
    contnum--
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
