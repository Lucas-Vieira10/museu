function showPopup(band) {
    const popup = document.getElementById('popup');
    const title = document.getElementById('popup-title');
    const description = document.getElementById('popup-description');

    const bandInfo = {
        mamonas: {
            title: 'Mamonas Assassinas',
            description: 'Uma banda brasileira de rock cômico que fez sucesso nos anos 90, conhecida por suas letras irreverentes e performances engraçadas. Com muito humor e espontaneidade os mamonas levaram alegria para os corações de muitos...'
        },
        nirvana: {
            title: 'Nirvana',
            description: 'Nirvana é uma palavra do contexto do budismo, que significa o estado de libertação atingido pelo ser humano ao percorrer sua busca espiritual...'
        },
        redhot: {
            title: 'Red Hot Chili Peppers',
            description: 'Com seu estilo único de funk rock, a banda californiana se tornou uma das mais influentes da história do rock Red Hot Chili Peppers é uma banda de rock dos Estados Unidos formada em Los Angeles, Califórnia, em 1983. O estilo musical do grupo consiste principalmente no funk rock, bem como elementos de outros gêneros, tais como punk, rock alternativo, rap rock e rock psicodélico...'
        },
        cbjr: {
            title: 'CBJR',
            description: 'A banda de rock brasileira que capturou a essência do rock nacional no início dos anos 2000, com hits memoráveis Charlie Brown Jr. foi uma banda brasileira de rock formada em 1992 na cidade de Santos, por Chorão, Champignon, Marcão Britto, Thiago Castanho e Renato Pelado. Sua discografia contabiliza 13 álbuns de estúdio lançados, 4 álbuns ao vivo e 7 DVDs...'
        },
        legiao: {
            title: 'Legião urbana',
            description: 'A banda de rock brasileira que capturou a essência do rock nacional no início dos anos 2000, com hits memoráveis Charlie Brown Jr. foi uma banda brasileira de rock formada em 1992 na cidade de Santos, por Chorão, Champignon, Marcão Britto, Thiago Castanho e Renato Pelado. Sua discografia contabiliza 13 álbuns de estúdio lançados, 4 álbuns ao vivo e 7 DVDs...'
        },
        sidney: {
            title: 'sidney',
            description: 'Sidney Magal é um cantor e ator brasileiro, famoso por suas performances vibrantes e hits como "Sandra Rosa Madalena" e "Meu Sangue Ferve por Você". Ele se destacou nas décadas de 1970 e 1980, tornando-se uma figura icônica da música popular brasileira.'
        }
        
    };

    if (bandInfo[band]) {
        title.innerText = bandInfo[band].title;
        description.innerText = bandInfo[band].description;
    }

    popup.style.display = 'flex';
}


function sair(sair) {
    var resposta = confirm("Você deseja mesmo sair?");
if (resposta) {
alert("obrigado pela visita, até mais");
} else {
alert("que bom que ficou!");
}
}
function quiz() {
    document.getElementById("quiz-popup").style.display = 'flex';
    
}

function checkAnswer(answer) {
    const feedback = answer === 'certo' ? "Correto!" : "Errado! Tente novamente.";
    alert(feedback);
    closePopup
    
}
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}