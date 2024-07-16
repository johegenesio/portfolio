// Obtém o valor de uma variável CSS
function getCSSVariable(variable) {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(variable));
}

// Define o valor de uma variável CSS
function setCSSVariable(variable, value) {
    document.documentElement.style.setProperty(variable, `${value}px`);
}

// Calcula o tamanho máximo com base no tamanho original
function calculateMaxFontSize(originalSize) {
    return originalSize * 1.15;
}

const variables = ['--h1', '--h2', '--h3', '--h4', '--pf', '--label'];

// Armazenar os tamanhos originais para garantir que possamos comparar corretamente
let originalFontSizes = {};

variables.forEach(variable => {
    originalFontSizes[variable] = getCSSVariable(variable);
});

// Função para aumentar a fonte
function aumentar() {
    variables.forEach(variable => {
        let originalFontSize = originalFontSizes[variable]; // Tamanho original
        let maxFontSize = calculateMaxFontSize(originalFontSize);
        let currentFontSize = getCSSVariable(variable);
        if (currentFontSize < maxFontSize) {
            setCSSVariable(variable, currentFontSize + 2);  // Aumenta em 2 pixels
        }
    });
}

// Função para diminuir a fonte
function diminuir() {
    variables.forEach(variable => {
        let originalFontSize = originalFontSizes[variable]; // Tamanho original
        let currentFontSize = getCSSVariable(variable);
        if (currentFontSize > originalFontSize) {
            setCSSVariable(variable, currentFontSize - 2);  // Diminui em 2 pixels
        }
    });
}

// Vincular as funções aos botões
document.getElementById('btn-increase-font').addEventListener('click', function(event) {
    event.preventDefault();  // Previne a ação padrão do link
    aumentar();
});

document.getElementById('btn-decrease-font').addEventListener('click', function(event) {
    event.preventDefault();  // Previne a ação padrão do link
    diminuir();
});
