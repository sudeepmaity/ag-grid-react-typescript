// Filename: hooks/OrderInfoContext.tsx
import React, { createContext, useState, useContext } from "react";
import { SelectedFilesAmountType, SummaryType } from "../types";

interface AccountInfoType {
  accountId: string;
  split: string;
  costCenter: string;
  isNational: boolean;
}

interface OrderInfoContextType {
  selectedFilesAmount: SelectedFilesAmountType;
  setSelectedFilesAmount: React.Dispatch<
    React.SetStateAction<SelectedFilesAmountType>
  >;
  summaryInfo: SummaryType;
  setSummaryInfo: React.Dispatch<React.SetStateAction<SummaryType>>;
  accountInfoList: AccountInfoType[];
  setAccountInfoList: React.Dispatch<React.SetStateAction<AccountInfoType[]>>;
}

const defaultSummaryInfo: SummaryType = {
  reportedNet: "N/A",
  calculatedNet: "N/A",
  netDifference: "N/A",
  accountNo: "N/A",
  split: "N/A",
  costCenter: "N/A",
};

const defaultSelectedFilesAmount: SelectedFilesAmountType = {
  calculatedGross: "0",
};

const OrderInfoContext = createContext<OrderInfoContextType | null>(null);

export const OrderInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedFilesAmount, setSelectedFilesAmount] =
    useState<SelectedFilesAmountType>(defaultSelectedFilesAmount);
  const [summaryInfo, setSummaryInfo] =
    useState<SummaryType>(defaultSummaryInfo);

  const [accountInfoList, setAccountInfoList] = useState<AccountInfoType[]>([]);

  return (
    <OrderInfoContext.Provider
      value={{
        selectedFilesAmount,
        setSelectedFilesAmount,
        summaryInfo,
        setSummaryInfo,
        accountInfoList,
        setAccountInfoList,
      }}
    >
      {children}
    </OrderInfoContext.Provider>
  );
};

export const useOrderInfo = (): OrderInfoContextType => {
  const context = useContext(OrderInfoContext);
  if (!context) {
    throw new Error("useOrderInfo must be used within an OrderInfoProvider");
  }
  return context;
};
