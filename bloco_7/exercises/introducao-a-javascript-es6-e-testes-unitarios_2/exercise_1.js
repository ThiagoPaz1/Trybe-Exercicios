const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
};
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name2 = 'Ana Silveira';
    console.log(`Olá ${order.name2}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}order`)
  
  }
  
  (customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);