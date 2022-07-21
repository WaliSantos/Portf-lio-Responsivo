const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const getStyle = (element, style) =>
    window
    .getComputedStyle(element)
    .getPropertyValue(style)


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorSheck: getStyle(html, "--color-sheck"),
    colorBurguer: getStyle(html, "--color-burguer"),


}
const darkMode = {
    bg: " #1c1c1c",
    bgPanel: "#434343",
    colorHeadings: "#FAF4E6",
    colorText: "#FAF4E6",
    colorSheck: "#434343",
    colorburguer: "#1c1c1c",

}



const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    console.log(colors)
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key]))

}

checkbox.addEventListener("change", ({ target }) => {
        target.checked ? changeColors(darkMode) : changeColors(initialColors)
    }) <
    script
script >
    /* o código abaixo foi uma tentativa de fazer o menu hamburguer. 
    No entanto, não consegui. Na verdade, acredito que minha organização no início da do trabalho no html me deixou confuso aqui no final.
    Anotação para voltar depois do feedback*/
    script >


    function toggleMenu() {
        const section = document.getElementsByClassName('section')
        section.aList.toggle("active")
    }
burguer.addEventListener("click", toggleMenu)