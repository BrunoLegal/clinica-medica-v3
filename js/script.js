// IDs para médicos e atendentes
var medicoId = 1;
var atendenteId = 1;
var selectedRow = null;

// Função para mostrar o formulário selecionado e ocultar a lista
function mostrarFormulario(formId) {
    document.getElementById("formMedico").style.display = "none";
    document.getElementById("formAtendente").style.display = "none";
    document.getElementById(formId).style.display = "block";
    document.getElementById('formularioContainer').classList.remove('hidden');
    document.getElementById('listaFuncionarios').classList.add('hidden');
}

// Função para mostrar a lista de funcionários
function mostrarListaFuncionarios() {
    document.getElementById('formularioContainer').classList.add('hidden');
    document.getElementById('listaFuncionarios').classList.remove('hidden');
    document.getElementById('titulo').innerText = "Lista de Funcionários";
}

// Função para mostrar a área de cadastro e ajustar o título
function mostrarCadastroFuncionarios() {
    document.getElementById('titulo').innerText = "Cadastrar Funcionário";
    document.getElementById('formularioContainer').classList.remove('hidden');
    document.getElementById('listaFuncionarios').classList.add('hidden');
    

    document.getElementById("formMedico").style.display = "none";
    document.getElementById("formAtendente").style.display = "none";
}


// Funções de cadastro de médicos
function cadastrarFuncionarioMedico() {
    event.preventDefault();
    var formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        CRM: document.getElementById("CRM").value
    };

    if (selectedRow == null) {
        var table = document.getElementById("listaMedicos").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        newRow.insertCell(0).innerHTML = medicoId++;
        newRow.insertCell(1).innerHTML = formData.nome;
        newRow.insertCell(2).innerHTML = formData.email;
        newRow.insertCell(3).innerHTML = formData.CRM;
        newRow.insertCell(4).innerHTML = '<button onClick="onEditMedico(this)">Editar</button> <button onClick="onDeleteMedico(this)">Deletar</button>';
    } else {
        selectedRow.cells[1].innerHTML = formData.nome;
        selectedRow.cells[2].innerHTML = formData.email;
        selectedRow.cells[3].innerHTML = formData.CRM;
        selectedRow = null;
    }
    document.getElementById("formMedico").reset();
}

// Função para editar médico
function onEditMedico(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("CRM").value = selectedRow.cells[3].innerHTML;
    mostrarFormulario("formMedico");
}

// Função para deletar médico
function onDeleteMedico(td) {
    if (confirm('Deseja deletar este médico?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("listaMedicos").deleteRow(row.rowIndex);
    }
}

// Funções de cadastro de atendentes
function cadastrarFuncionarioAtendente() {
    event.preventDefault();
    var formData = {
        nome: document.getElementById("nomeAtendente").value,
        funcao: document.getElementById("funcao").value,
        horario: document.getElementById("horario").value
    };

    if (selectedRow == null) {
        var table = document.getElementById("listaAtendentes").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.length);
        newRow.insertCell(0).innerHTML = atendenteId++;
        newRow.insertCell(1).innerHTML = formData.nome;
        newRow.insertCell(2).innerHTML = formData.funcao;
        newRow.insertCell(3).innerHTML = formData.horario;
        newRow.insertCell(4).innerHTML = '<button onClick="onEditAtendente(this)">Editar</button> <button onClick="onDeleteAtendente(this)">Deletar</button>';
    } else {
        selectedRow.cells[1].innerHTML = formData.nome;
        selectedRow.cells[2].innerHTML = formData.funcao;
        selectedRow.cells[3].innerHTML = formData.horario;
        selectedRow = null;
    }
    document.getElementById("formAtendente").reset();
}

// Função para editar atendente
function onEditAtendente(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeAtendente").value = selectedRow.cells[1].innerHTML;
    document.getElementById("funcao").value = selectedRow.cells[2].innerHTML;
    document.getElementById("horario").value = selectedRow.cells[3].innerHTML;

    // Ajusta o título e exibe apenas o formulário do atendente para edição
    document.getElementById("titulo").innerText = "Editar Atendente";
    document.getElementById("formularioContainer").classList.remove("hidden");
    document.getElementById("listaFuncionarios").classList.add("hidden");
    document.getElementById("formAtendente").style.display = "block";
    document.getElementById("formMedico").style.display = "none";
}

// Função para deletar atendente
function onDeleteAtendente(td) {
    if (confirm('Deseja deletar este atendente?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("listaAtendentes").deleteRow(row.rowIndex);
    }
}
