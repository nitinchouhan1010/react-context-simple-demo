import React from 'react';
import React, { useContext } from 'react';
import { MainContext } from '../../ContextProvider';

const ComponentC = () => {
  const ContextValue = useContext(MainContext);
  const { setAssetDetail } = ContextValue;
  // const user = useContext(UserContext);

  return (
    <div>
      <button type="button" onClick={() => ContextValue.setAssetDetail('hii')}>
        Update Name
      </button>
    </div>
  );
};

export default ComponentC;
