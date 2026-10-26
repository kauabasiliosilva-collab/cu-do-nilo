const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const barraProgresso = document.getElementById("barra-progresso");

const perguntas = [
    {
        enunciado: "1. Como é seu comportamento em grupo com os seus amigos?",
        alternativas: [
            { texto: "Sou pacífico, afetuoso e resolvo conflitos com conversas carinhosas.", afirmacao: "• Bonobo: Alma pacífica e muito acolhedora." },
            { texto: "Sou protetor, imponente e o líder natural do grupo.", afirmacao: "• Gorila-das-montanhas: Força e liderança protetora." },
            { texto: "Sou brincalhão, social e adoro estar sempre rodeado por todos.", afirmacao: "• Chimpanzé: Sociável, enérgico e muito comunicativo." },
            { texto: "Sou reservado, calmo e prefiro ficar no meu próprio canto.", afirmacao: "• Orangotango: Solitário, sábio e observador." }
        ]
    },
    {
        enunciado: "2. Qual é a sua habilidade especial ao enfrentar problemas?",
        alternativas: [
            { texto: "Improviso ferramentas e encontro soluções muito criativas.", afirmacao: "• Macaco-Prego: Criatividade e inteligência prática incrível." },
            { texto: "Observo com muita paciência antes de tomar qualquer atitude.", afirmacao: "• Orangotango: Estratégia pensada com muita paciência." },
            { texto: "Uso a força física e a determinação para superar os obstáculos.", afirmacao: "• Gorila: Determinação e imponência para vencer obstáculos." },
            { texto: "Uso agilidade para contornar o problema bem rapidamente.", afirmacao: "• Gibão: Agilidade e rapidez para desviar de problemas." }
        ]
    },
    {
        enunciado: "3. Qual é o seu habitat ou ambiente ideal para relaxar?",
        alternativas: [
            { texto: "No alto das árvores, apreciando uma vista ampla e livre.", afirmacao: "• Macaco-Aranha: Amor pela altura e pela liberdade." },
            { texto: "Relaxando em águas ou fontes quentinhas sem passar frio.", afirmacao: "• Macaco-do-Japão: Aprecia o conforto das águas térmicas." },
            { texto: "Em florestas densas e fechadas, cercado por muita vegetação.", afirmacao: "• Mico-Leão-Dourado: Conexão profunda com florestas tropicais." },
            { texto: "Em savanas abertas onde posso caminhar com liberdade.", afirmacao: "• Babuíno: Adaptação a territórios amplos e abertos." }
        ]
    },
    {
        enunciado: "4. Como você se expressa quando quer ser ouvido?",
        alternativas: [
            { texto: "Falo bem alto para garantir que todos fiquem a sabê-lo.", afirmacao: "• Bugio (Macaco-Uivador): Voz potente que ecoa longe." },
            { texto: "Uso gestos expressivos e o olhar de forma elegante.", afirmacao: "• Sagui-imperador: Expressividade e gestos elegantes." },
            { texto: "Faço barulho e chamo a atenção com energia contagiante.", afirmacao: "• Macaco-de-Cheiro: Comunicação alegre e barulhenta." },
            { texto: "Falo baixo e apenas quando é estritamente necessário.", afirmacao: "• Macaco-da-Noite: Discreto e silencioso." }
        ]
    },
    {
        enunciado: "5. Qual estilo visual ou acessório combina mais contigo?",
        alternativas: [
            { texto: "Cores vibrantes e marcantes para chamar a atenção de longe.", afirmacao: "• Mandril: Estilo exuberante com cores marcantes." },
            { texto: "Um visual clássico, compacto e discreto.", afirmacao: "• Mico-leão-dourado: Estilo pequeno e adorável." },
            { texto: "Um detalhe marcante, como um bigode ou uma juba estilosa.", afirmacao: "• Sagui-imperador: Detalhes únicos como bigodes exuberantes." },
            { texto: "Visual camuflado, sem grande destaque.", afirmacao: "• Colobo-guereza: Visual sóbrio e elegante." }
        ]
    },
    {
        enunciado: "6. Qual é a sua atitude em relação à comida?",
        alternativas: [
            { texto: "Gosto de provar de tudo: frutas, castanhas e alimentos novos.", afirmacao: "• Chimpanzé: Dieta variada e curiosidade gastronómica." },
            { texto: "Sou seletivo, prefiro vegetais frescos e alimentos leves.", afirmacao: "• Colobo: Paladar refinado focado em folhas." },
            { texto: "Como grandes quantidades para manter a minha energia alta.", afirmacao: "• Gorila: Alimentação reforçada e constante." },
            { texto: "Procuro pequenas guloseimas e frutos bem doces.", afirmacao: "• Sagui: Adora resina de árvores e doces frutos." }
        ]
    },
    {
        enunciado: "7. Como você reage ao encontrar um obstáculo físico?",
        alternativas: [
            { texto: "Dou saltos acrobáticos e supero tudo com facilidade.", afirmacao: "• Gibão: Mestre das acrobacias e saltos distantes." },
            { texto: "Analiso bem o terreno antes de dar qualquer passo em falso.", afirmacao: "• Macaco-de-Cheiro: Análise cuidadosa do caminho." },
            { texto: "Empurro o obstáculo até abrir espaço.", afirmacao: "• Babuíno: Enfrentamento direto e firme." },
            { texto: "Procuro um caminho alternativo sem gastar energia.", afirmacao: "• Orangotango: Inteligência para poupar esforços." }
        ]
    },
    {
        enunciado: "8. Como reage ao encontrar pessoas novas?",
        alternativas: [
            { texto: "Sou extremamente curioso e me aproximo logo.", afirmacao: "• Macaco-Rhesus: Curiosidade e facilidade de aproximação." },
            { texto: "Sou tímido e fico a observar de longe.", afirmacao: "• Macaco-da-Noite: Perfil tímido e misterioso." },
            { texto: "Sou protetor e analiso as intenções antes de confiar.", afirmacao: "• Gorila: Cautela e proteção com estranhos." },
            { texto: "Faço festa e recebo todos com muita simpatia.", afirmacao: "• Bonobo: Hospitalidade e simpatia natural." }
        ]
    },
    {
        enunciado: "9. Qual destas qualidades você mais valoriza?",
        alternativas: [
            { texto: "Uma aparência única e inconfundível.", afirmacao: "• Macaco-Narigudo: Valoriza a sua singularidade." },
            { texto: "A capacidade de se mover com velocidade extrema.", afirmacao: "• Macaco-Patas: Veloz e cheio de energia." },
            { texto: "A sabedoria e a tranquilidade no dia a dia.", afirmacao: "• Orangotango: Sabedoria e paz interior." },
            { texto: "A lealdade e proteção aos amigos.", afirmacao: "• Babuíno: Lealdade inabalável à sua comunidade." }
        ]
    },
    {
        enunciado: "10. No final do dia, qual é o seu maior objetivo?",
        alternativas: [
            { texto: "Estar com as pessoas que amo, cuidando uns dos outros.", afirmacao: "• Espírito de Bando: Valoriza profundamente os laços sociais." },
            { texto: "Ter o meu espaço tranquilo para descansar sem ser incomodado.", afirmacao: "• Espírito Livre: Valoriza a sua independência e paz." },
            { texto: "Celebrar as conquistas do dia com diversão e conversa.", afirmacao: "• Espírito Festivo: Mantém sempre a alegria e energia." },
            { texto: "Planejar com calma as metas do dia seguinte.", afirmacao: "• Espírito Estratégico: Focado na evolução constante." }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function atualizaBarraProgresso() {
    const porcentagem = (atual / perguntas.length) * 100;
    barraProgresso.style.width = `${porcentagem}%`;
}

function mostraPergunta() {
    atualizaBarraProgresso();
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
    historiaFinal += afirmacoes + "\n";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    barraProgresso.style.width = "100%";
    caixaPerguntas.textContent = "🌴 O Seu Perfil Selvagem Resultou Em:";
    textoResultado.innerText = historiaFinal;
    caixaAlternativas.textContent = ""; 

    // Botão de Recomeçar
    const botaoRecomecar = document.createElement("button");
    botaoRecomecar.textContent = "🔄 Jogar Novamente";
    botaoRecomecar.classList.add("botao-recomecar");
    botaoRecomecar.addEventListener("click", reiniciaJogo);
    caixaAlternativas.appendChild(botaoRecomecar);
}

function reiniciaJogo() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

mostraPergunta();
