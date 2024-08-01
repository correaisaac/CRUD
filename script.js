function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == 'admin' && senha == 'admin') {
        window.location.href = "main-menu.html";
    } else {
        alert('Usuário ou senha incorretos');
    }
}


// Depois eu tento essa bomba
// function verificaLogin(user, senha) {

//     const userCorreto = "admin";
//     const senhaCorreta = "admin";

//     if (user === userCorreto && senha === senhaCorreta) {
//         alert('Bem Vindo!')
//         window.location.href = "./screens/main-menu.html";
//     } else {

//         alert("user ou senha incorretos!");
//     }
// }

// document.getElementById('loginButton').addEventListener('click', function() {
//     const user = document.getElementById('login').value;
//     const senha = document.getElementById('senha').value;
//     verificaLogin(user,  senha);
// });