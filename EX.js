function validarusuário() {
    const usuário = 
    document.getElementsByID('usuário')
    const mensagemErro = 
    document.getElementById('erroNome')
    ;
    if (NamedNodeMap.value.length <1) {
        mensagemErro.textContent = "O nome deve ter mais de um caractere";
        NamedNodeMap.classList.add('erro');
    } else {
        mensagemErro.textContent = nome.classList.remove('erro');
    }
}
