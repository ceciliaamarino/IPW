import { expect } from 'chai';
import copyValidArrayElements from '../src/function2.mjs';

// Testes para a função copyValidArrayElements
describe('copyValidArrayElements', function () {
  it('deve retornar um array vazio quando nenhum elemento é válido', function () {
    const elementValidators = [
      { validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === 'a'] }, // Verifica se é uma string com mais de 2 caracteres e o primeiro caractere é 'a'
      { validators: [s => Number.isInteger(s)] } // Verifica se é um número inteiro
    ];
    const arr1 = ["a"];
    const result = copyValidArrayElements(arr1, elementValidators);
    expect(result).to.deep.equal([]); // []
  });

  it('deve retornar apenas os números inteiros válidos', function () {
    const elementValidators = [
      { validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === 'a'] },
      { validators: [s => Number.isInteger(s)] }
    ];
    const arr2 = [123];
    const result = copyValidArrayElements(arr2, elementValidators);
    expect(result).to.deep.equal([123]); // [123]
  });

  it('deve retornar strings e números inteiros que passam nas validações', function () {
    const elementValidators = [
      { validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === 'a'] },
      { validators: [s => Number.isInteger(s)] }
    ];
    const arr3 = ["abc", 123];
    const result = copyValidArrayElements(arr3, elementValidators);
    expect(result).to.deep.equal(["abc", 123]); // ["abc", 123]
  });

  // Exemplo criado 1
  it('deve retornar strings que terminam com "ing" e números negativos', function () {
    const ingValidators = [
      { validators: [s => typeof s === 'string' && s.endsWith('ing')] }, // Verifica se termina com 'ing'
      { validators: [n => typeof n === 'number' && n < 0] }              // Verifica se é um número negativo
    ];
    const arr4 = ["playing", -7, "play", 2];
    const result = copyValidArrayElements(arr4, ingValidators);
    expect(result).to.deep.equal(["playing", -7]); // ["playing", -7]
  });

  // Exemplo criado 2
  it('deve retornar strings com vogais e números múltiplos de 5', function () {
    const vowelAndMultipleOfFiveValidators = [
      { validators: [s => typeof s === 'string' && /[aeiouAEIOU]/.test(s)] }, // Verifica se a string contém pelo menos uma vogal
      { validators: [n => typeof n === 'number' && n % 5 === 0] }              // Verifica se é um número múltiplo de 5
    ];
    const arr5 = ["apple", 10, "sky", 7, "orange"];
    const result = copyValidArrayElements(arr5, vowelAndMultipleOfFiveValidators);
    expect(result).to.deep.equal(["apple", 10, "orange"]); // ["apple", 10, "orange"]
  });
});
