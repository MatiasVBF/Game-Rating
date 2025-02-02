const gets = () => {
    // Aqui você pode substituir pelo método real de obter a entrada do usuário.
    // Exemplo: leitura de um input em um formulário HTML.
    return "God"; // Substitua isto pela entrada real do usuário.
  };
  
  const classe = gets();
  
  switch(classe) {
    case "Guerreiro":
        console.log("Você escolheu a classe Guerreiro!");
        break;
    case "Mago":
        console.log("Você escolheu a classe Mago!");
        break;
    case "Arqueiro":
        console.log("Você escolheu a classe Arqueiro!");
        break;
        case "Curandeiro":
        console.log("Você escolheu a classe Curandeiro!");
        break;
    default:
        console.log("Classe inválida!");
        break;
  }
  
  