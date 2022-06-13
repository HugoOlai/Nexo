export default function atualizaListaPerguntas(Nome){
    console.log(Nome)
    switch (Nome) {
      case 'Problema com voo':
      return[{
        Nome: 'Qual foi o seu problema?',
      },
      {
        Nome: 'Meu voo atrasou',
      }, 
      {
        Nome: 'Meu voo foi cancelado',
      }, 
      {
        Nome: 'Não pude embarcar porque meu voo estava lotado (overbooking)',
      }, 
      {
        Nome: 'Meu voo de volta foi cancelado por não comparecimento ao voo de ida (no-show)',
      }]
      break;

      case 'Meu voo atrasou':
      case 'Meu voo foi cancelado':
        return [{
          Nome: 'Somente no aeroporto',
        },
        {
          Nome: 'Menos de 72h antes do voo',
        }, 
        {
          Nome: 'Mais de 72h antes do voo',
        }]
      break;
    
      case 'Não pude embarcar porque meu voo estava lotado (overbooking)':
        return [{
          Nome: 'Menos de 4h',
        },
        {
          Nome: 'Entre 4h e 8h',
        }, 
        {
          Nome: 'Mais de 8h',
        }, 
        {
          Nome: 'Não viajei',
        }, 
        {
          Nome: 'Ainda não cheguei',
        }]
      break;
    
      case 'Meu voo de volta foi cancelado por não comparecimento ao voo de ida (no-show)':
        return [{
          Nome: 'Nacional',
        },
        {
          Nome: 'Internacional',
        }]
      break;

      case 'Problema com bagagem':
        return[{
          Nome: 'O que aconteceu com a sua bagagem?',
        },
        {
          Nome: 'Extravio (ou perda) da bagagem',
        }, 
        {
          Nome: 'Danificação da bagagem (sem extravio)',
        }]
      break;

      case 'Problema com reembolso de passagem':
        return [{
          Nome: 'A companhia aérea cancelou seu voo ou você desistiu de viajar?',
        },
        {
          Nome: 'A companhia aérea cancelou meu voo',
        }, 
        {
          Nome: 'Eu desisti da minha passagem',
        }]
      break;
      
      default:
          return []
        break;
    }
    
  }