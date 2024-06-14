document.addEventListener('DOMContentLoaded', () => {
    let initialFontSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--txt-regular'));
    let currentFontSize = initialFontSize;
    const minFontSize = initialFontSize;
    const maxFontSize = initialFontSize * 1.2;

    function aumentar() {
        if (currentFontSize < maxFontSize) {
            currentFontSize *= 1.1;
            if (currentFontSize > maxFontSize) {
                currentFontSize = maxFontSize;
            }
            ajustarFonte();
        }
    }

    function diminuir() {
        if (currentFontSize > minFontSize) {
            currentFontSize *= 0.9;
            if (currentFontSize < minFontSize) {
                currentFontSize = minFontSize;
            }
            ajustarFonte();
        }
    }

    function ajustarFonte() {
        document.documentElement.style.setProperty('--txt-regular', `${currentFontSize}px`);
        document.documentElement.style.setProperty('--txt-medium', `${currentFontSize * 1.25}px`);
        document.documentElement.style.setProperty('--txt-semibold', `${currentFontSize * 1.5}px`);
        document.documentElement.style.setProperty('--txt-bold', `${currentFontSize * 1.75}px`);
        document.documentElement.style.setProperty('--txt-black', `${currentFontSize * 2.5}px`);
    }

    document.querySelector('.btn_nav[onclick="aumentar()"]').addEventListener('click', aumentar);
    document.querySelector('.btn_nav[onclick="diminuir()"]').addEventListener('click', diminuir);
});