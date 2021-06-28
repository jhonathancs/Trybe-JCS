

let numeroMegaSena = [];

console.log(numeroMegaSena);

for (let index = 0; index < 6; index += 1 ) {
    numeroMegaSena[index] = Math.ceil(Math.random() * 60);
    console.log (numeroMegaSena)
}

console.log(numeroMegaSena);

let jogoturma14A = [7, 23, 33, 42, 49, 55];

let acertos = 0;

for(let indexJogo = 0; indexJogo < jogoturma14A.length; indexJogo += 1) {
    if(jogoturma14A[indexJogo] === numeroMegaSena[indexJogo]) {
        acertos += 1;
    }
}