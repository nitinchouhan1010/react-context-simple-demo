import React, { createContext, useState } from 'react';

export const MainContext = createContext();
const ContextProvider = ({ children }) => {
  const [assetDetail, setAssetDetail] = useState('hello');

  return (
    <MainContext.Provider
      value={{
        assetDetail,
        setAssetDetail
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;
