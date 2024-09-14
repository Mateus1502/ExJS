function validarNome(){
    const nome=document.getElementById("nome");
    const mensagemErro=document.getElementById("erroNome");

    if(nome.value.length <8){
        mensagemErro.textContent = "Seu usuário deve conter 8 caracteres no minimo";
        nome.classList.add("erro");

    }else{
        mensagemErro.textContent =""
        nome.classList.remove("erro")
    }
}
function validarEmail() {
    const email = document.getElementById('email');
    const mensagemErro = document.getElementById('erroEmail');
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email.value)) {
        mensagemErro.textContent = "Formato de e-mail inválido.";
        email.classList.add('erro');
    } else {
        mensagemErro.textContent = "";
        email.classList.remove('erro');
    }
}
function validarSenha() {
    const senha = document.getElementById('senha');
    const mensagemErro = document.getElementById('erroSenha');

    if (senha.value.length < 10) {
        mensagemErro.textContent = "A senha deve ter pelo menos 10 caracteres.";
        senha.classList.add('erro');
    } else {
        mensagemErro.textContent = "";
        senha.classList.remove('erro');
    }
}
document.getElementById('registro').addEventListener('submit', function(event) {
    validarNome();
    validarEmail();
    validarSenha();

    const temErro = document.querySelectorAll('.erro').length > 0;
    if (temErro) {
        event.preventDefault(); // Impede o envio do formulário se houver erros
    }
    
});
