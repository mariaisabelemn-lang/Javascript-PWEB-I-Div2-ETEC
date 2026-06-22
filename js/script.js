function calcular() {
    let resultado= document.getElementById('resultado');
    let num1 = document.getElementById ('edtnum1').value;
    let num2 = document.getElementById ('edtnum2').value;
    resultado.innerHTML = '';
    let soma = Number(num1) + Number(num2);
    console.log('soma = '+ soma);
    resultado.innerHTML+= '<h3>soma = '+soma+'</h3>';
    let sub = Number(num1) - Number(num2);
    console.log('Subtração = '+sub);
    resultado.innerHTML+= '<h3>subtração = '+sub+'</h3>';
     let div = Number(num1) / Number(num2);
    console.log('divisão = '+div);
    resultado.innerHTML+= '<h3>divisao = '+div+'</h3>';
    let mult = Number(num1) * Number(num2);
    console.log('multiplicação = '+mult);
    resultado.innerHTML+= '<h3>multiplicação = '+mult+'</h3>';
}

function exibirTabuada(){
    let mostratabuada = document.getElementById('mostratabuada');
    let numero = document.getElementById('edtnumero').value;
    let i = 0;
    mostratabuada.innerHTML='';
    while(i<=10){
        mostratabuada.innerHTML += '<h4>'+numero+' x '+i+' = '+(numero*i) +'</h4>';
        i++;
    }
}

function vereficaMaior(){
    let n1 = document.getElementById('edtn1').value;
    let n2 = document.getElementById('edtn2').value;
    let maiornumero = document.getElementById('maiornumero');
    maiornumero.innerHTML = '';
    if(n1>n2){
        maiornumero.innerHTML = '<h2>0 maior número digitado é '+n1+'</h2>';
    }else{
        maiornumero.innerHTML = '<h2>0 maior número digitado é '+n2+'</h2>';
        
    }
}