// types.ts (You can create this file to store shared types)
export interface OrderType {
  cheque: string;
  port: string;
}

// Also, export other shared interfaces if needed
export interface FileRowData {
  fileNumber: string;
  accountNumber: string;
  propertyAddress: string;
  county: string;
  propertyType: string;
  gross: number;
  net: number;
}
