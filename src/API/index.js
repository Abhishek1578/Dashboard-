export const getOrder=()=>{
    return fetch('https://dummyjson.com/carts/1')
    .then(res=>res.json())
}
export const getRevenue=()=>{
    return fetch('https://dummyjson.com/carts').then(res=>res.json())
}
export const getProduct=()=>{
    return fetch('https://dummyjson.com/products').then(res=>res.json())
}
export const getPromote=()=>{
    return fetch('https://dummyjson.com/orders').then(res=>res.json())
}
export const getCustomers=()=>{
    return fetch('https://dummyjson.com/users').then(res=>res.json())
}
export const getIncome=()=>{
    return fetch('https://dummyjson.com/users').then(res=>res.json())
}