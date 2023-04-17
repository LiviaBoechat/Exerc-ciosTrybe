// 1. crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com. Utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const emailGenerator = (fullname) => {
  const email = fullname.toLowerCase().replace(' ', '_');
  // outra opção: const email = fullname.toLowerCase().split('').join('_');
  return { fullname, email: `${email}@trybe.com` };
}
emailGenerator('Pedro Guerra');

// essa é uma função HOF pq ela recebe outra função(callback) como parâmetro
const newEmployees = (callback) => {
  // objeto c/ lista de funcionários
  const employees = {
    id1: callback('Pedro Guerra'), // chama a função emailGenerator com parâmetro fullname
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(emailGenerator));


// 2. Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

// função que será a callback que verifica se os números são iguais
const numberChecker = (myNumber, randomNumber) => {
  return myNumber === randomNumber; // vai retornar true/false
};

// HOF que gera números aleatórios. É HOF apenas pq recebe uma função (callback) como parâmetro
const lotteryResult = (myNumber, callback) => {
  const randomNumber = Math.floor((Math.random() * 5) + 1);

  // se retorno da callback c/ esses parâmetros for true -> Lucky day, you won!
  return callback(myNumber, randomNumber) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));


// 3. DÚVIDA! Crie uma HOF que receberá três parâmetros: 
// O primeiro será um array de respostas corretas (soluções);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for “N.A”);
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:]

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// callback de comparação
const compareAnswers = (right_answers, student_answers) => {
  if (right_answers === student_answers) {
    return 1;
  } else if (student_answers === 'N.A') {
    return 0;
  }
  return -0.5;
};

// HOF de contagem de pontos. É HOF pq tem uma callback no parâmetro
const score = (right_answers, student_answers, callback) => {
  let contador = 0;
  for (let index = 0; index < right_answers.length; index += 1) { // ESSE FOR GUIA COMO VAI PERCORRER OS 2
    // dúvida: no parâmetro da callback como chamou índice de student se não tá sendo percorrido em nenhum momento?
    const callbackReturn = callback(right_answers[index], student_answers[index]);
    contador += callbackReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// 4.5.6.7.8.9. Utilize o seguinte código como template para realizar os exercícios:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 4. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. Use a função find.

const expectedResult = 'Stephen King';
const authorBornIn1947 = () => {
  return books.find((objetoBook) => objetoBook.author.birthYear === 1947).author.name;
}
console.log(authorBornIn1947());

// 5. Retorne o nome do livro de menor nome.

const smallerName = () => {
  const res =  books.reduce((acc, curr) => {
    return (acc.name.length < curr.name.length) ? acc : curr; // o acc (objeto inicial) vai sendo substituido conforme a condição. Nesse caso, na segunda iteração, ele passa a ser uma string (nome), por isso, a resposta do ternário é acc e não acc.name
  });
  return res.name;

}
console.log('Nome do livro de menor nome' + smallerName());


// const smallerName = () => {
//   let nameBook;

//   books.forEach((objectBook) => {
//     //na primeira iteração, como nameBook é undefined, ou seja, não guarda o nome de nenhum livro, o primeiro nome de livro será guardado em nameBook. A partir da segunda iteração, é feita a comparação, e se o nome do livro for menor que o que está guardado em nameBook, este irá tomar seu lugar.
//     if (!nameBook || objectBook.name.length < nameBook.length) {
//       nameBook = objectBook.name;
//     }
//   });

//   return nameBook;
// }
// console.log(smallerName());

// 6. Encontre o primeiro livro cujo nome possua 26 caracteres. Usando find vc encontra o primeiro que tem 26.

const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook());

// 7. Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário. Quando queremos verificar se todos os elementos obedecem a uma condição, utilizamos o every (que retorna booleano). 

const everyoneWasBornOnSecXX = () => {
  return books.every((book) => {
    book.author.birthYear >= 1901 && book.author.birthYear <= 2000
  });
};
console.log(everyoneWasBornOnSecXX());

// 8. Faça uma função que retorne true, se algum livro tiver sido lançado na década de 80, e false, caso contrário. o some verifica se pelo menos um elemento cumpre a condição e retorna true/false

const someBookWasReleaseOnThe80s = () => {
  return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
}
console.log(someBookWasReleaseOnThe80s());

// 9. Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.  Precisamos de dois métodos aqui. O primeiro vai iterar sobre o array books e irá comparar cada livro do array com os demais, porém para fazer essa comparação a cada outro livro precisaremos de um outro método iterando sobre o array.O segundo método carregará a lógica, e então irá verificar se existe ao menos um caso em que a idade seja igual. Esse segundo método será um every, pois como ele fará o mesmo loop para cada livro, todos os resultados devem retornar o mesmo.

const authorUnique = () => {
  return books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}
console.log(authorUnique());

// 10. Crie um objeto cujas cgaves sejam os nomes contidos no array e cujos valores sejam a quantidade de vezes que o nome se repete

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((acc, pessoa) => {
  if (acc[pessoa] !== undefined) {
    acc[pessoa] = acc[pessoa] + 1;
  } else {
    acc[pessoa] = 1; // como a chave pessoa (alice) não existe/ é undefined na primeira iteração, vai criar essa chave e add valor 1
  }
  return acc;
}, {});
console.log(countedNames); // é uma constante, por isso não coloca ()



