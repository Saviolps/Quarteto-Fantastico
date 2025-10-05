// Objeto com os dados de todos os heróis (nome, imagem, biografia, poderes e frases)
const dados = {
    "sr-fantastico": {
        nome: "Sr. Fantástico",
        img: "img/Sr. Fantastico.jpg",
        bio: "Reed Richards é conhecido como o homem mais inteligente da Terra, um cientista genial que nunca desiste de encontrar soluções para os maiores desafios. Como líder do Quarteto Fantástico, ele usa sua elasticidade para enfrentar inimigos e proteger o planeta. Apesar de sua seriedade, sua dedicação à família e à ciência o tornam único.",
        poderes: [
            "Elasticidade – esticar seu corpo em diferentes formas.",
            "Intelecto de Gênio – considerado o homem mais inteligente da Terra.",
            "Força de Estiramento – pode aumentar sua altura e forma.",
            "Invenções – criador de inúmeras tecnologias.",
            "Resistência – corpo altamente resistente a danos.",
            "Absorção de Impacto – pode resistir a quedas e explosões."
        ],
        frases: [
            "A ciência é o único milagre verdadeiro!",
            "Pense infinito... além do imaginável!",
            "O impossível é apenas o que ainda não descobrimos."
        ]
    },
    "mulher-invisivel": {
        nome: "Mulher Invisível",
        img: "img/Invisible Woman.jpg",
        bio: `Susan “Sue” Storm-Richards é o coração do Quarteto Fantástico e uma das heroínas mais poderosas da Marvel. 
        Após ser exposta aos raios cósmicos junto de sua equipe, ela ganhou a habilidade de manipular a luz e criar campos de força invisíveis. 
        Muito mais que seus poderes, Sue é a base emocional do grupo: determinada, inteligente, protetora e, ao mesmo tempo, a figura materna e a líder tática que mantém a equipe unida. 
        Sua trajetória marca a transição da “Garota Invisível” para a “Mulher Invisível”, uma heroína confiante e fundamental para o equilíbrio entre ciência, coragem e humanidade.`,
        poderes: [
            "Invisibilidade Avançada – pode desaparecer por completo ou tornar objetos e aliados invisíveis.",
            "Campos de Força – gera barreiras protetoras quase indestrutíveis, adaptando tamanho e forma.",
            "Construções de Energia – molda campos de força como armas, plataformas e aprisionamentos.",
            "Projeções Ofensivas – usa pressão dos campos para atacar inimigos de forma devastadora.",
            "Detecção de Energia e Luz – consegue manipular espectros invisíveis para localizar ou confundir adversários.",
            "Liderança Estratégica – sua inteligência emocional e visão tática guiam o Quarteto em momentos críticos."
        ],
        frases: [
            "A Garota Invisível não existe mais, Reed. Ela morreu quando o Homem-Psíquico distorceu sua alma. A partir de agora, eu serei a Mulher Invisível!",
            "Mesmo quando você não puder me ver, eu ainda farei você acreditar.",
            "É meu trabalho pensar coisas terríveis para que coisas terríveis não aconteçam.",
            "Eu estava tentando te proteger!",
            "Me proteger? Olha só quanta propriedade eu posso destruir sem nem tentar!",
            "A Mulher Invisível é o coração do Quarteto Fantástico.",
            "Não importa o que a vida nos traga, vamos enfrentar juntos, como uma família.",
            "Minha presença pode ser invisível aos olhos, mas jamais ao meu dever.",
            "Eu luto não só com força, mas com o que sou: determinação, amor e responsabilidade.",
            "Ser vista nunca foi a medida do meu poder."
        ]
    },
    "tocha-humana": {
        nome: "Tocha Humana",
        img: "img/Tocha Humana.jpg",
        bio: "Johnny Storm é o membro mais explosivo do Quarteto Fantástico, conhecido por sua personalidade impulsiva e carisma. Ele controla o fogo em níveis impressionantes, voando em chamas e disparando rajadas incandescentes. Apesar de brincalhão, sempre defende sua equipe com bravura.",
        poderes: [
            "Pirocinese – controlar e gerar fogo.",
            "Voo Supersônico – voar em alta velocidade.",
            "Bolas de Fogo – disparar esferas flamejantes.",
            "Escudo de Chamas – criar barreiras de fogo.",
            "Controle Térmico – manipular calor.",
            "Nova Supernova – liberar explosão incandescente extrema."
        ],
        frases: [
            "Chamas já!",
            "Eu sou o cara mais quente da galáxia!",
            "Ninguém brilha como a Tocha Humana!"
        ]
    },
    "coisa": {
        nome: "O Coisa",
        img: "img/O coisa.jpg",
        bio: "Ben Grimm é a rocha viva que se tornou O Coisa, a personificação da força bruta com coração de ouro. Apesar de sua aparência monstruosa, ele é um herói leal e protetor. Ben luta para lidar com sua transformação, mas encontra força na amizade e no Quarteto Fantástico.",
        poderes: [
            "Super Força – golpes devastadores.",
            "Corpo Rochoso – pele quase indestrutível.",
            "Resistência Extrema – aguenta ataques poderosos.",
            "Combate Corpo-a-Corpo – especialista em luta.",
            "Coração de Ouro – leal e justo.",
            "Durabilidade – resistência sobre-humana."
        ],
        frases: [
            "É hora do show!",
            "Eu sou o Coisa Azul... ops, Laranja!",
            "Quanto mais me batem, mais forte eu fico!"
        ]
    }
};

// Captura o parâmetro da URL (?heroi=nome)
const params = new URLSearchParams(window.location.search);
const heroi = params.get("heroi");

// Se existir herói válido, mostra os dados na página
if (heroi && dados[heroi]) {
    const p = dados[heroi];

    document.getElementById("personagem").innerHTML = `
    <div class="personagem-container">
        <!-- Perfil do personagem -->
        <section class="perfil">
            <div class="perfil-topo">
                <div class="perfil-left">
                    <img src="${p.img}" alt="${p.nome}">
                </div>
                <div class="perfil-info">
                    <h1>${p.nome}</h1>
                    <p class="bio">${p.bio}</p>
                </div>
            </div>

            <!-- Lista de poderes -->
            <h2>Poderes e Habilidades</h2>
            <ul class="lista">
                ${p.poderes.map(p => `<li>${p}</li>`).join("")}
            </ul>

            <!-- Frases do personagem -->
            <h2>Frases Icônicas</h2>
            <div class="frases">
                ${p.frases.map(f => `<blockquote>${f}</blockquote>`).join("")}
            </div>

            <!-- Botão de voltar -->
            <div class="voltar">
                <a href="index.html" class="btn-voltar">⬅ Voltar à Página Inicial</a>
            </div>
        </section>

        <!-- Outros heróis (exceto o atual) -->
        <aside class="outros-herois">
            <h3>Outros Heróis</h3>
            ${Object.keys(dados)
                .filter(key => key !== heroi)
                .map(key => {
                    const original = dados[key].img;
                    const hoverImg = original.includes(' hover')
                        ? original
                        : original.replace(/(\.[^/.]+)$/, ' hover$1');
                    return `
                        <a href="personagem.html?heroi=${key}" class="card">
                            <div class="img-hover">
                                <img src="${original}" alt="${dados[key].nome}" class="normal">
                                <img src="${hoverImg}" alt="${dados[key].nome} (hover)" class="hover">
                            </div>
                            <h2>${dados[key].nome}</h2>
                        </a>
                    `;
                }).join("")}
        </aside>
    </div>
    `;
}