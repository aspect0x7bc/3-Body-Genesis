import React from 'react';
import { useTable } from 'react-table';

import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
} from './LeaderTableElements';

const LeaderTable = ({ columns, data }) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState: {
      sortBy: [
        {
          id: 'score',
          desc: true,
        }
      ]
    }
  });

  return (
    <TableContainer>
      <Table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableHeader {...column.getHeaderProps()}>{column.render('Header')}</TableHeader>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
                })}
              </TableRow>
            )
          })}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default LeaderTable