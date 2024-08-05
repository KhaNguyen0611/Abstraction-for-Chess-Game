class Board {
    constructor() {
        if (new.target === Board) {
            throw new Error("Cannot instantiate abstract class Board");
        }
        this.chessBoard = this.initBoard();
    }

    initBoard() {}
    move() {}
}

class Player {
    constructor(team) {
        if (new.target === Player) {
            throw new Error("Cannot instantiate abstract class Player");
        }
        this.team = team
    }
    makeMove() {}
}