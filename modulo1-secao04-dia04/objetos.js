// ex01: Imprima no console uma mensagem de boas-vindas para a personagem abaixo, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console: Bem-vinda, Margarida!

/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

  console.log('Bem-vinda, ' + info.personagem + '!') //ou info['personagem']
*/

// ex02: Insira no objeto acima uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. 

/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
}

info['recorrente'] = 'Sim'

console.log(info)
*/

// ex03: Faça um for/in que mostre todas as chaves do objeto acima. 

/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}

for (let key in info) {
  console.log(key)
}
*/

// ex04: Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 

/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}

for (let valores in info) {
  console.log(info[valores])
}
*/

// ex05: Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. 

/*
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (properties === 'recorrente' && info[properties] === 'Sim' && info2[properties] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}
*/

/* ex06: Usando o objeto abaixo, faça os exercícios a seguir: 

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
*/      

//a. Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”. 

/*
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

  console.log('O livro favorito de' + ' ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama' + ' ' + leitor.livrosFavoritos[0].titulo + '.')
*/

/* 
b. Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

{
titulo: 'Harry Potter e o Prisioneiro de Azkaban',
autor: 'JK Rowling',
editora: 'Rocco',
}
*/

/*
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

leitor.livrosFavoritos.push (
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
   autor: 'JK Rowling',
   editora: 'Rocco',
  }
   
)
  
console.log(leitor)

//ATENçÂO: se fizer leitor.livrosFavoritos.push = {....}, ou seja, sem o parênteses, vc vai estar apenas adicionando a chave (que é um objeto) 'leitor.livrosFavoritos.push' ao objeto pai 'leitor'. Com o parênteses, vc está realmente dando push no array livros.Favoritos (que é uma chave).
*/

//c. Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco'
    }
  ],
};

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')

//o leitor.livrosFavoritos.length retorna a quantidade de elementos que tem no array livrosFavoritos. No caso, esse array possui 2 objetos (que são os dois livros), portanto, ele irá dizer que tem 2 livros.