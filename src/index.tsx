import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { NumberProvider } from './providers/number-provider';
import { BooleanProvider } from './providers/boolean-provider';
import { StringContext } from './providers/string-provider';
import { FlatProviders, makeProvider } from 'react-flat-providers';

ReactDOM.render(
  <React.StrictMode>
    <FlatProviders
      providers={[
        NumberProvider,
        [BooleanProvider, { initialValue: true }],
        makeProvider(StringContext.Provider, { value: 'String' }),
      ]}
    >
      <App />
    </FlatProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
