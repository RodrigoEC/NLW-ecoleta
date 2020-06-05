

function fecthLocalities(url, selector, isCity) {
    fetch(url)
    .then(res =>  res.json() )
    .then(localities => {
        
        selector.innerHTML = `<option value="">selecionar localidade</option>`


        let valueLocality

        for (var locality of localities) {
            if (isCity) {
                valueLocality = locality.nome
            } else {
                valueLocality = locality.id
            }

            selector.innerHTML += `<option value="${valueLocality}">${locality.nome}</option>`

        }
    })
}

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")


    fecthLocalities("https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    ufSelect,
    false
    )
}

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")


    const indexSelectState = event.target.selectedIndex
    stateInput.value = event.target.options[indexSelectState].text

    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fecthLocalities(url, citySelect, true)

    citySelect.disabled = false
}

populateUFs()

document
    .querySelector("select[name=uf]")
    .addEventListener('change', getCities)


const collectedItems = document.querySelector("input[name=items")

// Itens de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")


for (item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem)
}

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // add or remove a class with JS using the classlist method "toggle"
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(
        item => item == itemId 
        // retorns true or false if the item was selected or not
    )


    if (alreadySelected != -1) {
        // Remove from selected collection

        const filteredItems = selectedItems.filter(item => item != itemId)

        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }


    collectedItems.value = selectedItems
    console.log(collectedItems)

}



// for (item of itemsToCollect) {
//     item.addEventListener('mouseover', addSelectedItem)
//     item.addEventListener('mouseout', removeSelectedItem)
// }

// function addSelectedItem(event) {
//     const itemLi = event.target

//     // add or remove a class with JS using the classlist method "toggle"
//     itemLi.classList.add("selected")

//     const itemId = itemLi.dataset.id
//     console.log()
// }

// function removeSelectedItem(event) {
//     const itemLi = event.target

//     itemLi.classList.remove("selected")

//     const itemId = itemLi.dataset.id

// }