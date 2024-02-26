//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemNaTela(tag,texto){//PARÂMETROS DEFINIDOS
    let campo = document.querySelector (tag);//CHAMAMOS O PARÂMETRO TAG ('H1') E ('P');
    campo.innerHTML = texto;//CHAMAMOS O PARÂMETRO TEXTO ('JOGO DO NUMERO SECRETO') E ('ESCOLHA UM NÚMERO ENTRE 1 E 10');
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//AO CHAMAR O "exibirMensagemNaTela", estamos chamando a função para ser executada
//cada hora com um valor de parâmetro diferente.
function exibirMensagemInicial(){
exibirMensagemNaTela('h1', 'Jogo do número secreto'); //DEFININDO PARÂMETROS!
exibirMensagemNaTela('p','Escolha um número entre 1 e 10'); //DEFININDO PARÂMETROS!
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirMensagemNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirMensagemNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){
            exibirMensagemNaTela('p', 'O número secreto é menor');
        } else{
            exibirMensagemNaTela('p',' O númer o secreto é maior');
        }
        tentativas++ ;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute= document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled, true');

}