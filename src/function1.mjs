function validateArrayElements(arr, elementValidator) {
  let isAllValid = true; // Inicialmente, vamos assumir que tudo é válido

  arr.forEach(element => { 
    // verifica para cada elemento se todas as validações passam 
    const isItValid = elementValidator.validators.every(validator => validator(element));

    // Se qualquer elemento for inválido, isAllValid como false
    if (!isItValid) {
      isAllValid = false;
    }
  });

  return isAllValid; // Retorne apenas o valor booleano, sem mensagem
}

export default validateArrayElements; 
