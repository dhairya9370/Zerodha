import React, { useState, useCallback, useMemo, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
// 1. Create and export the context at the top cleanly
export const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (details) => {}, // Placeholder for future sell window function
  closeSellWindow: () => {}, // Placeholder for future sell window function
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // Placeholder state for sell window
  const [sellWindowDetails, setSellWindowDetails] = useState(null); // Placeholder state for sell window details
  // 2. Memoize functions so they don't regenerate on every state change
  const handleOpenBuyWindow = useCallback((uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  }, []);

  const handleCloseBuyWindow = useCallback(() => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  }, []);

  const handleOpenSellWindow = useCallback((details) => {
    setIsSellWindowOpen(true);
    setSellWindowDetails(details);
  }, []);

  const handleCloseSellWindow = useCallback(() => {
    setIsSellWindowOpen(false);
    setSellWindowDetails(null);
  }, []);

  // 3. Memoize the context value itself
  const contextValue = useMemo(() => ({
    openBuyWindow: handleOpenBuyWindow,
    closeBuyWindow: handleCloseBuyWindow,
    openSellWindow: handleOpenSellWindow, // Placeholder for future sell window function
    closeSellWindow: handleCloseSellWindow, // Placeholder for future sell window function
  }), [handleOpenBuyWindow, handleCloseBuyWindow, handleOpenSellWindow, handleCloseSellWindow]);

  return (
    <GeneralContext.Provider value={contextValue}>
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {/* Placeholder for future SellActionWindow component */}
      {isSellWindowOpen && <SellActionWindow details={sellWindowDetails} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;