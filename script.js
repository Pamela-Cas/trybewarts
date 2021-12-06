const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const btnEntrar = document.getElementById('entrar');
const inputSim = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const inputTexto = document.getElementById('textarea');
const contador = document.getElementById('counter');
const formulario = document.querySelector('#evaluation-form');
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
// funcoes para pegar os inputs
let nome = '';
let sobrenome = '';
let emailUs = '';
let casaUs = '';
let familia = '';
let lisconteudo = [];
let rate = 0;
let comentario = '';
let nomeCompleto = '';
function pegarValores() {
  nome = document.getElementById('input-name').value;
  sobrenome = document.getElementById('input-lastname').value;
  emailUs = document.getElementById('input-email').value;
  casaUs = document.getElementById('house').value;
  comentario = document.getElementById('textarea').value;
  nomeCompleto = `${nome} ${sobrenome}`;
}
// referencia: https://blog.betrybe.com/javascript/javascript-foreach/
function pegarFamilia() {
  const listaFamilia = document.getElementsByName('family');
  listaFamilia.forEach((elemento) => {
    if (elemento.checked) {
      familia = elemento.value;
    }
  });
}
function pegarConteudos() {
  const listaConteudos = document.getElementsByName('subject');
  listaConteudos.forEach((conteudo) => {
    if (conteudo.checked) {
      lisconteudo.push(conteudo.value);
    }
  });
  lisconteudo = lisconteudo.join([', ']);
}
function pegarRate() {
  const valRate = document.getElementsByName('rate');
  valRate.forEach((numero) => {
    if (numero.checked) {
      rate = numero.value;
    }
  });
}
// fim das funções p pegar inputs
function adicinarInput() {
  document.getElementById('usuNome').innerText = `Nome: ${nomeCompleto}`;
  document.getElementById('usuEmail').innerText = `Email: ${emailUs}`;
  document.getElementById('usuCasa').innerText = `Casa: ${casaUs}`;
  document.getElementById('usuFamilia').innerText = `Família: ${familia}`;
  document.getElementById('usuMaterias').innerText = `Matérias: ${lisconteudo}`;
  document.getElementById('usuAvaliacao').innerText = `Avaliação: ${rate}`;
  document.getElementById('usuObservacao').innerText = `Observações: ${comentario}`;
}
function removerFilhos() {
  formulario.innerHTML = '';
  formulario.appendChild(document.getElementById('usuInformacoes'));
}
function atualizarPagina(event) {
  event.preventDefault();
  pegarValores();
  pegarFamilia();
  pegarConteudos();
  pegarRate();
  adicinarInput();
  removerFilhos();
  document.getElementById('usuInformacoes').style.display = 'block';
}
btnEnviar.addEventListener('click', atualizarPagina);
