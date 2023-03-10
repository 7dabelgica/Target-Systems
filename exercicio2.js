const indice = getRan(1, 1000);
const fibonacci = [];

function getRan (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function* array() {
    let [prev, current] = [-1, 1];
    while (true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

for ( let n of array()) {
    fibonacci.push(n);
    if (n >= indice) {
        break;
    }
}

function fibonacciIncludes () {
    if (!fibonacci.includes(indice)) {
        return console.log(`Número ${indice} não contém na sequência de Fibonacci`);
    }
    return console.log(`Número ${indice} contém na sequência de Fibonacci`)
}

fibonacciIncludes();

