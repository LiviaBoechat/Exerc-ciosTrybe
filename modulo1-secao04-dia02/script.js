// ex01: Percorra o array imprimindo todos os valores nele contidos com a função console.log();

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) { //index ++ OU index += 1 OU index = index + 1 
    console.log(numbers[index]);
}
*/

// ex02: Some todos os valores contidos no array e imprima o resultado;

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0; //zero é valor inicial que vai ser somado aos valores que estão nos índices do array

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index] //let soma vai somar o que já tem nela, mais o novo valor do índice
}

console.log(soma); 
*/

// ex03: Calcule e imprima a média aritmética dos valores contidos no array; (A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.)

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let media = soma / numbers.length //com length, se vc der um push p/ add algum número no array, o algorítimo vai continuar valendo!

console.log(media);
*/

 // ex04: Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

 /*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

let media = soma / numbers.length //com length, se vc der um push p/ add algum número no array, o algorítimo vai continuar valendo!

console.log(media);

if (media > 20) {
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}
*/

// ex05: Utilizando for, descubra qual o maior valor contido no array e imprima-o;

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0]; //a let recebe inicialmente o ÍNDICE 0 do array numbers (de valor 5) pq vai considerar que esse é o maior número. No for, a comparação vai comerçar comparando o índice 1 ao índice 0 e, conforme for encontrando um número maior, vai substituindo no let maiorNumero (já no if)

for (let index = 1; index < numbers.length; index++) { 

       if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }  
}

console.log(maiorNumero)
*/
//obs:index começa com 1 para não ser redundante em comparar o índice 0 com o índice 0 que já vai estar sendo considerado, inicialmente, na let maiorNumero 


// ex06: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let isOdd = 0; //zero pq sempre que o algorítimo encontrar um ímpar, vai somar ao let isOdd, então inicialmente tem que zero para ir somando conforme o for for sendo executado

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    isOdd += 1;
  }
}

if (isOdd === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(isOdd);
}
*/

// ex07: Utilizando for, descubra qual o menor valor contido no array e imprima-o;

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0]; ///a let recebe inicialmente o ÍNDICE 0 do array numbers (de valor 5) pq vai considerar que esse é o maior número. No for, a comparação vai começar comparando o índice 1 ao índice 0 e, conforme for encontrando um número menor, vai substituindo no let menorNumero (já no if)

for (let index = 1; index < numbers.length; index++) {

    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
console.log(menorNumero)

//obs:index começa com 1 para não ser redundante em comparar o índice 0 com o índice 0 que já vai estar sendo considerado, inicialmente, na let maiorNumero 

*/

// ex08: Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

/*
let newArray = [];

for (let contador = 1; contador <= 25; contador++) {
    newArray.push(contador);
}

console.log(newArray);

//obs: nesse caso coloquei let contador ao invés de let index pq ele não está se referindo ao índice do array e sim ao primeiro número a ser contado
*/

// ex09: Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

/*
let newArray = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ,19, 20, 21, 22, 23, 24, 25];

for (let index = 0; index < newArray.length; index++) {
    console.log(newArray[index] / 2);
}
*/

//obs:como o console.log está dentro, vai aparecer todos os índices por repetição. Se tivesse fora teria que ser outra estrutura que conseguisse armazenar os valores para depois exibí-los


// exbonus: 
// a. Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    let primeiroNumero = numbers[index]
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    let segundoNumero = numbers[secondIndex]
    if (primeiroNumero < segundoNumero) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);

// b. Ordene o array numbers em ordem decrescente e imprima seus valores;

/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);
*/

// c. Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo: let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
*/