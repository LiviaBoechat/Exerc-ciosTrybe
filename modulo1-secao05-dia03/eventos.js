const createDaysOfTheWeek = () => {
    // descreve o conteúdo
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    // captura elem. pai (ul) do HTML onde os dias da semana irão entrar dentro de listas futuramente
    const weekDaysList = document.querySelector('.week-days');
    // c/ laço de repetição pq são vários elementos, armazenar índices dos dias da semana em variável + cria listas (li) que vão abrigar os dias da semana + add à elas o conteúdo + relaciona pai e filho
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
      
      weekDaysList.appendChild(dayListItem);
    };
  };
  // chama a função
  createDaysOfTheWeek();
  
/*
Parte 01
Crie um calendário dinamicamente.
O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>. 
a- A tag <ul> deve conter o id 'days';
b- Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
c- Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
d- Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.
*/

// descrever conteúdo 
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//  criar função + capturar elem. pai (ul) do HTML onde os dias do mês irão entrar dentro de listas futuramente
const createDaysOfTheMonth = () => {
  let getDaysList = document.querySelector('#days');

  /* 
  c/ laço de repetição(pq são vários elementos a serem inseridos): 
  1. armazenar índices dos dias do mês em variável; 
  2. criar listas (li) que vão abrigar os dias do mês + add à elas o conteúdo ;
  3. relacione pai e filho;
  4. crie a estrutura condicional (if/else) que adicionará a classe correta à cada dia; 
  */

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    
    let day = decemberDaysList[index];

    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;

    getDaysList.appendChild(dayItem);
    
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday'; // Atribua a classe 'day holiday' ao li criado
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday'; // Atribua a classe 'day friday' ao li criado
    } else if (day === 25) {
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
    }
  }
} 
// chame a função
createDaysOfTheMonth();
    
/* 
Parte 02 
Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
a- Sua função deve receber um parâmetro com a string 'Feriados';
b- Adicione a este botão a ID "btn-holiday";
c- Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
*/

const createHolidayButton = (buttonName) => {
    //captura pai
    let buttonContainer = document.querySelector('.buttons-container');
    //cria botao
    let newButton = document.createElement('button');
    // pra que criar uma variavel nova só para armazenar o ID???
    let newButtonID = 'btn-holiday'; 
    // add nome e id
    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    // relaciona pai e filho
    buttonContainer.appendChild(newButton);
  }
  // chame a função
  createHolidayButton('Feriados');


/*
Parte 3 
Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
- Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. - Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.
*/

const displayHolidays = () => {
    // capturar botão hodiday/feriado
    let getHolidayButton = document.querySelector('#btn-holiday');
    // capturar os dias de feriado (tratar como array)
    let getHolidays = document.querySelectorAll('.holiday')
    // criar variáveis p/ armazenar as cores (original e nova)
    let backgroundColor = 'rgb(238,238,238)'; // cor original
    let setNewColor = 'red'; 

      // função anônima vai funcionar só qd clicar nesse botão "holiday/feriado"
      getHolidayButton.addEventListener('click', () => {
      // Percorra o array dos feriados e adicione as condições para troca de cor.
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    });
  }
  // chame a função
  displayHolidays();


 /*
Parte 4 (acertei)
Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
a. Sua função deve receber como parâmetro a string “Sexta-feira”;
b. Adicione a esse botão o ID "btn-friday";
c. Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
*/

const createFridayButton = (buttonName) => {
    // captura pai
    let buttonContainer = document.querySelector('.buttons-container');
    // cria botão
    let fridayButton = document.createElement('button');
    //cria variável p/ armazenar ID
    let fridayButtonId = 'btn-friday';
    // add nome e id
    fridayButton.innerHTML = buttonName;
    fridayButton.id = fridayButtonId
    // relaciona pai e filho
    buttonContainer.appendChild(fridayButton);
}
// chama a função
createFridayButton('Sexta-feira');


/*
Parte 5 
Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
a. Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
b. De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
*/

const displayFridays = (fridaysArray) => {
    // captura botao
    let getFridayButton = document.querySelector('#btn-friday');
    // captura as sextas-feiras (trate como array)
    let fridays = document.getElementsByClassName('friday');
    // crie variável p/ armazenar texto
    let newFridayText = 'SEXTOU o/';
  
    getFridayButton.addEventListener('click', () => {
    // Crie um loop for que itere sobre todos os elements com classe ‘friday’.
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
          //caso o texto não tenha sido substituído, ao clicar no botão ele será substituído pelo novo texto;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
    });
  }
