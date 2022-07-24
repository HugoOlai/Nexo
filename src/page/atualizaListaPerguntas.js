export function atualizaListaPerguntas(Nome){
    console.log(Nome)
    switch (Nome) {
      case 'Você recebeu algun voucher alimentação da empresa?':
        return[{
            Nome: 'Foi direcionado(a) para algum hotel/pousada às custas da empresa?',
          },
          {
            Nome: 'Sim',
          }, 
          {
            Nome: 'Não',
        }]
      break;

      case 'Foi direcionado(a) para algum hotel/pousada às custas da empresa?':
        return[{
            Nome: 'Você recebeu algum valor em dinheiro ou em crédito para viagens futuras por esse problema?',
          },
          {
            Nome: 'Sim',
          }, 
          {
            Nome: 'Não',
        }]
      break;

      case 'Você recebeu algum valor em dinheiro ou em crédito para viagens futuras por esse problema?':
        return[{
            Nome: 'Você já buscou seus direitos na Justiça por esse problema?',
          },
          {
            Nome: 'Sim',
          }, 
          {
            Nome: 'Não',
        }]
      break;

      case 'Você já buscou seus direitos na Justiça por esse problema?':
        return[{
            Nome: 'Teve algum gasto extra devido ao atraso de voo?',
          },
          {
            Nome: 'Sim e tenho como provar',
          }, 
          {
            Nome: 'Sim, mas não tenho como provar',
          }, 
          {
            Nome: 'Não tive gastro extra',
        }]
      break;

      case 'Teve algum gasto extra devido ao atraso de voo?':
        return[{
            Nome: 'Você possui algum tipo de necessidade especial?',
          },
          {
            Nome: 'Não',
          }, 
          {
            Nome: 'Sim'
        }]
      break;

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
          Nome:'Quando você ficou sabendo sobre o atraso do seu voo?'
        },
        {
          Nome: 'Somente no aeroporto',
        },
        {
          Nome: 'Menos de 72h antes do voo',
        }, 
        {
          Nome: 'Mais de 72h antes do voo',
        }]
      break;
    
      case 'Entre 4h e 8h':
        return  [{
          Nome:'Você perdeu algum compromisso por causa da alteração do seu voo?'
        },
        {
          Nome: 'Sim, e tenho como provar',
        },
        {
          Nome: 'Sim, mas não tenho como provar',
        }, 
        {
          Nome: 'Não!',
        }]
      break;

      case 'Não!':
        return  [{
          Nome:'Você recebeu algum tipo de assistência da companhia aérea?'
        },
        {
          Nome: 'Sim, e tenho como provar!',
        },
        {
          Nome: 'Não!',
        }]
      break;

      case 'Sim, mas não tenho como provar':
        return  [{
          Nome:'Você recebeu algum tipo de assistência da companhia aérea?'
        },
        {
          Nome: 'Sim, e tenho como provar',
        },
        {
          Nome: 'Não',
        }]
      break;

      case 'Mais de 8h':
      case 'Não viajei':
      case 'Sim, e tenho como provar':
      case 'Não':
        return[{
          Nome:'Qual foi o motivo do atraso?'
        },
        {
          Nome: 'Problema técnico/operacional',
        },
        {
          Nome: 'Climático',
        }, 
        {
          Nome: 'Outros',
        }]
      break;

      case 'Não pude embarcar porque meu voo estava lotado (overbooking)':
      case 'Somente no aeroporto':  
      case 'Menos de 72h antes do voo':
        return [{
          Nome: 'Com quanto tempo de atraso você chegou ao aeroporto de destino final da sua viagem?'
        },
        {
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
          Nome: 'Seu voo foi nacional ou internacional?'
        },
        {
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

      case 'Mais de 72h antes do voo':
        return [{
          Nome: 'Entre as opções abaixo, quando seria a data de partida do voo que você comprou?',
        },
        {
          Nome: 'Antes de 19/03/2020'
        },
        {
          Nome: 'Entre 19/03/2020 e 31/12/2021'
        },
        {
          Nome: 'A partir de 01/01/2022'
        },]
      break
      
      default:
          return [{
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
    }
    
  }












  export function voltarListaPerguntas(pergunta){
    switch (pergunta) {
      case  'Quantidade de pessoas':
        return [{
          Nome: 'Você possui algum tipo de necessidade especial?',
        },
        {
          Nome: 'Não',
        }, 
        {
          Nome: 'Sim'
      }] 
      break;

      case 'Qual foi o seu problema?':
        return[{
          Nome:'Quando você ficou sabendo sobre o atraso do seu voo?'
        },
        {
          Nome: 'Somente no aeroporto',
        },
        {
          Nome: 'Menos de 72h antes do voo',
        }, 
        {
          Nome: 'Mais de 72h antes do voo',
        }]
      break;

      case 'O que aconteceu com a sua bagagem?':
      case 'A companhia aérea cancelou seu voo ou você desistiu de viajar?':
        return [{
          Nome: 'Por qual dessas situações você passou?',
        },
        {
          Nome: 'Problema com voo',
        }, 
        {
          Nome: 'Problema com bagagem',
        }, 
        {
          Nome: 'Problema com reembolso de passagem',
        }]
      break
      
      //case 'Quando você ficou sabendo sobre o atraso do seu voo?':
      case 'Com quanto tempo de atraso você chegou ao aeroporto de destino final da sua viagem?':
      case 'Seu voo foi nacional ou internacional?':
        return [{
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
      
      case 'Qual foi o motivo do atraso?':
      case 'Você perdeu algum compromisso por causa da alteração do seu voo?':
        return[{
          Nome: 'Com quanto tempo de atraso você chegou ao aeroporto de destino final da sua viagem?'
        },
        {
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

      default:
          return [{
            Nome: 'Por qual dessas situações você passou?',
          },
          {
            Nome: 'Problema com voo',
          }, 
          {
            Nome: 'Problema com bagagem',
          }, 
          {
            Nome: 'Problema com reembolso de passagem',
        }]
      break;
    }
  }