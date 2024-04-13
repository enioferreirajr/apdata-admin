// Importações necessárias
import React from 'react';
import * as XLSX from 'xlsx';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SaveIcon from '@mui/icons-material/Save';

// Definição da interface de props
interface ExportToExcelProps {
  data: any[];  // Array de objetos para exportar
  fileName: string;  // Nome do arquivo Excel
  tooltipText: string;  // Texto do tooltip
}

// Função para converter dados para uma planilha e baixar
const exportToExcel = (data: any[], fileName: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

// Componente ExportToExcel
const ExportToExcel: React.FC<ExportToExcelProps> = ({ data, fileName, tooltipText }) => {
  return (
    <Tooltip title={tooltipText}>
      <IconButton onClick={() => exportToExcel(data, fileName)}>
        <SaveIcon />
      </IconButton>
    </Tooltip>
  );
};

export default ExportToExcel;
