const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. Como é seu comportamento em grupo e com seus amigos?",
        alternativas: [
            {
                texto: "Gosto de viver em comunidades tranquilas, pacifistas e resolver tudo com carinho.",
                afirmacao: "Você tem a alma pacífica e acolhedora de um Bonobo."
            },
            {
                texto: "Sou um líder natural, protetor e bastante impetuoso quando defendendo quem amo.",
                afirmacao: "Sua força e instinto de liderança lembram o poderoso Gorila-das-montanhas."
            }
        ]
    },
    {
        enunciado: "2. Qual é a sua habilidade especial na hora de resolver problemas do dia a dia?",
        alternativas: [
            {
                texto: "Uso ferramentas, improviso e penso rápido para encontrar soluções criativas.",
                afirmacao: "Sua inteligência e capacidade de usar ferramentas são dignas de um Macaco-Prego."
            },
            {
                texto: "Sou observador, me movo com calma e prefiro não me envolver em confusões.",
                afirmacao: "Sua natureza observadora e focada se assemelha à de um Orangotango."
            }
        ]
    },
    {
        enunciado: "3. Qual é o seu habitat ideal para relaxar?",
        alternativas: [
            {
                texto: "No alto das árvores, com uma vista bem ampla e com bastante agilidade para me mover.",
                afirmacao: "Seu estilo ágil e aéreo lembra a graciosidade do Macaco-Aranha."
            },
            {
                texto: "Relaxando em fontes térmicas de água quente, sem passar nenhum frio.",
                afirmacao: "Seu amor pelo conforto e pelo frio ameno faz de você um autêntico Macaco-do-Japão (Macaco-das-neves)."
            }
        ]
    },
    {
        enunciado: "4. Como você se expressa quando quer ser ouvido?",
        alternativas: [
            {
                texto: "Falo alto, me faço notar de longe para garantir que todos ouçam meu recado.",
                afirmacao: "Sua voz potente e presença marcante ecoam como o grito de um Bugio (Macaco-Uivador)."
            },
            {
                texto: "Comuniquei-me de forma sutil, usando gestos e olhares discretos.",
                afirmacao: "Sua comunicação expressiva e elegante lembra o Sagui-imperador."
            }
        ]
    },
    {
        enunciado: "5. Sobre o seu visual e estilo pessoal:",
        alternativas: [
            {
                texto: "Adoro ter algum detalhe único e extravagante (um bigode, uma juba ou cores chamativas).",
                afirmacao: "Seu gosto por um visual marcante remete às cores exuberantes do Mandril."
            },
            {
                texto: "Prefiro um visual clássico, compacto e discreto, sem chamar muita atenção.",
                afirmacao: "Seu estilo pequeno e adorável combina perfeitamente com o Mico-leão-dourado."
            }
        ]
    },
    {
        enunciado: "6. Qual é a sua atitude em relação à comida?",
        alternativas: [
            {
                texto: "Como de tudo um pouco, adoro experimentar frutas novas e castanhas diferentes.",
                afirmacao: "Sua dieta variada e curiosidade gastronômica são características do Chimpanzé."
            },
            {
                texto: "Sou muito seletivo, prefiro folhas específicas e brotos bem frescos.",
                afirmacao: "Seu paladar refinado e focado lembra a rotina do Colobo-guereza."
            }
        ]
    },
    {
        enunciado: "7. Quando surge um obstáculo físico ou um desafio difícil:",
        alternativas: [
            {
                texto: "Enfrento com pura agilidade e acrobacias, superando o obstáculo sem pisar no chão.",
                afirmacao: "Sua destreza física é tão incrível quanto a de um Gibão."
            },
            {
                texto: "Analiso bem a estrutura antes de dar qualquer passo longo ou arriscado.",
                afirmacao: "Seu cuidado e precisão nos movimentos lembram o Macaco-de-Cheiro."
            }
        ]
    },
    {
        enunciado: "8. Como você lida com visitas ou pessoas desconhecidas?",
        alternativas: [
            {
                texto: "Sou muito curioso, me aproximo rapidamente para investigar tudo o que eles trazem.",
                afirmacao: "Sua curiosidade insaciável é idêntica à do Macaco-Rhesus."
            },
            {
                texto: "Sou tímido, prefiro ficar camuflado no meu canto observando à distância.",
                afirmacao: "Seu estilo reservado e misterioso parece com o do Macaco-da-Noite."
            }
        ]
    },
    {
        enunciado: "9. Qual destas características marcantes você mais valoriza?",
        alternativas: [
            {
                texto: "Um nariz único e expressivo que destaca a minha personalidade.",
                afirmacao: "Sua singularidade inconfundível lembra o Macaco-Narzudo."
            },
            {
                texto: "Uma cabeleira/juba vistosa que me dá um ar de realeza.",
                afirmacao: "Seu porte elegante e jubado lembra o Tamarim-de-coleira."
            }
        ]
    },
    {
        enunciado: "10. No final do dia, o que é mais importante para você?",
        alternativas: [
            {
                texto: "Estar cercado pela família e pelos amigos, cuidando uns dos outros.",
                afirmacao: "Você coloca os laços sociais no topo de tudo, mostrando um verdadeiro espírito de bando primata!"
            },
            {
                texto: "Ter o meu próprio espaço para descansar com calma e recarregar as energias.",
                afirmacao: "Você valoriza seu espaço individual com a sabedoria dos grandes primatas solitários."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Seu Perfil Primata Revelado:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 

    // Criação do Botão de Recomeçar
    const botaoRecomecar = document.createElement("button");
    botaoRecomecar.textContent = "Jogar Novamente";
    botaoRecomecar.addEventListener("click", reiniciaJogo);
    caixaAlternativas.appendChild(botaoRecomecar);
}

function reiniciaJogo() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

mostraPergunta();
