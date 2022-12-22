const replaceTemplateVariables = (rootElement, variables) => {
    if (!variables) return rootElement
    let elements = [...rootElement.querySelectorAll("*")]
    elements.forEach(elem => {
        // Replace variables in element attributes
        let attributes = elem.attributes;
        for (let i = 0; i < attributes.length; i++) {
            let attribute = attributes[i];
            attribute.value = attribute.value.replace(/\{\{(.+?)\}\}/g, function (match, varName) {
                return variables[varName] || '';
            });
        }
        const text = [].reduce.call(elem.childNodes, (a, b) => a + (b.nodeType === 3 ? b.textContent : ''), '');
        const match = text.match(/{{(.*?)}}/)
        if (match && match.length === 2) elem.innerText = elem.innerText.replaceAll("{{" + match[1] + "}}", variables[match[1]])
    })
    return rootElement
}

const cloneTemplate = ({ selector = 'template', variables }) => {
    const template = document.querySelector(selector)
    let clone = template.content.cloneNode(true)    
    clone = replaceTemplateVariables(clone, variables)
    return clone
}