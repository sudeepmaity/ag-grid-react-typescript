// types.ts (You can create this file to store shared types)
export interface OrderType {
  firmName: string;
  orderDate: string;
  lockboxNumber: string;
  batchReferenceNumber: string;
  noOfChecks: string;
}

export interface SummaryType {
  calculatedGross: string;
  reportedNet: string;
  calculatedNet: string;
  netDifference: string;
  accountNo: string;
  split: string;
  costCenter: string;
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
