import styled from 'styled-components';
import { BOARD_WIDTH, CellContent, GameAction, GameState } from '../types';

interface BoardProps {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

export function Board({ state, dispatch }: BoardProps) {
  return (
    <div>
      <StyledBoard>
        <table>
          <thead>
            <tr>
              {Array.from({ length: BOARD_WIDTH }, (_, i) => (
                <th key={i}>
                  <button onClick={() => dispatch({ type: 'place', column: i, color: state.turn })}>Place</button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {state.boardData.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {row.map((cc, cellIndex) => (
                    <BoardCell key={cellIndex} cc={cc} />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </StyledBoard>
    </div>
  );
}

const StyledBoard = styled.div`
  background-color: #0000ff;
  margin: auto;
  height: 100%;
`;

function BoardCell({ cc }: { cc: CellContent }) {
  return (
    <td>
      <StyledCell cc={cc}></StyledCell>
    </td>
  );
}

interface StyledCellProps {
  cc: CellContent;
}

const StyledCell = styled.div<StyledCellProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${({ cc }) => (cc === 'red' ? '#ff0000' : cc === 'yellow' ? '#ffff00' : '#ffffff')};
`;
