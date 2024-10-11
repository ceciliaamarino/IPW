// src/function4.mjs

// Adiciona a função groupBy ao protótipo do Array
Array.prototype.groupBy = function(transformer) {
    const result = {}; // O objeto que armazenará os grupos
  
    // Percorre todos os elementos do array
    this.forEach(element => {
      const key = transformer(element); // Aplica o transformer para obter a chave
  
      // Se a chave ainda não existir no resultado, cria um array para ela
      if (!result[key]) {
        result[key] = [];
      }
  
      // Adiciona o elemento ao array correspondente à chave
      result[key].push(element);
    });
  
    return result; 
  };
  
  export default Array.prototype.groupBy; // Exporta a função para ser usada nos testes
  