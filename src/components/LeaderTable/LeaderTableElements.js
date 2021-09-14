import styled from 'styled-components';

export const TableContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  border-spacing: 0;
  border: 1px solid white;
`;

export const TableHeader = styled.th`
  font-size: 16pt;
  font-family: 'Courier New', Courier, monospace;
  border-bottom: 2px solid white;
`;

export const TableRow = styled.tr`
  font-family: 'Courier New', Courier, monospace;
  :last-child {
    td {
      border-bottom: 0;
    }
  }
`;

export const TableData = styled.td`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  word-break: break-all;
  max-width: 405px;

  :last-child {
    border-right: 0;
  }
`;