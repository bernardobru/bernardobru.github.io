function botaoEnviar() {
    const email = document.getElementById('input-email').value;
    const nome = document.getElementById('input-nome').value;
    const msg = document.getElementById('input-mensagem').value;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if(nome === "" || email === "" || msg === "") {
        alert("Preencha todos os campos!");
        
    } else if(regex.test(email) === false) {
        alert("Insira um e-mail válido!");
    } else {
        alert("Agradecemos seu contato!");
    }
}