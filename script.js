// Listas de frases e músicas (na ordem de 0 a 30)
const frases = [
    "Proteja o que é importante para você e cultive as relações que te fortalecem.",
    "Nunca deixe de sonhar; a vida é feita de conquistas que começam com um sonho.",
    "Alimente suas esperanças e acredite no melhor, mesmo quando tudo parecer perdido.",
    "Siga sua própria maneira, mesmo que o mundo tente te mudar.",
    "Enfrente suas batalhas com coragem; mesmo nos dias difíceis, há sempre luz.",
    "Permita-se sentir o amor, mesmo que ele venha acompanhado de vulnerabilidades.",
    "Não desista de lutar pelo que acredita, mesmo que doa às vezes.",
    "Aprenda a caminhar na noite, pois nela também há beleza e lições.",
    "Nunca esconda o que sente, mesmo que pareça difícil colocar em palavras.",
    "Abrace as mudanças da vida, pois elas trazem novos começos.",
    "Confie na sua força interior; ela é capaz de transformar qualquer situação.",
    "Ouse ser um herói, mesmo nas pequenas ações do dia a dia.",
    "Encontre sua paixão e a deixe te guiar, mesmo que o caminho seja incerto.",
    "Não tenha medo de enfrentar seus próprios demônios, pois eles te fortalecem.",
    "Siga em frente com coragem, mesmo que a caminhada pareça solitária.",
    "Acredite no poder de recomeçar, pois cada novo passo te aproxima dos seus sonhos.",
    "Olhe nos olhos de quem está ao seu lado e valorize as conexões genuínas.",
    "Mesmo quando parece difícil, lembre-se de que há algo especial em você.",
    "Tenha coragem de dizer o que sente antes que seja tarde demais.",
    "Deixe quem ama te ajudar a curar suas feridas; ninguém precisa enfrentar tudo sozinho.",
    "Aprenda a ficar bem consigo mesmo, pois é na solidão que você se conhece melhor.",
    "Reconheça o valor das parcerias e amizades que te fortalecem nos momentos difíceis.",
    "Deixe que a vida te surpreenda; nem sempre o que planejamos é o que precisamos.",
    "Não viva preso ao passado, mas use-o como inspiração para criar algo novo.",
    "Mesmo distante, mantenha vivos os laços de amor e amizade.",
    "Aproveite cada segundo, pois o tempo não volta, mas sempre traz novas chances.",
    "Permita-se explorar novos horizontes e veja além do que está à sua frente.",
    "Aprenda com cada dificuldade e veja os desafios como oportunidades de superação.",
    "Valorize os momentos simples, pois eles carregam uma paz única.",
    "Sempre há um novo começo, mesmo depois da pior tempestade.",
    "Se cair, levante-se e tente outra vez; só assim você descobrirá sua verdadeira força"
];

// Função para mostrar a saudação e os números
    
    document.getElementById("entrar").addEventListener("click", function() {
        const nome = document.getElementById("nome").value;
        
        if (nome) {
            document.getElementById("formulario").style.display = "none";
            document.getElementById("saudacao").style.display = "block";
            document.getElementById("mensagem-saude").innerHTML = `Olá ${nome}, escolha um número de 0 a 30:`;

        // Preencher a lista de números
        const numeroSelect = document.getElementById("numero");
        for (let i = 0; i < 31; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.innerHTML = i;
            numeroSelect.appendChild(option);
        }
    }
});

