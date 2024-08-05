class ChessPiece {
    constructor(x, y) {
        if (new.target === ChessPiece) {
            throw new Error("Cannot instantiate abstract class ChessPiece");
        }
        this.positionX = x;
        this.positionY = y;
        this.chessType = this.setType();
    }

    checkMove() {}

    setType() {}
}
