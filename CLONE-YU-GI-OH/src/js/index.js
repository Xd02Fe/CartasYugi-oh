/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
     - passo 3 - fazer aparecer o próximo cartão da lista 
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/
//  passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
console.log(document.getElementById('btn-avancar'));

//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0;

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;
    //length mostra o número de itens, mas como vai do 0 ao 6, aqui precisa colocar -1


    //passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')

    //passo 3 - fazer aparecer o próximo cartão da lista 
    cartaoAtual++;
    (cartoes[cartaoAtual].classList.add('selecionado'))
});

/*
OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;
    //length mostra o número de itens, mas como vai do 0 ao 6, aqui precisa colocar -1


    //passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartaoSelecionado();

    //passo 3 - fazer aparecer o próximo cartão da lista 
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});






















function mostrarCartao(cartaoAtual) {
    (cartoes[cartaoAtual].classList.add('selecionado'));
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
