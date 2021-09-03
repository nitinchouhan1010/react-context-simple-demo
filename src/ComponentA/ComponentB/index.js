import React from 'react';
import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../../ContextProvider';

const ComponentB = () => {
  const ContextValue = useContext(MainContext);

  const { assetDetail } = ContextValue;
  return <div>{assetDetail}</div>;
};

export default ComponentB;
