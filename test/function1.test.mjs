import { expect } from 'chai';
import validateArrayElements from '../src/function1.mjs';

describe('validateArrayElements', function () {
  it('deve retornar true para um array de números positivos e pares', function () {
    const elementValidator = {
      validators: [
        (n) => typeof n === 'number' && n > 0,  // verifica se é positivo
        (n) => n % 2 === 0                      // verifica se é par
      ],
    };
    const arr = [2, 4, 6];
    const result = validateArrayElements(arr, elementValidator);
    expect(result).to.be.true;
  });
  
  it('deve retornar false para um array com números negativos', function () {
    const elementValidator = {
      validators: [
        (n) => typeof n === 'number' && n > 0,  // verifica se é positivo
        (n) => n % 2 === 0                      // verifica se é par
      ],
    };
    const arr = [2, -4, 6];
    const result = validateArrayElements(arr, elementValidator);
    expect(result).to.be.false;
  });

  it('deve retornar false para um array com números ímpares', function () {
    const elementValidator = {
      validators: [
        (n) => typeof n === 'number' && n > 0,  // verifica se é positivo
        (n) => n % 2 === 0                      // verifica se é par
      ],
    };
    const arr = [1, 3, 5];
    const result = validateArrayElements(arr, elementValidator);
    expect(result).to.be.false;
  });

  it('deve retornar true para um array de strings com mais de 3 caracteres', function () {
    const stringValidator = {
      validators: [
        (str) => typeof str === 'string',      // verifica se é uma string
        (str) => str.length > 3,               // verifica se tem mais de 3 caracteres
      ],
    };
    const strArr = ['hello', 'world', 'test'];
    const result = validateArrayElements(strArr, stringValidator);
    expect(result).to.be.true;
  });

  it('deve retornar false para um array de strings com menos de 3 caracteres', function () {
    const stringValidator = {
      validators: [
        (str) => typeof str === 'string',      // verifica se é uma string
        (str) => str.length > 3,               // verifica se tem mais de 3 caracteres
      ],
    };
    const strArr = ['hi', 'ok', 'world'];
    const result = validateArrayElements(strArr, stringValidator);
    expect(result).to.be.false;
  });

  it('deve retornar true para números decimais positivos', function () {
    const decimalValidator = {
      validators: [
        (num) => typeof num === 'number' && !Number.isInteger(num),  // verifica se é decimal
        (num) => num > 0,                                            // verifica se é positivo
      ],
    };
    const decimalArr = [0.5, 2.3, 4.8];
    const result = validateArrayElements(decimalArr, decimalValidator);
    expect(result).to.be.true;
  });

  it('deve retornar false para números decimais negativos', function () {
    const decimalValidator = {
      validators: [
        (num) => typeof num === 'number' && !Number.isInteger(num),  // verifica se é decimal
        (num) => num > 0,                                            // verifica se é positivo
      ],
    };
    const decimalArr = [0.5, -2.3, 4.8];
    const result = validateArrayElements(decimalArr, decimalValidator);
    expect(result).to.be.false;
  });
});
