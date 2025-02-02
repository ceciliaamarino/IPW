
function copyValidArrayElements(arr, elementValidators) {
    return arr.filter(element => // o filter retorna um novo array contendo apenas os elementos que passaram no teste. 'element' para cada elemento do arr essa função é executada
      elementValidators.some(validatorObj => // some percorre o array elementValidators e retorna true se pelo menos um dos objetos de validação (validatorObj) passar
        validatorObj.validators.every(validator => validator(element)) // garante saber em qual validador aquele conjunto vai passar, se passa logo de primeira (string) o every retorna true e pronto, senão passar de primeira, vai passar novamente pelo some e na segunda vai passar e retornar true, já que se o some for true uma das validações do every vai ter que dar true
      )
    );
  }
  
  Array.prototype.copyValidArrayElements = function (elementValidators) {
    // Chama a função copyValidArrayElements, que filtra os elementos do array
    return this.filter(element =>
      elementValidators.some(validatorObj =>
        validatorObj.validators.every(validator => validator(element))
      )
    );
  };
  
  export default copyValidArrayElements; // Exportando a função para ser usada nos testes
  