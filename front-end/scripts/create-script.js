//Caminho para chamar as informações do estado
// function popularUFs(){
//     const ufSelect = document.querySelector("select[name=uf]")

//     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//     .then(res => res.json() )
//     .then( states => {

//         for( const  state of states){
//             ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
//         }
//     })
// }

// popularUFs()


// document
// .querySelector("select[name=uf]")
// .addEventListener("change", () => {
//     console.log("mudei")
// })

function popularUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )
    .then( states => {

        for( const  state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

popularUFs()

//municipios

function getCities(event){
    const citySelect = document.querySelector("[name=city]")
    //campo escondido no html para toda vez que ele trocar o uf
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    //campo escondido no html
    const  indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<oprion value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json() )
    .then( cities => {

        for( const  city of cities){
            citySelect.innerHTML += `<option value="${city.name}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)


//intens de coleta
//Pegar todos os itens da li

const itensToCollect = document.querySelectorAll(".items-grid li")

for( const item of itensToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems =  document.querySelector("input[name=items]")

//criar uma variavel, para enviar os dados selecionada pelo usuario
//vazio
let selectedItems = []
 
function handleSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover uma classe no javascripty
    itemLi.classList.toggle("selected")

    const itemId = event.target.dataset.id
    



    //verificar se existem items selecionados, se sim 
    //pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( item => {
        // verificação
        const itemFound  = item == itemId //isso será true ou false
        return itemFound    
    })

    //se ja estiver selecionado,
    if(alreadySelected  >= 0){
        // tirar da seleção
        const filteredItems = selectedItems.filter(item =>{       
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent     
        })

        selectedItems = filteredItems
           //se não estiver selecionado, 
    }else{
         //adciocionar a seleção
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido com os items selecionados
    collectedItems.value = selectedItems
}