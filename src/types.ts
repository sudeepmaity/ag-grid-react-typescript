// types.ts

export interface OrderType {
  port: string;
  firmName: string;
  orderDate: string;
  lockboxNumber: string;
  batchReferenceNumber: string;
  noOfChecks: string;
}

export interface SummaryType {
  reportedNet: string;
  calculatedNet: string;
  netDifference: string;
  accountNo: string;
  split: string;
  costCenter: string;
}

export interface SelectedFilesAmountType {
  calculatedGross: string;
}

export interface FileRowData {
  fileNumber: string;
  accountNumber: string;
  propertyAddress: string;
  county: string;
  propertyType: string;
  gross: number;
  net: number;
}
