import React from "react";
import { useTable, usePagination } from "react-table";

export function PaginationTable({ columns, data }) {

    const styles = {
        thead: {
          backgroundColor: "blue"
        },
        td: {
          padding: "10px",
          border: "dotted 1px black",
          maxWidth:'300px',
          minHeight:'70px'
        }
      };
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    page, // fetch the current page
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 2 }
    },
    usePagination
  );

  return (
    <div >
      <table style ={{textAlign:"center",margin:"0 auto"}} {...getTableProps()}>
        <thead style={styles.thead}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td style={styles.td} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        Previous page{" "}
      </button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        Next page{" "}
      </button>
    </div>
  );
}