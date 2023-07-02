//TODO: criar exemplo da interação do dia a dia

// contador
var interaction=0;

// parametros
var percetualEndividamentoAceitavel=0.3;
var percentualCustoFixo = 0.3;
var percentualCustoVariavel = 0.4;
var percentualInvestimentos = 0.3;

//perguntas
var perguntasPrimeiraAnalise = [
    "Qual o seu salário líquido?",
    "Você possui alguma dívida? 1-Sim e 2-Não",
    "Qual o valor da sua dívida?",
    "Quanto você gasta por mês com custos fixos? Como aluguel, prestações, academia, internet, streamings",
    "Quanto você gasta por mês com custos variáveis? Como alimentação, energia, gasolina, lazer",
    "Quanto você investe ou guarda por mês?",
]

//feedbacks primeira análise
var feedbacksPrimeiraAnalise = [
    "O valor da sua renda comprometida com dívida está perigoso! Bora organizar as contas para quitar esta dívida??", 
    "Ninguém gosta de ficar devendo na praça. Mas sua dívida está dentro dos limites aceitáveis para a sua renda então se fizermos um bom plano daqui pra frente esta dívida será quitada sem problemas.", 
    "Ihh esses custos fixos estão muito altos. Vamos ter que analisar um a um para melhorar isso aí. Mas fica tranquilo, vamos fazer isso juntos!", 
    "Seus custos variáveis precisam de atenção, sabe aqueles do dia a dia, um cafezinho aqui, um pedido de delivery ali?", 
    "Deixa eu adivinhar! Você só investe o que sobra no final do mês. E nunca sobra nada né!? Você não está sozinho, isso acontece com muita gente por ai, mas tem jeitode mudar essa realidade! Quer começar agora? Ou já? "
]

//objeto usuario
var usuario = {
    nome: "", 
    rendaLiquida:0, 
    endividado:false, 
    valorDivida:0, 
    custoFixo:0, 
    custoVariavel:0, 
    investimentoMensal:0,
    percentualEndividamento: 0,
    percentualComprometidoCustoFixo: 0,
    percentualComprometidoCustoVariavel: 0,
    percentualComprometidoInvestimentos: 0
}


function userSendMessage() {
    var userInput = document.getElementById('userInput');

    var userMessage = userInput.value;
    userReponseManagement(userMessage);
    userInput.value = '';

    var falaUsuario = document.createElement('div');
    falaUsuario.innerHTML = "<div style='width: 80vw;margin: 15 auto 0 15;' class='card card-chat fala-usuario'> <div class='card-body'> <div class='icon-usuario'> <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-person' viewBox='0 0 16 16'> <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z'/> </svg> </div>"
                            +  userMessage +"</div></div>";
    var chat = document.getElementById('chat');
    chat.appendChild(falaUsuario);
    botResponseManagement();
}

  function userReponseManagement(message){
    switch(interaction){
        case 0:
            usuario.nome = message;
            break;
        case 1: 
            usuario.rendaLiquida = message;
            break;
        case 2:
            if(message=="1")
                usuario.endividado=true;
            else
                interaction++;
            break;
        case 3:
            usuario.valorDivida = message;
            usuario.percentualEndividamento = usuario.valorDivida/usuario.rendaLiquida;
            break;
        case 4: 
            usuario.custoFixo = message;
            usuario.percentualComprometidoCustoFixo = usuario.custoFixo/usuario.rendaLiquida;
            break;
        case 5:
            usuario.custoVariavel = message;
            usuario.percentualComprometidoCustoVariavel = usuario.custoVariavel/usuario.rendaLiquida;
            break;
        case 6:
            usuario.investimentoMensal = message;
            usuario.percentualComprometidoInvestimentos = usuario.investimentoMensal/usuario.rendaLiquida;
            break;
        }
        interaction++;
}

function botResponseManagement(){
    if(interaction-1<perguntasPrimeiraAnalise.length)
        botSendMessage(perguntasPrimeiraAnalise[interaction-1]);
    else
        primeiraAnalisePerfil();
}

function botSendMessage(input){
    var falaBot = document.createElement('div');
    falaBot.innerHTML = "<div style='width: 80vw;margin: 15 15 0 auto;' class='card card-chat fala-robo'> <div style='justify-content:end;' class='card-body'>"
                            +input+ "<div class='icon-robo'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' class='bi bi-robot' viewBox='0 0 16 16'> <path d='M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z'/> <path d='M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z'/></svg></div></div></div>";

    var chat = document.getElementById('chat');
    chat.appendChild(falaBot);
    window.scrollTo(0, window.outerHeight);
}

function primeiraAnalisePerfil(){
    var message=[];
    var atencao=0;

    if(usuario.endividado && usuario.percentualEndividamento>percetualEndividamentoAceitavel)
    {
        message[atencao] = feedbacksPrimeiraAnalise[0]
        atencao++;
    }
    if (usuario.endividado && usuario.percentualEndividamento<=percetualEndividamentoAceitavel) {
        message[atencao] = feedbacksPrimeiraAnalise[1]
        atencao++;
    }
    if(usuario.percentualComprometidoCustoFixo>percentualCustoFixo){
        message[atencao] = feedbacksPrimeiraAnalise[2]
        atencao++;
    }
    if(usuario.percentualComprometidoCustoVariavel>percentualCustoVariavel){
        message[atencao] = feedbacksPrimeiraAnalise[3]
        atencao++;
    }
    if(usuario.percentualComprometidoInvestimentos<percentualInvestimentos){
        message[atencao] = feedbacksPrimeiraAnalise[4]
        atencao++;
    }
    //console.log(message);

    if(atencao>0)
    {
        botSendMessage("Oh vou te passar minha primeira impressão...")
        for(var i=0; i<atencao; i++){
            botSendMessage(message[i]);
        }
    }
}





