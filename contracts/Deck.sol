pragma solidity ^0.4.2;

contract Deck {

    mapping (int => Card) deck;
    mapping (int => Player) players;
    Game game;
    event SendStack(int chips, int seat);
    event Deal(int first);
    event AdvanceRound(int action);
    event Test(int card);


    struct Card {
        string card;
        int rank;
    }

    struct Player {
        Card card;
        int8 active;
        int chips;
        int currentBet;
    }

    struct Game {
        int pot;
        int action;
        int raiser;
        int dealer;
        int amountToCall;
    }

    function getCurrentPlayerBet(int seat) constant returns(int) {
        return players[seat].currentBet;
    }

    function getCurrentPotSize() constant returns(int) {
        return game.pot;
    }

    function getGameState() constant returns(int) {
        return game.action;
    }

    function sitDown(int seat, int chips) {
        players[seat].active = 2;
        players[seat].chips = chips;
        SendStack(players[seat].chips, seat);
    }

    function standUp(int seat) {
        players[seat].active = 0;
        players[seat].chips = 0;
        SendStack(players[seat].chips, seat);
    }

    function playerActive(int seat) constant returns(int8) {
        return players[seat].active;
    }

    function initGame() {
        game.pot = 0;
        var next = [1,2,3,0];

        for(var i = 0; i < 4; i++) {
            if(players[i].active == 1) {
                players[i].active = 2;
            }
        }

        game.dealer = next[uint(game.dealer)];

        while(players[game.dealer].active == 0) {
            game.dealer = next[uint(game.dealer)];
        }

        game.raiser = next[uint(game.dealer)];

        while(players[game.raiser].active == 0) {
            game.raiser = next[uint(game.raiser)];
        }
 
        game.action = game.raiser;

        for(i = 0; i < 4; i++) {
            players[i].card = deck[i];
        }

    }

    function deal() {
        initGame();
        Deal(game.action);
    }


    function nextToAction() {
        var next = [1, 2, 3, 0];


        game.action = next[uint(game.action)];

        while(players[game.action].active != 2 && game.action != game.raiser) {
            game.action = next[uint(game.action)];
        }

        Test(game.raiser);
        
        if(game.action == game.raiser) {
            AdvanceRound(101);
        } else {
            AdvanceRound(game.action);
        }

    }

    function calcWinner() {
        int seat = winner();
        players[seat].chips += game.pot;
        game.pot = 0;
        
        for(var i = 0; i < 4; i++) {
            players[i].currentBet = 0;
        }

        SendStack(players[seat].chips, seat);
    }

    function winner() returns(int) {
        int winner;
        int score = 52;
        for(var i = 0; i < 4; i++) {
            if(players[i].active == 2 && players[i].card.rank < score) {
                winner = i;
                score = players[i].card.rank;
            }
        }

        return winner;
    }

    function bet(int amount, int seat, bool raise) {
        players[seat].chips = players[seat].chips - amount;
        players[seat].currentBet += amount;
        game.pot += amount;
        game.amountToCall = players[seat].currentBet;
        
        if(raise){
            game.raiser = seat;
        }

        SendStack(players[seat].chips, seat);
    }

    function fold(int seat) {
        players[seat].active = 1;
    }

    function getCard(int index) constant returns(string) {
        return deck[index].card;
    }

    function shuffle() {
        Card memory temp;
        int randCard;


        for(int i = 52; i > 0; i--) {
            randCard = rand(i);
            if(randCard < 0) randCard = -1 * randCard;
            temp = deck[i - 1];
            deck[i - 1] = deck[randCard];
            deck[randCard] = temp;
        }

        for(i = 0; i < 4; i++) {
            players[i].card = deck[i];
        }


        deal();
    }


    function Deck() {
        string[] memory suits = new string[](4);
        suits[0] = 's';
        suits[1] = 'h';
        suits[2] = 'c';
        suits[3] = 'd';

        string[] memory faces = new string[](13);
        faces[0] = 'A';
        faces[1] = 'K';
        faces[2] = 'Q';
        faces[3] = 'J';
        faces[4] = 'T';
        faces[5] = '9';
        faces[6] = '8';
        faces[7] = '7';
        faces[8] = '6';
        faces[9] = '5';
        faces[10] = '4';
        faces[11] = '3';
        faces[12] = '2';

        
        int deckPosition = 0;

        for(var i = 0; i < faces.length; i++) {
            for(var j = 0; j < suits.length; j++) {
                deck[deckPosition].card = strConcat(faces[i], suits[j]);
                deck[deckPosition].rank = deckPosition;
                deckPosition++;
            }
        }


        int index = 0;

        while(index < 4) {
            players[index].active = 0;
            index++;
        }

        game.dealer = 3;
    }

    function rand(int max) returns(int) {
        return int(block.blockhash(block.number-1)) % max + 1;
    }

    function strConcat(string _a, string _b) internal returns (string){
        bytes memory _ba = bytes(_a);
        bytes memory _bb = bytes(_b);

        string memory abcde = new string(_ba.length + _bb.length);
        bytes memory babcde = bytes(abcde);
        uint k = 0;

        for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
        for (i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
     
        return string(babcde);
    }

    function UintToString(uint v) constant returns (string) {
      bytes32 ret;
      if (v == 0) {
        ret = '0';
      }
      else {
          while (v > 0) {
          ret = bytes32(uint(ret) / (2 ** 8));
          ret |= bytes32(((v % 10) + 48) * 2 ** (8 * 31));
          v /= 10;
          }
      }

      bytes memory bytesString = new bytes(32);

      for (uint j=0; j<32; j++) {
        byte char = byte(bytes32(uint(ret) * 2 ** (8 * j)));
        if (char != 0) {
          bytesString[j] = char;
        }
      }

      return string(bytesString);
    }

    // function str2Bytes32(string memory source) returns (bytes32 result) {
 //    assembly {
 //        result := mload(add(source, 32))
 //    }
    // }

}