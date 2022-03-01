async function getUser(userId) {
    
    let response = await fetch(`https://api.com/api/user/${userId}`);
    let userData = await response.json()
    return userData.name;
}

let [user1, user2] = await Promise.all([getUser(1), getUser(2)])

exibeDadosUser(await getUser(1))

getUser(1).then(exibeDadosUser).catch(reject)

async function getCustomerOrders(customerId) {
    const response = await fetch(`https://api.com/api/customer/${customerId}`)
    const customer = await response.json()
   
    return await Promise.all(customer.orders.map(async (orderId) => {
      const response = await fetch(`https://api.com/api/order/${orderId}`)
      const orderData = await response.json()
      return orderData.amount
    }))
   }