import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface RowData {
  id: number;
  name: string;
  email: string;
  description: string;
}

interface AgGridTableProps {
  port: number;
}

const AgGridTable: React.FC<AgGridTableProps> = ({ port }) => {
  const [rowData, setRowData] = useState<RowData[]>([]);

  const columnDefs: ColDef<RowData>[] = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    { headerName: "Description", field: "description" },
  ];

  const defaultColDef: ColDef<RowData> = {
    sortable: true,
    editable: true,
    flex: 1,
    filter: true,
    floatingFilter: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${port}/api/items`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRowData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [port]);

  return (
    <div className="ag-theme-alpine" style={{ height: "400px" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default AgGridTable;
