// This is not about ES6 Modules, importing and exporting code between different JS files files
// This is about Module Pattern


const calculator = (() => {
    const add = (a, b) => a + b
    const sub = (a, b) => a - b
    const mul = (a, b) => a * b
    const div = (a, b) => a / b
    return {add, sub, mul, div}
})();

// ^ beachte den direkten Aufruf
