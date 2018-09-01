customerName = 'bob'
const leastFavoriteCustomer = "Al"

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'wanda' //won't work
}
