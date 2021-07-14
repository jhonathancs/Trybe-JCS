// let pizza1 = '4 queijos'
// let pizza2 = 'frango com catupiry'
// let pizza3 = 'marguerita'
// let pizza4 = 'palmito'
// let pizza5 = 'chocolate'

let pizzas = ['4 queijos','frango com catupiry','marguerita','palmito','chocolate'];

pizzas.push('peito de peru')
pizzas.push('peito de frango')
pizzas.push('peito de cachorro')
pizzas.push('peito de pombo')

// for (let jhon = 0; jhon < pizzas.length; jhon += 1) {
//     console.log(pizzas[jhon]);
// }

for(let name of pizzas) {
    console.log(name);
}

// resultado
// 4 queijos
// frango com catupiry
// marguerita
// palmito
// chocolate
// peito de peru
// peito de frango
// peito de cachorro
// peito de pombo