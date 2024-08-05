class Game {
    constructor(playerBlack, playerWhite, ) {
        if (new.target === Game) {
            throw new Error("Cannot instantiate abstract class PiecesBase");
        }
        this.playerBlack = playerBlack;
        this.playerWhite = playerWhite;
        this.isBlackTurn = true
        this.boardGame = this.initBoard();
    }

    initBoard(){}

    startGame(){}

}




