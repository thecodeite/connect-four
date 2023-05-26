
export const BOARD_WIDTH = 7;
export const BOARD_HEIGHT = 6;

export type PlayerColour = 'red' | 'yellow';
export type CellContent = '' | PlayerColour;

export interface GameState {
  boardData: CellContent[][];
  turn: PlayerColour;
}

export type GameAction = {
  type: 'place';
  color: PlayerColour;
  column: number;
}