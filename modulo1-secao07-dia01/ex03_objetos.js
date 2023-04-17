const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 01. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKeys = (object, newKey, value) => {
    object[newKey] = value; 
};
addKeys(lesson2, 'turno', 'noite'); // se fossem variáveis, não precisaria de ''
console.log(lesson2);

// 02. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson1));

// 03. Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) =>  Object.keys(obj).length; // Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
console.log(sizeObj(lesson1));

// 04. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = (obj) => {
    return Object.values(obj); 
};
console.log(showValues(lesson3));

// 05. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 06. Crie uma função que retorne o número total de estudantes em todas as aulas.

const getNumberOfStudents = (obj) => {
    let total = 0; // começamos a contagem de alunos com 0;
    const keys = Object.keys(obj); // pegamos as chaves do objeto;
    for (index in keys) { 
      total += obj[keys[index]].numeroEstudantes; 
    }
    return total;
  };
  console.log(getNumberOfStudents(allLessons));