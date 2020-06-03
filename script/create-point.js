

function fecthLocalities(url, selector_name) {
    fetch(url)
    .then(res =>  res.json() )
    .then(localities => {
        
        selector = document.querySelector(selector_name)
        console.log(selector.document + "vacas")

        // if (selector_name == "select[name=uf]") {
        //     selector.innerHTML = `<option value="">selecionar o estado</option>`
        // } else if (selector_name == "select[name=city]") {
        //     selector.innerHTML = `<option value="">selecionar a cidade</option>`
        // }   
        selector.innerHTML = `<option value="">selecionar o local</option>`                                            
        

        for (var locality of localities) {
            selector.innerHTML += `<option value="${locality.id}">${locality.nome}</option>`

        }
    })
}

function populateUFs() {
    fecthLocalities("https://servicodados.ibge.gov.br/api/v1/localidades/estados", "select[name=uf]")
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexSelectState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`


    fecthLocalities(url, "select[name=city]")

    citySelect.disabled = false
}

populateUFs()

document
    .querySelector("select[name=uf]")
    .addEventListener('change', getCities)
