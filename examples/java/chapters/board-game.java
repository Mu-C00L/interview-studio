final class ThreeInRow {
    enum Outcome { PLAYING, X_WINS, O_WINS, DRAW }
    private final char[][] board=new char[3][3];
    private char turn='X';private int moves;private Outcome outcome=Outcome.PLAYING;
    char cell(int r,int c){checkBounds(r,c);return board[r][c];}
    char turn(){return turn;}
    Outcome outcome(){return outcome;}
    private void checkBounds(int r,int c){if(r<0||r>=3||c<0||c>=3)throw new IllegalArgumentException("bounds");}
    private boolean wins(char p){
        for(int i=0;i<3;i++){
            if(board[i][0]==p&&board[i][1]==p&&board[i][2]==p)return true;
            if(board[0][i]==p&&board[1][i]==p&&board[2][i]==p)return true;
        }
        return (board[0][0]==p&&board[1][1]==p&&board[2][2]==p)||
               (board[0][2]==p&&board[1][1]==p&&board[2][0]==p);
    }
    void move(char player,int r,int c){
        checkBounds(r,c);
        if(outcome!=Outcome.PLAYING)throw new IllegalStateException("finished");
        if(player!=turn)throw new IllegalStateException("wrong turn");
        if(board[r][c]!=0)throw new IllegalStateException("occupied");
        board[r][c]=player;++moves;
        if(wins(player))outcome=player=='X'?Outcome.X_WINS:Outcome.O_WINS;
        else if(moves==9)outcome=Outcome.DRAW;
        else turn=turn=='X'?'O':'X';
    }
} // Single-threaded fixed-size game; turn() is meaningful only while PLAYING.
