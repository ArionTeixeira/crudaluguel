window.onload = function(){
    criarTabela()
}

const form = document.querySelector('form')
const botao = document.querySelector('.button')
const excluir = document.querySelector('.fa')
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    salvarCliente()
    limparCampos()
})



const pegarLocal = () => JSON.parse(localStorage.getItem('dados')) ?? []
const mandarLocal = (baseClient) => localStorage.setItem("dados", JSON.stringify(baseClient)) 

function criarClient(client) {
    const baseClient = pegarLocal()
    baseClient.push(client)
    mandarLocal(baseClient)
}

function deletar(index){
    const baseClient = pegarLocal()
    baseClient.splice(index, 1)
    mandarLocal(baseClient)
    criarTabela()
}


function salvarCliente(){
    const client = {
        nome: document.querySelector('#nome').value ,
        cpf: document.querySelector('#cpf').value,
        carro: document.querySelector('#carro').value,
        placa: document.querySelector('#placa').value,
        dataRetirada: document.querySelector('#dataR').value,
        dataDevolucao: document.querySelector('#dataD').value
    }
    criarClient(client)
    criarTabela()
}

function limparCampos(){
    document.querySelector('#nome').value = ''
    document.querySelector('#cpf').value = ''
    document.querySelector('#carro').value = ''
    document.querySelector('#placa').value = ''
    document.querySelector('#dataR').value = ''
    document.querySelector('#dataD').value = ''
}

function criarTabela(){
    const baseClient = pegarLocal()
    const rows = document.querySelectorAll('tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
    baseClient.forEach(criarLinha)
}

function criarLinha(client, index){
    const linha = document.createElement('tr')
    linha.innerHTML = `
    <td>${client.nome}</td>
    <td>${client.cpf}</td>
    <td>${client.carro}</td>
    <td>${client.placa}</td>
    <td>${client.dataRetirada}</td>
    <td>${client.dataDevolucao}</td> 
    <td><button onclick="deletar(${index})" class="deletar" >Apagar</button></td>
    `
    document.querySelector('#tableClient>tbody').appendChild(linha)
}

