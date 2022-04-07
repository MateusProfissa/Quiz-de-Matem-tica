function add_usuario() {
    var jogador_1_nome = document.getElementById("jogador1_input").value;
    var jogador_2_nome = document.getElementById("jogador2_input").value;

    localStorage.setItem("jogador_1_nome", jogador_1_nome);
    localStorage.setItem("jogador_2_nome", jogador_2_nome);

    window.location = "index_2.html";
}