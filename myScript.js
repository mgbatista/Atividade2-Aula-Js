var dados;

function getValuesFromForm() {
    document.getElementById('cadastroStatus').innerHTML = "";
    document.getElementById('imposto').innerHTML = "";
    dados = {
        id: document.getElementById("id").value,
        nome: document.getElementById("nome").value,
        telefone: document.getElementById("telefone").value,
        logradouro: document.getElementById("logradouro").value,
        numero: document.getElementById("numero").value,
        bairro: document.getElementById("bairro").value,
        localidade: document.getElementById("localidade").value,
        salario: document.getElementById("salario").value,
        estadoCivil: document.getElementById("estadoCivil").value,
        idade: document.getElementById("idade").value
    }

    if (validaIdade(dados.idade)) {
        console.log(dados);
        document.getElementById('cadastroStatus').innerHTML = "Cadastro realizado com sucesso!!!";
        document.getElementById('imprimir').style.display = "block";
        verificaEstadoCivil(dados.estadoCivil);
        if (validaSalario(dados.salario) == true) {
            document.getElementById('imposto').innerHTML = "Será necessário declarar Imposto de Renda!!!";
        }
    }
}

function imprimir(){
    document.getElementById('imprimir').style.display = "none";
    document.getElementById('btns').style.display = "none";
    document.getElementById('nav').style.display = "none";
    window.print();
    document.getElementById('imprimir').style.display = "block";
    document.getElementById('btns').style.display = "block";
    document.getElementById('nav').style.display = "block";
}

function validaIdade(idade) {
    if (idade < 18) {
        alert("Não é permitido o cadastro!!!");
        return false;
    }
    return true;
}
function validaSalario(salario) {
    if (salario > 10000) {
        return true;
    }
    return false;
}
function verificaEstadoCivil(ec) {
    if (ec === 'casado') {
        alert("Necessário enviar a documentação da(o) sua esposa(o)!");
    }
}