const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('entrar');
const inputSim = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
function alerta() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnEntrar.addEventListener('click', alerta);
btnEnviar.disabled = true;
function ativarEnviar() {
  btnEnviar.disabled = false;
}
inputSim.addEventListener('click', ativarEnviar);
