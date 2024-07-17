document.addEventListener('DOMContentLoaded', () => {
    const languageToggleButton = document.getElementById('btn_translate');
    const languageText = document.getElementById('language-text');
    const currentLanguage = localStorage.getItem('language') || 'PT-BR';

    languageToggleButton.addEventListener('click', () => {
        let currentLanguage = languageText.textContent;
        const newLanguage = currentLanguage === 'PT-BR' ? 'EN-US' : currentLanguage === 'EN-US' ? 'ES-LA' : 'PT-BR';
        languageText.textContent = newLanguage;
        localStorage.setItem('language', newLanguage);
        updateTexts(newLanguage);
    });

    updateTexts(currentLanguage);
});

function updateTexts(language) {
    const texts = {
        'PT-BR': {
            'language-text': 'PT-BR',
            'about': 'Sobre mim',
            'awards': 'Prêmios',
            'projects': 'Projetos',
            'hiPresentation': 'Olá, meu nome é João',
            'partAbout': 'Sobre mim',
            'subAbout': 'Me conheça',
            'aboutMe': 'Olá, sou o João Genesio, tenho 18 anos e sou apaixonado por programação e design UX/UI. Concluí diversos cursos de lógica de programação e estou em um curso técnico intensivo. Participo de projetos reconhecidos e competições tecnológicas, buscando sempre novos desafios. Minha abordagem une criatividade e foco em soluções tecnológicas eficientes e centradas no usuário.',
            'skills': 'Habilidades',
            'subSkills': 'E vem mais...',
            'partAwards': 'Prêmios',
            'subAwards': 'Conheça meu empenho e colaboração',
            'colocationHP': 'Colocação: 1°Lugar',
            'challengeHP': 'Desafio: Mensurar a economia de carbono proporcionada pelo trabalho híbrido',
            'ideaHP': 'Ideia: HP Green',
            'viewHP': '<img src="assets/icon/visibility.svg" alt="">To visualizar',
            'colocationJS': 'Colocação: 2°Lugar',
            'challengeJS': 'Desafio: Inteligência Artificial na Mobilidade, liderado pela empresa SCANIA',
            'ideaJS': 'Ideia: Projeto STK',
            'viewJS': '<img src="assets/icon/visibility.svg" alt="">Visualizar',
            'partProjects': 'Projetos',
            'subProjects': 'Conheça como eu aplico meus conhecimentos',
            'partFooter': 'Quer conhecer mais? Entre em contato!',
            'contact': '<img src="assets/icon/email.svg" alt="">Contato'
        },
        'EN-US': {
            'language-text': 'EN-US',
            'about': 'About me',
            'awards': 'Awards',
            'projects': 'Projects',
            'hiPresentation': 'Hello, my name is João',
            'partAbout': 'About me',
            'subAbout': 'Know me',
            'aboutMe': `Hello, I'm João Genesio, I'm 18 years old and I'm passionate about programming and UX/UI design. I have completed several programming logic courses and am taking an intensive technical course. I participate in recognized projects and technological competitions, always seeking new challenges. My approach combines creativity and focus on efficient and user-centered technological solutions.`,
            'skills': 'Skills',
            'subSkills': 'And more comes...',
            'partAwards': 'Awards',
            'subAwards': 'Discover my commitment and collaboration',
            'colocationHP': 'Placement: 1st Place',
            'challengeHP': 'Challenge: Measure the carbon savings provided by hybrid work',
            'ideaHP': 'Idea: HP Green',
            'viewHP': '<img src="assets/icon/visibility.svg" alt="">To view',
            'colocationJS': 'Placement: 2nd Place',
            'challengeJS': 'Challenge: Artificial Intelligence in Mobility, led by SCANIA',
            'ideaJS': 'Idea: Projeto STK',
            'viewJS': '<img src="assets/icon/visibility.svg" alt="">To view',
            'partProjects': 'Projects',
            'subProjects': 'Find out how I apply my knowledge',
            'partFooter': 'Want to know more? Contact!',
            'contact': '<img src="assets/icon/email.svg" alt="">Contact'
        },
        'ES-LA': {
            'language-text': 'ES-LA',
            'about': 'Sobre mí',
            'awards': 'Premios',
            'projects': 'Proyectos',
            'hiPresentation': 'Hola, mi nobre es João',
            'partAbout': 'Sobre mí',
            'subAbout': 'Conoceme',
            'aboutMe': 'Hola, soy João Genesio, tengo 18 años y me apasiona la programación y el diseño UX/UI. He realizado varios cursos de lógica de programación y estoy realizando un curso técnico intensivo. Participo en proyectos reconocidos y concursos tecnológicos, buscando siempre nuevos desafíos. Mi enfoque combina creatividad y enfoque en soluciones tecnológicas eficientes y centradas en el usuario.',
            'skills': 'Habilidades',
            'subSkills': 'Y viene más...',
            'partAwards': 'Premios',
            'subAwards': 'Descubre mi compromiso y colaboración',
            'colocationHP': 'Colocación: 1er lugar',
            'challengeHP': 'Desafío: medir el ahorro de carbono que proporciona el trabajo híbrido',
            'ideaHP': 'Idea: HP Green',
            'viewHP': '<img src="assets/icon/visibility.svg" alt="">Explorar',
            'colocationJS': 'Colocación: 2do lugar',
            'challengeJS': 'Desafio: Inteligencia Artificial en Movilidad, liderado por SCANIA',
            'ideaJS': 'Idea: Projeto STK',
            'viewJS': '<img src="assets/icon/visibility.svg" alt="">Explorar',
            'partProjects': 'Proyectos',
            'subProjects': 'Descubre cómo aplico mis conocimientos',
            'partFooter': '¿Quiere saber más? ¡Entre en contacto!',
            'contact': '<img src="assets/icon/email.svg" alt="">Contacto'
        }
    };

    Object.keys(texts[language]).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = texts[language][id];
        }
    });
}