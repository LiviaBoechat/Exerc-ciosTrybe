const orderNumero1 = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Recupere os valores necessários da constante order
    const address = 'address'; // Armazenando a palavra 'address' em uma variável
    const deliveryPerson = order.order.delivery.deliveryPerson; // Acesse e armazene a chave `deliveryPerson` em uma variável através de 'notação de ponto'.
    const customerName = order['name']; // Acesse e armazene a chave `name` em uma variável através de 'notação de chaves'.
    const customerPhone = order['phoneNumber']; // Acesse e armazene a chave `phoneNumber` em uma variável através de 'notação de chaves'.
    const street = order[address].street; // Acesse e armazene a chave `street` em uma variável, através de 'notação de chaves' e 'notação de ponto'.
    const number = order[address].number; // Acesse e armazene a chave `number` em uma variável, através de 'notação de chaves' e 'notação de ponto'.
    const apartment = order[address].apartment; // Acesse e armazene a chave `apartment` em uma variável, através de 'notação de chaves' e 'notação de ponto'.

    console.log(street)
    //console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
  };
  customerInfo(orderNumero1);
  
  const orderModifier = (order) => {
    // Modifique o nome da pessoa compradora.
    const newBuyer = order.name = 'Luiz Silva'; 
    // Modifique o valor total da compra.
    const newTotal = order.payment.total = '50';
    // Recuperar os nomes das pizzas (retorna array)
    const pizzas = Object.keys(order.order.pizza);
    // Recupere o type da chave coke.
    const drinks = order.order.drinks.coke.type;

    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`); 
  };
  
  orderModifier(order);