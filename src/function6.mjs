export function memoize(func) {
    const cache = {}; // Objeto que vai armazenar os resultados (cache)
  
    return function (...args) { // retorna uma função que aceita quantos argumentos forem necessários
      const key = JSON.stringify(args); // Converte os argumentos para uma string para usar como chave de cache
  
      if (cache[key]) {
        return cache[key];
      } else {
        const result = func(...args); // Calcula o resultado e armazena no cache
        cache[key] = result;
        return result;
      }
    };
  }
  
  export function add(a, b) {
    console.log('Computing...');
    return a + b;
  }
  
  export function multiply(a, b, c) {
    console.log('Multiplying...');
    return a * b * c;
  }
  
  export function subtract(a, b) {
    console.log('Subtracting...');
    return a - b;
  }
  
  export function divide(a, b) {
    console.log('Dividing...');
    return a / b;
  }
  