let usuarioAtual = "Usuário Atual"
function addcoment(){
    const comentarioInput = document.getElementById("area-comentarios")
    const listacomentarios = document.getElementById("comentarios")
    const errocomentario = document.getElementById("erro")

    if (comentarioInput.value.trim() === "") {
        errocomentario.textContent = "Parece que a força não é forte nesse comentário, escreva novamente padawan.";
        return;
    }

    errocomentario.textContent="";

    const novocomentario = document.createElement("div")
    novocomentario.classList.add("comentario");

    if (usuarioAtual === "Usuário Atual") {
        novocomentario.classList.add("usuario-atual");
    }
    const comentarioTexto = `
    <strong>${usuarioAtual}</strong>
    <p>${comentarioInput.value}</p>
`;
    novocomentario.innerHTML = comentarioTexto;
    listacomentarios.appendChild(novocomentario);
    comentarioInput.value=""
}
