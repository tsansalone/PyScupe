const input = document.getElementById('qtdMercType');

input.addEventListener('change', updateValue);

function updateValue(e) {
  mercs = parseInt(e.target.value);
  createFormQtdMerc(mercs);
}

function createFormQtdMerc(qtd){
    removeElementsByClass('output')
    let element = document.getElementById("qtdMercs");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    for(let i = 0; i < qtd; i++){
        const newInput = document.createElement("input")
        newInput.setAttribute("id", 'merc'+(i+1))
        newInput.setAttribute("type", "number")
        newInput.setAttribute("value", 'merc'+(i+1) )
        newInput.setAttribute("placeholder", 'Qtd Mercadoria '+(i+1))
        newInput.setAttribute("min", 0)
        element.append(newInput)

    }
    createFormCusto()
}

function createFormCusto(){
    let element = document.getElementById("custoMercs");
    let custos = ["mp","ggp","mod"]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    for(let i = 0; i<custos.length;i++){
        var newInput = document.createElement("input")
        newInput.setAttribute("id", custos[i])
        newInput.setAttribute("type", "number")
        newInput.setAttribute("value", custos[i])
        newInput.setAttribute("placeholder", custos[i])
        newInput.setAttribute("min", 0)
        element.append(newInput)
    }

}

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
