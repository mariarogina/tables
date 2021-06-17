
import React, { useEffect, useState } from "react";
import { PaginationTable } from "./PaginationTable";

export function ApiTable() {
  const [cells, setCells] = useState([]);

  const getData = async () => {
    const resp = await fetch("https://api.thecatapi.com/v1/breeds");
    const data = await resp.json();
    setCells(data);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name" // accessor is the "key" in the data
      },
      {
        Header: "description",
        accessor: "description"
      },
      {
        Header: "temperament",
        accessor: "temperament"
      }
    ],
    []
  );

  useEffect(() => {
    getData();
  }, []);

  return <>{cells && <PaginationTable columns={columns} data={cells} />}</>;
}