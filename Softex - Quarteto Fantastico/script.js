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
        bio: "Sue Storm é a força invisível do Quarteto Fantástico, uma heroína que vai muito além de suas habilidades únicas. Mais do que apenas invisível, ela é capaz de criar campos de força quase indestrutíveis, protegendo seus aliados em batalhas intensas. Sue é um pilar emocional e estratégico, sempre unindo a equipe.",
        poderes: [
            "Invisibilidade – desaparecer totalmente do campo de visão.",
            "Campos de Força – criar barreiras quase indestrutíveis.",
            "Projeções de Energia – transformar energia em ataques ofensivos.",
            "Controle de Força – manipular formas complexas de barreira.",
            "Empatia Psíquica – sensibilidade a emoções.",
            "Uso Tático – protege aliados com estratégia."
        ],
        frases: [
            "Sou mais do que apenas invisível: sou invencível!",
            "Minha família é minha força.",
            "Nunca subestime o poder de uma mulher determinada."
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
            "Chamas já! 🔥",
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
            "É hora do show! 💪",
            "Eu sou o Coisa Azul... ops, Laranja!",
            "Quanto mais me batem, mais forte eu fico!"
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const heroi = params.get("heroi");

if (heroi && dados[heroi]) {
    const p = dados[heroi];
    document.getElementById("personagem").innerHTML = `
    <section class="perfil">
      <img src="${p.img}" alt="${p.nome}">
      <h1>${p.nome}</h1>
    <p class="bio">${p.bio}</p>

      <h2>Poderes & Habilidades</h2>
      <ul class="lista">
        ${p.poderes.map(p => `<li>${p}</li>`).join("")}
      </ul>

      <h2>Frases Icônicas</h2>
      <div class="frases">
        ${p.frases.map(f => `<blockquote>${f}</blockquote>`).join("")}
      </div>
    </section>
  `;
}
