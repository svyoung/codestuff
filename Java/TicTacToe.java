import java.util.*;

public class TicTacToe {
	
	public static Scanner input = new Scanner(System.in);
	public static String[] board;
	
	 public static void printBoard(String board[]) {
	        System.out.println(" " + board[0] + " | " + board[1] + " | " + board[2] +
	                           "\n-----------\n" +
	                           " " + board[3] + " | " + board[4] + " | " + board[5] +
	                           "\n-----------\n" +
	                           " " + board[6] + " | " + board[7] + " | " + board[8]);
	}
	 
	public static void move(String board[], String move, int player) {
		if(player == 1) {
			board[Integer.parseInt(move)] = "X";
		} else {
			board[Integer.parseInt(move)] = "O";
		}
		printBoard(board);
	}
	
	public static int winner(String board[]) {
		int result = 0;
		if(board[0] == "X" && board[1] == "X" && board[2] == "X") {
			result = 1;
		} else if(board[3] == "X" && board[4] == "X" && board[5] == "X" ) {
			result = 1;
		} else if(board[6] == "X" && board[7] == "X" && board[8] == "X" ) {
			result = 1;
		} else if(board[0] == "X" && board[3] == "X" && board[6] == "X" ) {
			result = 1;
		} else if(board[1] == "X" && board[4] == "X" && board[7] == "X" ) {
			result = 1;
		} else if(board[2] == "X" && board[5] == "X" && board[8] == "X" ) {
			result = 1;
		} else if(board[0] == "X" && board[4] == "X" && board[8] == "X" ) {
			result = 1;
		} else if(board[2] == "X" && board[4] == "X" && board[6] == "X" ) {
			result = 1;
		} else if(board[0] == "O" && board[1] == "O" && board[2] == "O") {
			result = 2;
		} else if(board[3] == "O" && board[4] == "O" && board[5] == "O" ) {
			result = 2;
		} else if(board[6] == "O" && board[7] == "O" && board[8] == "O" ) {
			result = 2;
		} else if(board[0] == "O" && board[3] == "O" && board[6] == "O" ) {
			result = 2;
		} else if(board[1] == "O" && board[4] == "O" && board[7] == "O" ) {
			result = 2;
		} else if(board[2] == "O" && board[5] == "O" && board[8] == "O" ) {
			result = 2;
		} else if(board[0] == "O" && board[4] == "O" && board[8] == "O" ) {
			result = 2;
		} else if(board[2] == "O" && board[4] == "O" && board[6] == "O" ) {
			result = 2;
		} else {
			// nobody wins
			result = 3;
		}
		int marked = 0;
		for(int i=0; i<board.length; i++) {
			if(board[i] == "X" || board[i] =="O") {
				marked++;
			}
		}
		if(marked == 9 && result == 3) {
			result = 4;
		}
		
		return result;
		
	}

	public static void main(String[] args) {
		String board[] = {"0", "1", "2", "3", "4", "5", "6", "7", "8"};
		printBoard(board);
		int playerTurn = 0;
		int playerNum = 0;
		boolean turns = true;
		
		while (turns) {
			if(playerTurn % 2 == 0) {
				// player 1
				System.out.println("Player 1's move:");
				playerNum = 1;
			} else {
				System.out.println("Player 2's move:");
				playerNum = 2;
			}
			String move = input.nextLine();
			move(board, move, playerNum);
			playerTurn++;
			int checkwinner = winner(board);
			if(checkwinner == 1) {
				System.out.println("Player 1 wins!");
				turns = false;
			} else if (checkwinner == 2) {
				System.out.println("Player 2 wins!");
				turns = false;
			} else if(checkwinner == 4) {
				System.out.println("Both are tied");
				turns = false;
			} 
		}
		
		
	}

}
