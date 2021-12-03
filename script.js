const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('entrar');
const inputSim = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const inputTexto = document.getElementById('textarea');
const contador = document.getElementById('counter');
const formulario = document.querySelector('#evaluation-form')
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

function contarCaracterers() {
  const caracteres = (inputTexto.value.length);
  const resultado = 500 - caracteres;
  contador.innerText = resultado;
}
inputTexto.addEventListener('input', contarCaracterers);
 function atualizarPagina(event) {
   event.preventDefault();
   }
 btnEnviar.addEventListener('click', atualizarPagina);
