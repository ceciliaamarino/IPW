// test/function5.test.mjs

import { expect } from 'chai';
import { checkUsersValid } from '../src/function5.mjs';

describe('checkUsersValid', function () {
  const goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  const testAllValid = checkUsersValid(goodUsers);

  it('deve retornar true para uma lista de usuários válidos', function () {
    const result = testAllValid([{ id: 2 }, { id: 1 }]);
    expect(result).to.be.true;
  });

  it('deve retornar false para uma lista de usuários que contém um usuário inválido', function () {
    const result = testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]);
    expect(result).to.be.false;
  });

  // Exemplo criado 1

  it('deve retornar true para uma lista de usuários válidos com IDs repetidos', function () {
    const result = testAllValid([{ id: 2 }, { id: 2 }, { id: 3 }]);
    expect(result).to.be.true;
  });

});
