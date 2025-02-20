import React, { useRef } from "react";
import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
import { HotTable } from "@handsontable/react";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const HandsOnTableComparison = () => {
  const hotRef = useRef(null);

  const columnHeaders = [
    "Row", "Client", "ERP", "Analista", "Lojas", "Cadastrados", "Novos",
    "Nomes Diferentes", "Com Divergence", "Pendentes", "Aguardando Sinc", "Ação"
  ];
  

  const rowData = Array.from({ length: 10 }, (_, index) => [
    index + 1, `Cliente ${index + 1}`, `ERP ${index + 1}`, `Analista ${index + 1}`,
    Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100), "🔴 🟢"
  ]);

  const exportToCSV = () => {
    const ws = XLSX.utils.aoa_to_sheet([columnHeaders, ...rowData]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Dados");
    const excelBuffer = XLSX.write(wb, { bookType: "csv", type: "array" });
    const blob = new Blob([excelBuffer], { type: "text/csv" });
    saveAs(blob, "handsontable-data.csv");
  };

  return (
    <div>
      <button onClick={exportToCSV} style={{ marginBottom: 10 }}>📥 Exportar para CSV</button>
      <HotTable
        ref={hotRef}
        data={rowData}
        colHeaders={columnHeaders}
        rowHeaders={true}
        filters={true}
        dropdownMenu={true}
        contextMenu={true}
        manualColumnResize={true}
        manualRowResize={true}
        licenseKey="non-commercial-and-evaluation"
        cells={(row, col) => {
          if (col >= 4 && col <= 10) { // Ajuste os índices das colunas numéricas
            return { className: "htCenter" };
          }
        }}        
      />
    </div>
  );
};

export default HandsOnTableComparison;
