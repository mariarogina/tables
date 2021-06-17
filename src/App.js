import React from 'react'
import './App.css';
import { SortedTable }from './SortedTable';
import { ApiTable } from './ApiTable';



function App() {

  const columns = React.useMemo(
    () => [
      {
        Header: "Company",
        accessor: "company" // accessor is the "key" in the data
      },
      {
        Header: "Contact",
        accessor: "contact"
      },
      {
        Header: "Country",
        accessor: "country"
      }
    ],
    []
  );
const data = React.useMemo(
    () => [
      {
        company: "Alfred",
        contact: "Maria Anders",
        country: "Germany"
      },
      {
        company: "Centro comercial Moctezuma",
        contact: "Francisco Chang",
        country: "Mexico"
      },
      {
        company: "Ernst Handel",
        contact: "Roland Mendel	",
        country: "Austria"
      }
    ],
    []
  );
  return (
    <div className="App">
      <SortedTable columns={columns} data={data}/>
      <br/>
      <br/>
      <ApiTable columns={columns} data={data}/>
    </div>
  );
}

export default App;
