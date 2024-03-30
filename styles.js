const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];
const email = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizarTabela();
});    

    function adicionaLinha(){

    const inputNomeContato = document.getElementById('nome');
    const inputTelefoneContato = document.getElementById('telefone');
    const inputEmaildoContato = document.getElementById('email');

    if (nome.includes(inputNomeContato.value)){
        alert(`Esse contato já foi inserido em sua agenda.`);
    }else{
        nome.push(inputNomeContato.value);
        telefone.push(parseFloat(inputTelefoneContato.value));
        email.push(parseFloat(inputEmaildoContato.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `<td>${inputEmaildoContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
    inputEmaildoContato.value = '';
}

function atualizarTabela(){
const listaContatos = document.querySelector('tbody');
listaContatos.innerHTML = linhas;
};






