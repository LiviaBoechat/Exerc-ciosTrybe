// A empresa em que você trabalha fechou um contrato com uma biblioteca e você está responsável por desenvolver o novo sistema para organizar os livros. O acervo que a biblioteca possui está descrito no array abaixo:

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

// 1. Filtre todos os objetos do gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = () => {
  return books.filter((books) => books.genre === 'Fantasia' || books.genre === 'Ficção Científica');
}
console.log(fantasyOrScienceFiction());

// 2. Filtre os livros com mais de 60 anos desde sua publicação e ordene a partir do livro mais velho para o mais novo.
// O filter retorna um array com os livros que possuem mais de 60 anos e, para ordená-los do mais velho para o mais novo, você pode utilizar o método sort.
// O sort vai receber dois parâmetros, realizar a comparação dos itens do array e organizar o array do livro mais velho para o mais novo.


const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => (currentYear - book.releaseYear) >= 60)
    .sort((bookA, bookB) => bookA.releaseYear - bookB.releaseYear);
}
console.log(oldBooksOrdered());

// 3. Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.
// utilize o filter para encontrar os livros escritos por pessoas que nasceram no ano armazenado no parâmetro birthYear.
// mapeie os livros para uma lista contendo apenas os nomes.

const expectedResult = [ 'Fundação', 'Duna' ];

const booksByAuthorBirthYear = (birthYear) => {
  return books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);
}
const result = booksByAuthorBirthYear(1920);

// 4. Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.
// O filter vai iterar pelo array de books e retornar um array com os livros onde o gênero está incluso no array wantedGenres.
// Com o array filtrado, podemos utilizar o map para pegar somente o nome das pessoas autoras e ainda, como bônus, ordenar por ordem alfabética
// Nesse caso, o sort não precisa de nenhuma função de comparação: estamos trabalhando apenas com strings e, por padrão, ele ordena por ordem alfabética.

const fantasyOrScienceFictionAuthors = () => {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name)
    .sort();
}
console.log(fantasyOrScienceFictionAuthors());

// 5. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = () => {
  const currentYear = new Date().getFullYear();

  return books
    .filter((book) => currentYear - book.releaseYear > 60)
    .map((book) => book.name);
}
console.log(oldBooks());

// 6. Encontre o primeiro resultado cujo nome registrado começa com três iniciais e retorne o nome do livro.


const authorWith3DotsOnName = () => {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log(authorWith3DotsOnName());

// Bônus: Todos os exercícios devem ser realizados utilizando reduce e, se necessário, use outra HOF. A informação será citada no enunciado.

// 1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (param) => {
  return param.reduce((acc, curr) => {
    return acc = [...acc, ...curr]
  }, []);
}
console.log(flatten(arrays));

// Para os próximos exercícios, considere o seguinte array:

const books2 = [
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

// 2 - Crie uma string com os nomes de todas as pessoas autoras.


const reduceNames = (array) => {
  return array.reduce((acc, { author: { name } }) => {
    return  acc = [...acc, name];
  }, []).join(', ')
}
console.log(reduceNames(books2));


// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = (array) => {
  return array.reduce((acc, { author: {birthYear}, releaseYear }) => {
    return acc += releaseYear - birthYear;
  }, 0)/array.length;
}
console.log(averageAge(books2));


// 4 - Encontre o livro com o maior nome.


const longestNamedBook = (array) => {
  return array.reduce((acc, curr) => {
   return acc.name.length > curr.name.length ? acc : curr;
  })
}
console.log(longestNamedBook(books2));



const longestNamedBook2 = (array) => {
  return array.reduce((acc, curr) => {
   return acc.name.length < curr.name.length ? acc : curr;
  })
}
console.log(longestNamedBook2(books2));