// chame a função
displayFridays([ 4, 11, 18, 25 ]);

/*
Parte 6 
Implemente duas funções que criem um efeito de “zoom”;
a. Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
b. De olho na dica 👀: Você pode utilizar a propriedade event.target.
*/

const dayMouseOver = () => {
    // capture os dias do mês 
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', (event) => {
      // o evento mouseover atua no target (onde o mouse passou) alterando a fontSize e a fontWeight
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600'; // Ele pega o evento alvo e altera o estilo de fontWeight para 600
    });
  }

const dayMouseOut = () => {
     // capture os dias do mês 
    let days = document.querySelector('#days');
    days.addEventListener('mouseout', (event) => {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200'; // Ele pega o evento alvo e altera o estilo de fontWeight para 200
    });
}
// chame as DUAS funções
dayMouseOver();
dayMouseOut();

/*
Parte 7 (acertei)
Implemente uma função que adicione uma tarefa personalizada ao calendário;
a. A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
b. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/

const newTaskSpan = (task) => {
    // captuar pai
    let tasksContainer = document.querySelector('.my-tasks');
    // criar elemento task
    let taskName = document.createElement('span');
    // add nome (parâmetro)
    taskName.innerHTML = task;
    // relacionar pai e filho
    tasksContainer.appendChild(taskName); // Anexando a task como filha de taskContainer
  }
  // chamar função
  newTaskSpan('projeto');

/*
Parte 8 (acertei)
Implemente uma função que adicione uma legenda com cor para a tarefa;
a. Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
b. O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
c. O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/

const createTaskColor = (cor) => {
    // captura pai
    let taskContainer = document.querySelector('.my-tasks');
    // criar elemento cor
    let newTaskColor = document.createElement('div');
    // add cor ao elemento e classe 'task'
    newTaskColor. style.backgroundColor = cor;
    newTaskColor.classList.add('task')
    // relaciona pai e filho
    taskContainer.appendChild(newTaskColor);
}
// chame a função
createTaskColor('green');


/*
Parte 9 
Implemente uma função que selecione uma tarefa;
a. Adicione um evento que AO CLICAR no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
b. Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
*/

// const setTaskClass = () => {
//     // captura elementos com classe 'task selected'
//     let selectedTask = document.getElementsByClassName('task selected');
//     // captura elemento com id 'task'
//     let myTasks = document.querySelector('.task');
//     myTasks.addEventListener('click', (event) => {
//       if (selectedTask.length === 0) {
//         event.target.className = 'task selected';
//       } else {
//         event.target.className = 'task';
//       }
//     });
// }
// setTaskClass();

const setTaskClass = () => {
  
    // captura elemento com id 'task'
    let myTasks = document.querySelector('.task');
    
    myTasks.addEventListener('click', (event) => {
        // o evento click vai atuar no target (onde o mouse clica), adicionando a class 'selected' no target, caso ele não o tenha, e retira caso ele o tenha
        event.target.classList.toggle('selected');
    });
}
setTaskClass();


/*
Parte 10
Implemente uma função que atribua a cor da tarefa ao dia do calendário;
a. Adicione um evento que, ao clicar em um DIA do mês no calendário, atribua a esse dia a COR da legenda da sua tarefa selecionada;
b. Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).
*/

const setDayColor = () => {
    // Retorna um array com todos os elementos com a classe "task selected" 
    let selectedTask = document.getElementsByClassName('task selected');
    // Seleciona a primeira ul com id "days"
    let days = document.querySelector('#days');
    // Seleciona o primeiro elemento com a classe "task"
    let taskDiv = document.querySelector('.task');
    // Salva o Background Color da classe task na variável "taskColor"
    let taskColor = taskDiv.style.backgroundColor;
    
    // Para pegar o evento alvo, precisamos declarar o evento como parâmetro da função
    days.addEventListener('click', (event) => {
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; // Caso não houver nenhum elemento com a classe "task selected" E o evento alvo não tiver a mesma cor de fundo da variável "taskColor" -> Pega a cor de fundo do primeiro elemento salvo na variável "selectedTask" e salva na variável "color"
        event.target.style.color = color; // atribui a cor salva na variável "color" ao evento alvo
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';  // Caso a cor do evento alvo seja igual à da variável "taskColor" -> Altera a cor de fundo do evento alvo para "rgb(119, 119, 119)"
      }
    });
}
setDayColor();
  