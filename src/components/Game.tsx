import { useReducer } from 'react';
import { BOARD_HEIGHT, BOARD_WIDTH, CellContent, GameAction, GameState } from '../types';
import { Board } from './Board';
import update from 'immutability-helper';

const makeBoardData: () => CellContent[][] = () =>
  Array.from({ length: BOARD_HEIGHT }, (_, i) => Array.from({ length: BOARD_WIDTH }, (_, j) => ''));

function createInitialState(): GameState {
  return {
    boardData: makeBoardData(),
    turn: 'red',
  };
}

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'place':
      const { column } = action;
      const { boardData, turn } = state;
      const freeSpaceAtRow = BOARD_HEIGHT - 1 - [...boardData].reverse().findIndex((row) => row[column] === '');
      // const freeSpaceAtRow = 2;
      console.log('column, freeSpaceAtRow:', column, freeSpaceAtRow);
      const newBoardData = update(boardData, { [freeSpaceAtRow]: { [column]: { $set: turn } } });
      // const newBoardData = [...boardData];
      // const freeSpaceAtRow = BOARD_HEIGHT - [...newBoardData[column]].reverse().findIndex((cell) => cell === '');
      // newBoardData[column][freeSpaceAtRow] = turn;
      return {
        ...state,
        boardData: newBoardData,
        turn: turn === 'red' ? 'yellow' : 'red',
      };
    default:
      return state;
  }
}

export function Game() {
  const [state, dispatch] = useReducer(reducer, createInitialState());

  return <Board state={state} dispatch={dispatch} />;
}
