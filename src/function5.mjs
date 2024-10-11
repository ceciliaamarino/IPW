export function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
      return submittedUsers.every(submittedUser =>
        // O every verifica se todos os elementos de submittedUsers atendem a uma condição.
        // Se todos os elementos passarem na condição, every retorna true, caso contrário, retorna false.
        goodUsers.some(goodUser => goodUser.id === submittedUser.id) 
         // O método some verifica se pelo menos um elemento em goodUsers atende a uma condição.
        // Se pelo menos um elemento passar na condição, some retorna true, caso contrário, retorna false.
      );
    };
  }
  