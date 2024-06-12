document.addEventListener('DOMContentLoaded', () => {
    const languageToggleButton = document.getElementById('btn_translate');
    const languageText = document.getElementById('language-text');
    const currentLanguage = localStorage.getItem('language') || 'pt-br';
    const increaseFontButton = document.getElementById('btn_increase');
    const decreaseFontButton = document.getElementById('btn_decrease');

    updateTexts(currentLanguage);

    languageToggleButton.addEventListener('click', () => {
        let currentLanguage = languageText.textContent;
        const newLanguage = currentLanguage === 'pt-br' ? 'en-us' : currentLanguage === 'en-us' ? 'es-la' : 'pt-br';
        languageText.textContent = newLanguage;
        localStorage.setItem('language', newLanguage);
        updateTexts(newLanguage);
    });

    increaseFontButton.addEventListener('click', () => {
        
    });

    decreaseFontButton.addEventListener('click', () => {
        
    });
});

function updateTexts(language) {
    const texts = {
        'pt-br': {
            'nav-about': 'Sobre mim',
            'nav-tech': 'Tecnologias',
            'nav-projects': 'Projetos',
            'welcome-text': 'Olá, meu nome é João',
            'about-title': 'Sobre mim',
            'about-text': 'Desenvolvedor de Sistemas e Designer UX/UI focado no futuro, com um histórico de iniciação em programação através da robótica e liderança como Cyber Leader na escola. Fiz cursos de lógica durante as férias para aprimorar minhas habilidades e, em 2023, estou cursando um curso técnico que me proporcionou aprendizado intensivo e interações práticas com softwares. Participei de diversos projetos em grupo e individuais, conquistando reconhecimento na área e competindo em eventos tecnológicos. Entre em contato para saber como posso contribuir para o crescimento da sua empresa.',
            'tech-title': 'Tecnologias',
            'projects-title': 'Projetos',
            'contact-title': 'Quer conhecer mais? Entre em contato!',
            'contact-button': 'Contato'
        },
        'en-us': {
            'nav-about': 'About me',
            'nav-tech': 'Technologies',
            'nav-projects': 'Projects',
            'welcome-text': 'Hello, my name is João',
            'about-title': 'About me',
            'about-text': 'System Developer and UX/UI Designer focused on the future, with a history of initiation in programming through robotics and leadership as a Cyber Leader at school. I took logic courses during the holidays to improve my skills and, in 2023, I am taking a technical course that provided intensive learning and practical interactions with software. I have participated in several group and individual projects, gaining recognition in the area and competing in technology events. Contact me to learn how I can contribute to the growth of your company.',
            'tech-title': 'Technologies',
            'projects-title': 'Projects',
            'contact-title': 'Want to know more? Get in touch!',
            'contact-button': 'Contact'
        },
        'es-la': {
            'nav-about': 'Sobre mí',
            'nav-tech': 'Tecnologías',
            'nav-projects': 'Proyectos',
            'welcome-text': 'Hola, mi nombre es João',
            'about-title': 'Sobre mí',
            'about-text': 'Desarrollador de Sistemas y Diseñador UX/UI enfocado en el futuro, con un historial de iniciación en programación a través de la robótica y liderazgo como Cyber Leader en la escuela. Tomé cursos de lógica durante las vacaciones para mejorar mis habilidades y, en 2023, estoy tomando un curso técnico que me proporcionó aprendizaje intensivo e interacciones prácticas con software. He participado en varios proyectos grupales e individuales, ganando reconocimiento en el área y compitiendo en eventos tecnológicos. Contáctame para saber cómo puedo contribuir al crecimiento de tu empresa.',
            'tech-title': 'Tecnologías',
            'projects-title': 'Proyectos',
            'contact-title': '¿Quieres saber más? ¡Ponte en contacto!',
            'contact-button': 'Contacto'
        }
    };

    Object.keys(texts[language]).forEach(id => {
        document.getElementById(id).textContent = texts[language][id];
    });
}