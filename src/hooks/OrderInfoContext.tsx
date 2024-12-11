// hooks/OrderInfoContext.tsx
import React, { createContext, useState, useContext } from "react";
import { SelectedFilesAmountType, SummaryType } from "../types";

interface OrderInfoContextType {
  selectedFilesAmount: SelectedFilesAmountType;
  setSelectedFilesAmount: React.Dispatch<
    React.SetStateAction<SelectedFilesAmountType>
  >;
  summaryInfo: SummaryType;
  setSummaryInfo: React.Dispatch<React.SetStateAction<SummaryType>>;
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

  return (
    <OrderInfoContext.Provider
      value={{
        selectedFilesAmount,
        setSelectedFilesAmount,
        summaryInfo,
        setSummaryInfo,
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

/*
// hooks/OrderInfoContext.tsx
import React, { createContext, useState, useContext } from "react";
import { SelectedFilesAmountType } from "../types";

interface OrderInfoContextType {
  selectedFilesAmount: SelectedFilesAmountType;
  setSelectedFilesAmount: React.Dispatch<
    React.SetStateAction<SelectedFilesAmountType>
  >;
}

const defaultSelectedFilesAmount: SelectedFilesAmountType = {
  calculatedGross: "0",
};

const OrderInfoContext = createContext<OrderInfoContextType | undefined>(
  undefined
);

export const OrderInfoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedFilesAmount, setSelectedFilesAmount] =
    useState<SelectedFilesAmountType>(defaultSelectedFilesAmount);

  return (
    <OrderInfoContext.Provider
      value={{
        selectedFilesAmount,
        setSelectedFilesAmount,
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

*/
