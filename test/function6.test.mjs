import { expect } from 'chai';
import { memoize, add, multiply, subtract, divide } from '../src/function6.mjs';

describe('memoize', function () {
  it('deve retornar o resultado memoizado para a função add', function () {
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(2, 3)).to.equal(5); // Calcula e retorna 5
    expect(memoizedAdd(2, 3)).to.equal(5); // Deve usar o cache e retornar 5 sem recalcular
  });

  it('deve retornar o resultado memoizado para a função multiply', function () {
    const memoizedMultiply = memoize(multiply);

    expect(memoizedMultiply(2, 3, 4)).to.equal(24); // Calcula e retorna 24
    expect(memoizedMultiply(2, 3, 4)).to.equal(24); // Deve usar o cache e retornar 24 sem recalcular
  });

  it('deve retornar o resultado memoizado para a função subtract', function () {
    const memoizedSubtract = memoize(subtract);

    expect(memoizedSubtract(10, 4)).to.equal(6); // Calcula e retorna 6
    expect(memoizedSubtract(10, 4)).to.equal(6); // Deve usar o cache e retornar 6 sem recalcular
  });

  it('deve retornar o resultado memoizado para a função divide', function () {
    const memoizedDivide = memoize(divide);

    expect(memoizedDivide(10, 2)).to.equal(5); // Calcula e retorna 5
    expect(memoizedDivide(10, 2)).to.equal(5); // Deve usar o cache e retornar 5 sem recalcular
  });

});
