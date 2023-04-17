// ex01: O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.

/*
let fatorial = [];
let total = 1;

for (let c = 10; c > 0; c -= 1) {
  fatorial.push(c)
  total *= c
}

console.log(`10!= ${fatorial} = ${total}`)
*/

// ex02: Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente. let word = 'tryber';

/*
let word = 'tryber';
let reverseWord = '';

for (let index = word.length -1; index >= 0; index -= 1) {
  reverseWord += word[index];
}

console.log(reverseWord);
*/

//obs: sempre que vc for relacionar comprimento do array (.length) com índice (que começa sempre por 0), lembrar que se o elemento tem 6 caracteres de comprimento, ele vai ter 5 índices. Por isso coloquei o -1 no word.length -1, assim ele vai se INICIAR pelo tamanho do length (que é 6) -1, ou seja, começa pelo índice 5, que tem o valor 'r'



// ex03: Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra do array abaixo e outro que retorne a menor. Considere o número de caracteres de cada palavra. let array = ['java', 'javascript', 'python', 'html', 'css'];


let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);


// ex04: Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

/*
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
*/