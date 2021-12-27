import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { NumberProvider } from './providers/number-provider';
import { BooleanProvider } from './providers/boolean-provider';
import { StringContext } from './providers/string-provider';

ReactDOM.render(
  <React.StrictMode>
    <NumberProvider>
      <BooleanProvider initialValue={true}>
        <StringContext.Provider value={'String'}>
          <App />
        </StringContext.Provider>
      </BooleanProvider>
    </NumberProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
