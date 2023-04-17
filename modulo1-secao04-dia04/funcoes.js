/* 
ex01: Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

Exemplo de palíndromo: arara

verificaPalindrome('arara')

Retorno esperado: true
verificaPalindrome('desenvolvimento')

Retorno esperado: false
*/

/*
function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join(''); //usa split e join por ser string? Se fosses elementos separados poderia só usar .reverse()?
    if (string === reverse) {
      return true;
    } else {
      return false;
    }
}

console.log(verificaPalindrome('arara'))
console.log(verificaPalindrome('livia'))

//obs: não precisa declarar variável para string pq tem parâmetro que o substitui. Depois é só modificar ele pelo valor que vc quiser qd quiser imprimir (no console
*/

// ex02: Crie uma função que receba um array de inteiros e retorne o índice do maior valor. Array de teste: [2, 3, 6, 7, 10, 1];.

/* 
function comparacaoMaior(numeros) {
  let indiceMaior = 0; //zero pq vai sendo substituido pelo maior indice do array numeros
  for (let indice in numeros) {
    if (numero[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }

  return indiceMaior;
}

console.log(comparacaoMaior([2, 3, 6, 7, 10, 1])); //4
*/

// ex 04: Crie uma função que receba um array de inteiros e retorne o índice do menor valor. Array de teste: [2, 4, 6, 7, 10, 0, -3];. Valor esperado no retorno da função: 6.

/*
function comparacaoMenor(numeros) {
  let indiceMenor = 0; //zero pq vai sendo substituido pelo menor indice do array numeros
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }

  return indiceMenor;
}

console.log(comparacaoMenor([2, 4, 6, 7, 10, 0, -3])); //6
*/

// ex05: Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.   Valor esperado no retorno da função: Fernanda.

/*
function contador(array)  {
  let maiorString = array[0]; //começa no indice 0 para receber os valores maiores no if
  for (let index in array) {
    if (maiorString.length < array[index].length) {   //maiorString.length vai sendo subustituido conforme o indice vai aumentando
      maiorString = array[index]
    }
  }
  return maiorString;
}

console.log(contador(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
*/

// ex06: Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. Array de teste: [2, 3, 2, 5, 8, 2, 3];.   Valor esperado no retorno da função: 2.


function verificaRepeticao(array) {
  let maiorRepeticao = array[0];
  for (let index in array) {
    if(maiorRepetiao[index] == array[index]) {
    maiorRepeticao += array[index]  
    }
  }
  return maiorRepeticao
}
console.log(verificaRepeticao([2, 3, 2, 5, 8, 2, 3]))
