// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify([{
        id: '1',
        name: 'Pina Colada Pizza',
        price: '10.00',
        description: 'A delicious combination of pineapple, coconut, and coconut milk.',
        image: 'https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/pina_colada_pizza.jpg'
      }, {
        id: '2',
        name: 'Pepperoni Pizza',
        price: '12.00',
        description: 'A delicious combination of pepperoni, cheese, and pineapple.',
        image: 'https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/pepperoni_pizza.jpg'
      }, {
        id: '3',
        name: 'Veggie Pizza',
        price: '9.00',
        description: 'A delicious combination of mushrooms, onions, and peppers.',
        image: 'https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/veggie_pizza.jpg'
      }, {
        id: '4',
        name: 'Hawaiian Pizza',
        price: '11.00',
        description: 'A delicious combination of ham, pineapple, and pineapple.',
        image: 'https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/hawaiian_pizza.jpg'
      }, {
        id: '5',
        name: 'Meat Lovers Pizza',
        price: '13.00',
        description: 'A delicious combination of pepperoni, sausage, and bacon.',
        image: 'https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/meat_lovers_pizza.jpg'
      }, {
        id: '6',
        name: 'Supreme Pizza',
        price: '15.00',
        description: 'A delicious combination of pepperoni, sausage, bacon, and pepperoni.',
        image: 'https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/supreme_pizza.jpg'
      }]),      
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
