/*
ex01: Crie uma função que ligue e desligue um motor de um carro.
- Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
- Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
- Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
- Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
/*

/*
fgdfdfgfgfgfg
*/

//Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

/*
let motor = 'desligado';

const ligarDesligar = () => (
  motor === 'desligado' ? motor = 'ligado' : motor = 'desligado'
)

console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está desligado
console.log(`O motor está ${ligarDesligar()}`); // O motor está ligado
*/


/*
ex02: Crie uma função que calcule a área de um círculo.
Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
Com base nessa informação:
- Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
- Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
- Crie a lógica para retornar a área do círculo;
- Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).

Exemplo de retorno:

Parâmetro: 3

Retorno: Essa é a área do círculo: 28.259999999999998

Parâmetro: 5

Retorno: Essa é a área do círculo: 78.5
*/

/*
const areaCirculo = (raioCirculo) => 3.14*(raioCirculo*raioCirculo);

console.log(`A áreado cículo é ${areaCirculo(3)}.`)
*/


/*
ex03: Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
*/


const longestWord = (frase) => {
  const separando = frase.split(' ');
  let maiorPalavra = separando[0];

  for (const value in separando) {
    if (maiorPalavra.length < separando[value].length) {
      maiorPalavra = separando[value];
    }
  }
  return maiorPalavra
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


//Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().