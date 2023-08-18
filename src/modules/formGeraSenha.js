import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtd = document.querySelector('.qtd-caracteres');
const maiusculas = document.querySelector('.chk-maiusculas');
const minusculas = document.querySelector('.chk-minusculas');
const numeros = document.querySelector('.chk-numeros');
const simbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');
const copy = document.querySelector('.copy');
export default () => {
  gerarSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera();
  });
};

function gera() {
  const senha = geraSenha(
    qtd.value,
    maiusculas.checked,
    minusculas.checked,
    numeros.checked,
    simbolos.checked
  );
  return senha || 'Nada selecionado';
}
