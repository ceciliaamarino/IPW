import { expect } from 'chai';
import '../src/function4.mjs'; // Importa para garantir que o método seja adicionado ao protótipo de Array

describe('Array.prototype.groupBy', function () {
  it('deve agrupar números em pares e ímpares', function () {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = numbers.groupBy(n => n % 2 === 0 ? 'even' : 'odd');
    expect(result).to.deep.equal({ even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] });
  });

  // Exemplo criado 1

  it('deve agrupar números em divisíveis por 3 e não divisíveis por 3', function () {
    const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
    const result = numbers1.groupBy(n => n % 3 === 0 ? 'divisible by 3' : 'not divisible by 3');
    expect(result).to.deep.equal({ 'divisible by 3': [3, 6, 9, 12], 'not divisible by 3': [1, 2, 4, 5, 7, 8, 10] });
  });

  it('deve agrupar pessoas pela idade', function () {
    const people = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
      { name: "David", age: 35 }
    ];
    const result = people.groupBy(person => person.age);
    expect(result).to.deep.equal({ '30': [{ name: "Alice", age: 30 }, { name: "Bob", age: 30 }], '25': [{ name: "Charlie", age: 25 }], '35': [{ name: "David", age: 35 }] });
  });

// Exemplo criado 2

  it('deve agrupar palavras pelo primeiro caractere', function () {
    const words = ["apple", "banana", "avocado", "cherry", "blueberry", "apricot"];
    const result = words.groupBy(word => word[0]);
    expect(result).to.deep.equal({ a: ['apple', 'avocado', 'apricot'], b: ['banana', 'blueberry'], c: ['cherry'] });
  });
});
