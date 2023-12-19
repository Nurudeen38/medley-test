import React, { ReactNode } from 'react';
import {
  EmptyTable,
  Table as StyledTable,
  Tbody,
  Td,
  Th,
  ThRow,
  Thead,
  Trow,
} from './Table.styled';
import TableLoader from './TableLoader';
import Pagination from './Pagination';
import { Wrapper } from '../common.styled';

type Props<T> = {
  columns: {
    accessor: string;
    label: string;
    format?: (value: T[keyof T]) => ReactNode;
    sortable?: boolean;
  }[];
  rows: Array<T>;
  isLoading?: boolean;
  pageNo: number;
  handlePageChange: (e: number) => void;
  totalPageCount: number;
  limit: string;
};

const Table = <T extends { username?: string }>({
  columns,
  rows,
  isLoading,
  pageNo,
  handlePageChange,
  totalPageCount,
}: Props<T>) => {
  return (
    <>
      <Wrapper>
        {isLoading && <TableLoader />}
        <StyledTable>
          <Thead>
            <ThRow>
              {columns?.map((column) => {
                return <Th key={column.accessor}>{column.label}</Th>;
              })}
            </ThRow>
          </Thead>
          <Tbody>
            {rows.length === 0 && !isLoading && (
              <tr>
                <EmptyTable colSpan={4}>No data</EmptyTable>
              </tr>
            )}
            {rows?.map((row) => {
              return (
                <Trow key={row.username}>
                  {columns.map((column) => {
                    if (column.format) {
                      return (
                        <Td key={column.accessor}>
                          {column.format(
                            row[column.accessor as keyof typeof row]
                          )}
                        </Td>
                      );
                    }
                    return (
                      <Td key={column.accessor}>
                        {row[column.accessor as keyof typeof row] as string}
                      </Td>
                    );
                  })}
                </Trow>
              );
            })}
          </Tbody>
        </StyledTable>
      </Wrapper>
      {!isLoading && (
        <Pagination
          onPageChange={handlePageChange}
          className=""
          currentPage={pageNo}
          totalPageCount={totalPageCount}
        />
      )}
    </>
  );
};

export default Table;
