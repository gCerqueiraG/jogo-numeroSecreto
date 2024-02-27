let limiteTentativas = 10;
let listaDeNumerosSorteados = [];
function numAleatorio(){
    let numEscolhido = parseInt(Math.random() *limiteTentativas+1); //inserimos o return para indicar que o valor gerado será retornado quando a função for invocada
    let qtElementosLista = listaDeNumerosSorteados.length;
    if (qtElementosLista == 4){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numEscolhido)){
        return numAleatorio();
    } else{
        listaDeNumerosSorteados.push(numEscolhido);
        console.log(listaDeNumerosSorteados);
        return (numEscolhido);
    }
}

//criamos essa função para poder limpar o código e caso tenha alteração na mensagem, versão do jogo, não precisar ficar alterando a mensagem em cada função
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
//aqui chamamos a função para exibir a mensagem inicial, visto que removemos a exibirTextoNaTela
exibirMensagemInicial();

function limparCampo(){
    chute = document.querySelector('input');
    chute.value='';
}

let numSecreto = numAleatorio(); //aqui foi chamada a função, a variável numSecreto receberá o valor gerado em numAleatorio
let tentativas=1;

function exibirTextoNaTela(tag, texto){ /*informamos a estrutura da função, 
ela será formada por 2 elementos (primeiro informo a tag que será alterada e depois informo o conteúdo que receberá essa tag*/
    let campo = document.querySelector(tag); /*criamos a variável campo para atribuir a ela o valor digitado */
    campo.innerHTML = texto; /*aqui informamos que o campo no documento HTML receberá o valor atribuído a variável texto*/
}

function chutar() {
    let chute = document.querySelector('input').value; //inserimos o .value pois o valor inserido por alguém ser armazenado
  
    if(chute == numSecreto){
        exibirTextoNaTela('h1','Acertou!!!')
        tentativas++
        //declaramos a variável abaixo 
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //OPERADOR TERNÁRIO - foi usado para atribuir uma condição à variável, visto que através da condição IF e ELSE não ser possível
        let mensagemTentativas = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
        else if (chute < numSecreto){
	        exibirTextoNaTela('h1','Você Errou!')
            exibirTextoNaTela('p','O número secreto é maior.')
            tentativas++;
            limparCampo();
        } 
            else{
		        exibirTextoNaTela('h1','Você Errou!');
                exibirTextoNaTela('p','O número secreto é menor.')
                tentativas++;
                limparCampo();
                 }
}

function reiniciarJogo(){
    console.log('o botao foi clicado');
    exibirMensagemInicial();
    exibirMensagemInicial();
    numSecreto = numAleatorio();
    limparCampo();
    tentativas=0;
    //o método utilizado utilizará o ID reiniciar, setando o atributo disabled.
    //se quisermos que ele fique desabilitado, passamos a segunda instrução true.
    document.getElementById('reiniciar').setAttribute('disabled',true);

}


