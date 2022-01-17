/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// //Montando o jogo

// console.log("Boas vindas ao jogo de Blackjack!")

// if(confirm("Quer iniciar uma nova rodada?")) {
//   iniciar()
// } else {
//   console.log("O jogo acabou")
// }

// //Sortear as 4 cartas. Detalhe:não podem ser repetidas
// //vou querer algo do tipo:
// //[ {obj1}, {obj2}, {obj3}, {obj4}]


// function iniciar(){
//   let arrayCartasSorteadas =[];
//   for(let i=0; i<14; i++){  //sortear 4 cartas

     

//      let cartaSorteadaCompleta = comprarCarta();
//      let cartaSorteadaTexto = cartaSorteadaCompleta.texto;
//      while(arrayCartasSorteadas.map((sorteio)=>{return sorteio.texto}).includes(cartaSorteadaTexto)){ //garantir que 
//          cartaSorteadaCompleta = comprarCarta();                                                    //não haverá repetição
//          cartaSorteadaTexto = cartaSorteadaCompleta.texto;
        
//      }
//      arrayCartasSorteadas.push(cartaSorteadaCompleta);

//   }
//   //console.log(arrayCartasSorteadas)

//   //para pegar somente texto das cartas sorteadas:
//   const cartasTexto = arrayCartasSorteadas.map((sorteio)=>{return sorteio.texto})
//   //console.log(cartasTexto)

//   //para pegar somente valor das cartas sorteadas:
//   const cartasValor = arrayCartasSorteadas.map((sorteio)=>{return sorteio.valor})
//   //console.log(cartasValor)

//   //definir mão usuário:
//   let arrayCartasUsuario = [];
//   for(let i=0; i<7; i++){
//    arrayCartasUsuario.push(arrayCartasSorteadas[i])
//   }


//   //definir mão computador:
//   let arrayCartasComputador = [];
//   for(let i=7; i<14; i++){
//       arrayCartasComputador.push(arrayCartasSorteadas[i])
//    }
   
//    //console.log(`Usuário - cartas: ${cartasTexto[0]} ${cartasTexto[1]} `)
//    //console.log(`Computador - cartas: ${cartasTexto[7]} `)

//    ////a partir daqui segunda etapa do desafio////////
   
//    //já tivemos a 'rodada 1' portanto a próxima será a rodada 2
// //    let rodada = 2
// //    let pontuacaoUsuario = cartasValor[0]+cartasValor[1];
// //    let pontuacaoComputador = cartasValor[7]+cartasValor[8];
// //    let verificaMenor21 = ((pontuacaoUsuario<21)&&(pontuacaoComputador<21));
// //    let cartaRodadaUsuario=[];
// //    let cartaRodadaComputador=[];
// //    while (confirm(
// //    `Suas cartas são ${cartasTexto[0]} ${cartasTexto[1]} ${cartaRodadaUsuario}. A carta revelada do computador 
// //    é ${cartasTexto[7]} . Deseja comprar mais uma carta?`)){
// //       cartaRodadaUsuario = cartaRodadaUsuario + [cartasTexto[rodada]]
// //       pontuacaoUsuario += cartasValor[rodada]
// //       pontuacaoComputador +=  cartasValor[rodada+7]
// //       // console.log(pontuacaoComputador)
// //       // console.log(pontuacaoUsuario)
// //       // console.log(verificaMenor21)
// //       if(verificaMenor21){
// //          console.log("aqui dentro")
// //       }else{
// //          if(pontuacaoUsuario>21){
// //             alert("O computador ganhou!")
// //             break
// //          }else if(pontuacaoComputador>21){
// //             alert("O usuário ganhou!")
// //             break
// //          }else{
// //             alert("empate!")
// //             break
// //          }
         
// //       }
      
// //    }
    
      
    
// //}
// //   Pontuações:

// //   const pontuacaoUsuario = cartasValor[0]+cartasValor[1]

// //   const pontuacaoComputador = cartasValor[2]+cartasValor[3]

// //   console.log("Pontuação do usuário: ", pontuacaoUsuario)
// //   console.log("Pontuação do computador: ", pontuacaoComputador)

// //   6) Mostrando cartas e pontuação de cada jogador
  


// // 7) Definição do vencedor

// //   if(pontuacaoUsuario > pontuacaoComputador){
// //      console.log("O usuário ganhou!")
// //   }else if(pontuacaoUsuario < pontuacaoComputador){
// //      console.log("O computador ganhou!")
// //   }else{
// //      console.log("Empate!")
// //   }

// =======

