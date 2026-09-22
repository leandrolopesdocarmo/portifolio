// ==========================================
// EFEITO DE DIGITAÇÃO
// ==========================================

function escrevendoLetra() {

    function ativaLetra(elemento) {

        const arrTexto = elemento.innerHTML.split('');

        elemento.innerHTML = '';

        arrTexto.forEach((letra, i) => {

            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 75 * i);

        });

    }

    const titulo = document.querySelector('.digitando');

    if (titulo) {
        ativaLetra(titulo);
    }

}

escrevendoLetra();


// ==========================================
// EXPERIÊNCIA E EDUCAÇÃO
// ==========================================

function sobreMim() {

    const divExperiencia =
        document.querySelectorAll('.experience_content div');

    const liExperiencia =
        document.querySelectorAll('.experience_content ul li');


    const divEducation =
        document.querySelectorAll('.education_content div');

    const liEducation =
        document.querySelectorAll('.education_content ul li');


    // Primeiro item da experiência
    if (divExperiencia.length > 0) {
        divExperiencia[0].classList.add('ativo');
        liExperiencia[0].classList.add('ativo');
    }


    // Primeiro item da educação
    if (divEducation.length > 0) {
        divEducation[0].classList.add('ativo');
        liEducation[0].classList.add('ativo');
    }


    // ------------------------------------------
    // EXPERIÊNCIA
    // ------------------------------------------

    function slideShow(index) {

        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });

        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });


        divExperiencia[index].classList.add('ativo');

        liExperiencia[index].classList.add('ativo');
    }


    liExperiencia.forEach((event, index) => {

        event.addEventListener('click', () => {

            slideShow(index);

        });

    });


    // ------------------------------------------
    // EDUCAÇÃO
    // ------------------------------------------

    function slideShow2(index) {

        divEducation.forEach((div) => {
            div.classList.remove('ativo');
        });

        liEducation.forEach((botao) => {
            botao.classList.remove('ativo');
        });


        divEducation[index].classList.add('ativo');

        liEducation[index].classList.add('ativo');
    }


    liEducation.forEach((event, index) => {

        event.addEventListener('click', () => {

            slideShow2(index);

        });

    });

}

sobreMim();


// ==========================================
// FILTRO DOS PROJETOS
// ==========================================

const listaALL =
    document.querySelectorAll('.projects_armazenamento ul li');

const buttonGeral =
    document.querySelectorAll('.projects_models ul li');


// ------------------------------------------
// REMOVE O BOTÃO ATIVO
// ------------------------------------------

function removeClick(index) {

    buttonGeral.forEach((item) => {

        item.classList.remove('ativo');

    });


    buttonGeral[index].classList.add('ativo');
}


// ------------------------------------------
// MOSTRA OS PROJETOS
// ------------------------------------------

function showLista(lista, button = 'all') {

    lista.forEach((item) => {

        item.classList.remove('ativo');

    });


    lista.forEach((item) => {

        if (
            button === 'all' ||
            item.classList.contains(button)
        ) {

            item.classList.add('ativo');

        }

    });

}


// ------------------------------------------
// CLIQUE NOS BOTÕES DE FILTRO
// ------------------------------------------

buttonGeral.forEach((event, index) => {

    event.addEventListener('click', () => {

        removeClick(index);

        const currentButton = event;


        // TODOS
        if (currentButton.classList.contains('all')) {

            showLista(listaALL, 'all');

        }


        // LANDING PAGE
        if (currentButton.classList.contains('desenvolvimento')) {

            showLista(listaALL, 'desenvolvimento');

        }


        // WEBSITES
        if (currentButton.classList.contains('website')) {

            showLista(listaALL, 'website');

        }

    });

});


// ==========================================
// MOSTRA TODOS OS PROJETOS AO CARREGAR
// ==========================================

showLista(listaALL, 'all');