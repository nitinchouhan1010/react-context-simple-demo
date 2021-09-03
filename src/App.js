import React from 'react';
import ComponentA from './ComponentA';
import ContextProvider from './ContextProvider';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <ContextProvider>
        <ComponentA />
      </ContextProvider>
    </div>
  );
}
