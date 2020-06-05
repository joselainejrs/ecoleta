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

    fetch(url)
    .then(res => res.json() )
    .then( cities => {

        for( const  city of cities){
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}


document
.querySelector("select[name=uf]")
.addEventListener("change", getCities)