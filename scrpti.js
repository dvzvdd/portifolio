
const botaoTema = document.getElementById("botao-tema");
const iconeTema = document.getElementById("icone-tema");
const botaoIdioma = document.getElementById("botao-idioma");
const formulario = document.getElementById("formulario");
const avisoFormulario = document.getElementById("aviso-formulario");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        iconeTema.textContent = "☾";
    } else {
        iconeTema.textContent = "☀";
    }
});

const textos = {
    pt: {
        sobre: "Sobre mim",
        skills: "Skills",
        projetos: "Projetos ↓",
        contato: "Contato",
        conversar: "Vamos conversar",
        profissao: "Desenvolvedor Web",
        "descricao-inicio": "Desenvolvo sites modernos, interfaces funcionais e experiências digitais focadas no usuário.",
        "ver-projetos": "Ver projetos →",
        "entrar-contato": "Entrar em contato",
        "titulo-sobre": "Transformando ideias<br>em experiências digitais.",
        "sobre-1": "Sou estudante e desenvolvedor web, interessado na criação de sites modernos, organizados e funcionais.",
        "sobre-2": "Tenho interesse principalmente em desenvolvimento front-end, criação de interfaces e experiências digitais. Busco sempre aprender novas tecnologias e melhorar meus projetos.",
        "sobre-3": "Meu objetivo profissional é evoluir constantemente como desenvolvedor e participar da criação de projetos que unam tecnologia, criatividade e praticidade.",
        "numero-1": "Projetos desenvolvidos",
        "numero-2": "Tecnologias estudadas",
        "numero-3": "Dedicação aos projetos",
        "titulo-skills": "Skills que fazem<br>parte do meu trabalho.",
        hard: "Hard skills",
        soft: "Soft skills",
        "descricao-hard": "Conhecimentos técnicos utilizados no desenvolvimento dos meus projetos.",
        "descricao-soft": "Características pessoais que ajudam no desenvolvimento dos projetos.",
        comunicacao: "Comunicação",
        criatividade: "Criatividade",
        organizacao: "Organização",
        proatividade: "Proatividade",
        equipe: "Trabalho em equipe",
        aprendizado: "Aprendizado",
        "titulo-projetos": "Trabalhos<br>Desenvolvidos.",
        "meus-codigos": "Meus códigos",
        "titulo-github": "Venha conhecer meus<br>projetos no GitHub.",
        "titulo-contato": "Converse comigo.",
        nome: "Nome:",
        email: "E-mail:",
        mensagem: "Mensagem:",
        enviar: "Enviar Mensagem →",
        redes: "Redes Sociais.",
        telefone: "Telefone",
        direitos: "Todos os direitos reservados."
    },

    en: {
        sobre: "About me",
        skills: "Skills",
        projetos: "Projects ↓",
        contato: "Contact",
        conversar: "Let's talk",
        profissao: "Web Developer",
        "descricao-inicio": "I develop modern websites, functional interfaces and user-focused digital experiences.",
        "ver-projetos": "View projects →",
        "entrar-contato": "Get in touch",
        "titulo-sobre": "Turning ideas<br>into digital experiences.",
        "sobre-1": "I am a student and web developer interested in creating modern, organized and functional websites.",
        "sobre-2": "I am mainly interested in front-end development, interface design and digital experiences. I am always looking to learn new technologies and improve my projects.",
        "sobre-3": "My professional goal is to constantly grow as a developer and participate in projects that combine technology, creativity and practicality.",
        "numero-1": "Projects developed",
        "numero-2": "Technologies studied",
        "numero-3": "Hours dedicated to projects",
        "titulo-skills": "Skills that are part<br>of my work.",
        hard: "Hard skills",
        soft: "Soft skills",
        "descricao-hard": "Technical knowledge used in the development of my projects.",
        "descricao-soft": "Personal characteristics that help me develop projects.",
        comunicacao: "Communication",
        criatividade: "Creativity",
        organizacao: "Organization",
        proatividade: "Proactivity",
        equipe: "Teamwork",
        aprendizado: "Learning",
        "titulo-projetos": "Developed<br>Projects.",
        "meus-codigos": "My code",
        "titulo-github": "Come and explore my<br>projects on GitHub.",
        "titulo-contato": "Get in touch.",
        nome: "Name:",
        email: "E-mail:",
        mensagem: "Message:",
        enviar: "Send Message →",
        redes: "Social Media.",
        telefone: "Phone",
        direitos: "All rights reserved."
    }
};

let idiomaAtual = "pt";

botaoIdioma.addEventListener("click", function() {
    if (idiomaAtual === "pt") {
        idiomaAtual = "en";
        botaoIdioma.textContent = "English ↓";
        document.documentElement.lang = "en";
    } else {
        idiomaAtual = "pt";
        botaoIdioma.textContent = "Português ↓";
        document.documentElement.lang = "pt-BR";
    }

    document.querySelectorAll("[data-texto]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-texto");

        if (textos[idiomaAtual][chave]) {
            elemento.innerHTML = textos[idiomaAtual][chave];
        }
    });

    document.getElementById("nome").placeholder =
        idiomaAtual === "pt" ? "Seu nome" : "Your name";

    document.getElementById("email").placeholder =
        idiomaAtual === "pt" ? "seuemail@gmail.com" : "youremail@gmail.com";

    document.getElementById("mensagem").placeholder =
        idiomaAtual === "pt" ? "Escreva sua mensagem..." : "Write your message...";
});

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (idiomaAtual === "pt") {
        avisoFormulario.textContent = "Mensagem preenchida com sucesso!";
    } else {
        avisoFormulario.textContent = "Message completed successfully!";
    }

    formulario.reset();
});
