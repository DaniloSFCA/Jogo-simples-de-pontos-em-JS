var jogador1 = 0; 
var jogador2 = 1;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('OS JOGADORES SAO VALIDOS') :
console.log('JOGADORES INVALIDOS');

if (jogador1 > 0 && jogador2 == 0) {
        console.log('Jogador 1 marcou ponto!');
        placar = jogador1 > jogador2;
}   else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador 2 Marcou ponto!');
        placar = jogador2 > jogador1
}   else {
        console.log('Ninguem Marcou ponto ');    
}

switch (placar) {
        case placar = jogador1 > jogador2:
                console.log('JOGADOR 1 GANHOU');
                break;
         case placar = jogador2 > jogador1:
                console.log('JOGADOR 2 GANHOU');
                break;
        default:
                console.log('Ninguem ganhou' )               
}

   
























