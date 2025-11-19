class Orders {
  constructor(name, quantity){
    this.name = name;
    this.quantity = quantity;
  }
}

const foodOrders = [];

function addOrder(){
  const nameInput = document.getElementById('name');
  const name = nameInput
  const quantityInput = parseInt(document.getElementById('quantity'))
  const quantity = quantityInput;

  const order = new Orders(name, quantity);
  foodOrders.push(order)
  reloadnewOrders();
}

function reloadnewOrders(){
  const orderList = document.getElementById('foodOrders').tBodies[0];
  orderList.innerHTML = '';

  for (const order of foodOrders){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${order.name}</td>
    <td>${order.quantity}</td>
    `;
    orderList.appendChild(row);
  } 
  if (!quantity >= 1 && !quantity <= 10){
    return document.getElementById('orderMessage') = 'Please enter a food name and a quantity between 1 and 10!';
  } else {
    return document.getElementById('orderMessage') = `Added ${order.quantity} orders of ${order.name} to the list!`
  }
}