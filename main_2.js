var jogador_1_nome = localStorage.getItem("jogador_1_nome");
var jogador_1_placar = 0;
var jogador_2_nome = localStorage.getItem("jogador_2_nome"); 
var jogador_2_placar = 0;

document.getElementById("jogador_1_nome").innerHTML = jogador_1_nome + ":";
document.getElementById("jogador_2_nome").innerHTML = jogador_2_nome + ":";
document.getElementById("jogador_1_placar").innerHTML = jogador_1_placar;
document.getElementById("jogador_2_placar").innerHTML = jogador_2_placar;
document.getElementById("questão_jogador").innerHTML = "Rodada de Perguntas:" + jogador_1_nome;
document.getElementById("jogador_resposta").innerHTML = "Rodada de Respostas:" + jogador_2_nome;

function enviar() {
    var numero_1 = document.getElementById("numero1").value;
    var numero_2 = document.getElementById("numero2").value;
    resposta = parseInt(numero_1) * parseInt(numero_2);
    console.log("Resposta = " + resposta);
    var questão = "<h4>" + numero_1 + "x" + numero_2 + "</h4>";
    var resposta_input = "<br> Resposta: <input type='text' id='resposta_usuario'>";
    var botão_checar = "<br> <br> <button class='btn btn-info' onclick='checar()'> Checar </button>";
    var linha = questão + resposta_input + botão_checar;
    document.getElementById("saída").innerHTML = linha;
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
}

var rodada_pergunta = "jogador_1";
var rodada_resposta = "jogador_2";

function checar() {
    var resposta2 = document.getElementById("resposta_usuario").value;  
    var resposta_escrita = parseInt(resposta2);
    console.log(resposta);
    console.log(resposta_escrita);

    if (resposta == resposta_escrita) {
        console.log("=");
        if (rodada_resposta == "jogador_1") {
            jogador_1_placar = jogador_1_placar + 1;
            document.getElementById("jogador_1_placar").innerHTML = jogador_1_placar;
        }
        else {
            jogador_2_placar = jogador_2_placar + 1;
            document.getElementById("jogador_2_placar").innerHTML = jogador_2_placar;
        }
    }
    if (rodada_pergunta == "jogador_1") {
        rodada_pergunta = "jogador_2"
        document.getElementById("questão_jogador").innerHTML = "Rodada de Perguntas: " + jogador_2_nome;
    }
    else {
        rodada_pergunta = "jogador_1";
        document.getElementById("questão_jogador").innerHTML = "Rodada de Perguntas: " + jogador_1_nome;
    }
    if (rodada_resposta == "jogador_1") {
        rodada_resposta = "jogador_2";
        document.getElementById("jogador_resposta").innerHTML = "Rodada de Resposta: " + jogador_2_nome;
    }
    else {
        rodada_resposta = "jogador_1";
        document.getElementById("jogador_resposta").innerHTML = "Rodada de Resposta: " + jogador_1_nome;
    }
    document.getElementById("saída").innerHTML = "";
}