// Função para exibir a frase do número selecionado
document.getElementById("escolher-numero").addEventListener("click", function() {
    const numeroEscolhido = document.getElementById("numero").value;
    if (numeroEscolhido !== "") {
        document.getElementById("saudacao").style.display = "none";
        document.getElementById("frase").style.display = "block";
        document.getElementById("mensagem-frase").innerHTML = `${numeroEscolhido} - ESSA FRASE É PARA VOCÊ: ${frases[numeroEscolhido]}`;

        // Exibir a música e link do YouTube
        const musica = [
            { nome: "Passarinhos", cantor: "Emicida feat. Vanessa da Mata", ano: 2015, compositor: "Emicida, Vanessa da Mata, Daniel Ganjaman", link: "https://youtu.be/JwQXW7fNeV8?si=_4tSd3muZU_nFVbi" },
  { nome: "Sonhador", cantor: "Leandro e Leonardo", ano: 1991, compositor: "Cesar Augusto", link: "https://youtu.be/Tw6vosUnGdc?si=GgcLupsewcVyRVAQ" },
  { nome: "The Night We Met", cantor: "Lord Huron", ano: 2015, compositor: "Ben Schneider, membros da banda Lord Huron", link: "https://youtu.be/KtlgYxa6BMU?si=ukRJ8NGSfL5xsee6" },
  { nome: "A Sua Maneira", cantor: "Capital Inicial", ano: 2002, compositor: "Gustavo Cerati, Zeta Bosio", link: "https://youtu.be/nXLyy2ALJE4?si=gMJtHf86drFTelx5" },
  { nome: "Wars", cantor: "The Strumbellas", ano: 2016, compositor: "Simon Ward, integrantes da banda", link: "https://youtu.be/ppa1U7D-tCo?si=393_puSyMg1BtVQT" },
  { nome: "Idiota", cantor: "Jão", ano: 2022, compositor: "Jão, Pedro Tófani, Zebu", link: "https://youtu.be/PPGjmXlWyc4?si=1U6pXvO7R03r5WEG" },
  { nome: "Com ou Sem Mim", cantor: "Gustavo Mioto", ano: 2019, compositor: "Junior Gomes, Vinícius Poeta, Benício Neto, Renno Poeta", link: "https://youtu.be/htc1z4Uv0HA?si=9Alr0KZKCo9M9d3V" },
  { nome: "Noite", cantor: "Tiê", ano: 2014, compositor: "Tiê, André Whoong, Helio Flanders", link: "https://youtu.be/1Ngn3fZIK2E?si=YeUfVVRaLsWEVhop" },
  { nome: "Iris", cantor: "Goo Goo Dolls", ano: 1998, compositor: "John Rzeznik", link: "https://youtu.be/_PIU9iile-I?si=rwDclxP8YMI6wH7Y" },
  { nome: "Atlantis", cantor: "Seafret", ano: 2016, compositor: "Jack Sedman, Harry Draper", link: "https://youtu.be/UrriF1AvgLY?si=EMtwdZwb0aE7KsJI" },
  { nome: "Riptide", cantor: "Vance Joy", ano: 2013, compositor: "Vance Joy", link: "https://youtu.be/W9zFXOEESy0?si=oncTYJEZHVXZDAQY" },
  { nome: "Heroes", cantor: "David Bowie", ano: 1977, compositor: "David Bowie, Brian Eno", link: "https://youtu.be/lXgkuM2NhYI?si=Cuufe0ogjU4h1m0k" },
  { nome: "Wildfire", cantor: "Seafret", ano: 2015, compositor: "Jack Sedman, Harry Draper", link: "https://youtu.be/qCcoSdwByJE?si=SmDnXM_6weEPlBVZ" },
  { nome: "My Demons", cantor: "Starset", ano: 2014, compositor: "Dustin Bates, Rob Graves", link: "https://youtu.be/nkll0StZJLA?si=lCu_fMr92FiIJ3sF" },
  { nome: "Seven Nation Army", cantor: "The White Stripes", ano: 2003, compositor: "Jack White", link: "https://youtu.be/KcZ73FRFLzY?si=xB8BEjlAgC4LJ3Gf" },
  { nome: "City of Angels", cantor: "Arrows to Athens", ano: 2011, compositor: "David Hodges, Steven Solomon", link: "https://youtu.be/ACYyOiLv9UI?si=O6j-rFRIJGWDTc66" },
  { nome: "Those Eyes", cantor: "New West", ano: 2019, compositor: "New West", link: "https://youtu.be/i9UDD6zyCGs?si=L9xIkmnVlmFu8rZz" },
  { nome: "Dream", cantor: "Imagine Dragons", ano: 2012, compositor: "Dan Reynolds, Wayne Sermon, Ben McKee, Josh Mosser", link: "https://youtu.be/oV4hnsTJs5c?si=EHYNqMGYd09rcj5L" },
  { nome: "Lo Siento", cantor: "Rebelde (série 2022)", ano: 2022, compositor: "Desconhecido", link: "https://youtu.be/F-Md62pOlwU?si=ODhNXVE__f51-W9m" },
  { nome: "Fix You", cantor: "Coldplay", ano: 2005, compositor: "Chris Martin, Guy Berryman, Jonny Buckland, Will Champion", link: "https://youtu.be/k4V3Mo61fJM?si=eSKkjZ_vfIoAK0-7" },
  { nome: "Sozinho", cantor: "Peninha", ano: 1996, compositor: "Peninha (José Augusto Gomes)", link: "https://youtu.be/sGC8g0DJ0_E?si=7A82Qy5xBtM8QZgb" },
  { nome: "Sinônimos", cantor: "Zé Ramalho e Chitãozinho & Xororó", ano: 2004, compositor: "César Augusto, Cláudio Noam", link: "https://youtu.be/7EjIdjKNRls?si=uyQMfKpCuuIvkDHK" },
  { nome: "Me Encontra", cantor: "Charlie Brown Jr.", ano: 2005, compositor: "Chorão", link: "https://youtu.be/eG4mIKjrOq0?si=ZD7GaAM_B8heCLo6" },
  { nome: "The One That Got Away", cantor: "Katy Perry", ano: 2011, compositor: "Katy Perry, Dr. Luke, Max Martin, Bonnie McKee", link: "https://youtu.be/Ahha3Cqe_fk?si=bkPVbfyZJde1mGGn" },
  { nome: "Aonde Quer Que Eu Vá", cantor: "Jota Quest", ano: 2000, compositor: "Rogério Flausino, PJ", link: "https://youtu.be/eSXjkIg1gGE?si=cGTIxwk_0ihfoV5Z" },
  { nome: "Tempo Perdido", cantor: "Legião Urbana", ano: 1986, compositor: "Renato Russo", link: "https://youtu.be/YPLQHeUSX2g?si=AkW76U8-5GB76sai" },
  { nome: "Além do Horizonte", cantor: "Jota quest", ano: 1975, compositor: "Roberto Carlos, Erasmo Carlos/versão original", link: "https://youtu.be/KnmWg7aEyiE?si=soEP4mvUCpgfNjE8" },
  { nome: "Vou Ter Que Superar", cantor: "Matheus & Kauan feat. Marília Mendonça", ano: 2018, compositor: "Júnior Angelim, Elcio di Carvalho, Gabriel Agra", link: "https://youtu.be/IJmxyfbRg0A?si=H8LtcvmghzeKrU35" },
  { nome: "Tarde de Outubro", cantor: "CPM 22", ano: 2005, compositor: "Badauí, integrantes da banda", link: "https://youtu.be/YsnMBgJjHZ4?si=h9JQwH2XvSZK7chA" },
  { nome: "Hoje o Céu Abriu", cantor: "NX Zero", ano: 2012, compositor: "Di Ferrero, Gee Rocha, Lucas Silveira", link: "https://youtu.be/CghyordaVM8?si=fEGbM1OPNf98asFh" },
  { nome: "Tente Outra Vez", cantor: "Raul Seixas", ano: 1975, compositor: "Raul Seixas, Paulo Coelho, Marcelo Motta", link: "https://youtu.be/hu_XSw4e9GU?si=tiAxQ-zvNfRM2s6k"
  }
        ];

        const musicaEscolhida = musica[numeroEscolhido]; // Escolhe a música correspondente ao número

        document.getElementById("musica").style.display = "block";
        document.getElementById("nome-musica").innerHTML = musicaEscolhida.nome;
        document.getElementById("artista-musica").innerHTML = `${musicaEscolhida.cantor} - ${musicaEscolhida.compositor}`;
        document.getElementById("ano-lancamento").innerHTML = musicaEscolhida.ano;
        document.getElementById("link-youtube").setAttribute("href", musicaEscolhida.link);
    }
});