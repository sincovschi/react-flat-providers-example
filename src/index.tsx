import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import { NumberProvider } from './providers/number-provider';
import { BooleanProvider } from './providers/boolean-provider';
import { StringContext } from './providers/string-provider';
import {
  FlatProviders,
  makeProvider,
  useChainProviders,
} from 'react-flat-providers';

const root = ReactDOMClient.createRoot(document.getElementById('root'));

const FlatProvidersExample = () => {
  return (
    <FlatProviders
      // FlatProviders can be easily feeded with any types of providers
      providers={[
        // As FC with curried props or without props at all
        NumberProvider,
        // As a Tuple with provider and props object, without type safety
        [BooleanProvider, { initialValue: false }],
        // As a result of function makeProvider that returns tuple
        // makeProvider enforces type safety
        makeProvider(StringContext.Provider, { value: 'String' }),
      ]}
    >
      <App />
    </FlatProviders>
  );
};

root.render(
  <React.StrictMode>
    <FlatProvidersExample />
  </React.StrictMode>
);

const ChainedProvidersExample = () => {
  // this is an alternative to FlatProviders
  // with benefits of innate type safety and nicer aspect
  const FlatChainedProviders = useChainProviders()
    .add(NumberProvider, { initialNumber: 2022 })
    .add(BooleanProvider, { initialValue: true })
    .add(StringContext.Provider, { value: 'Chained initial string' })
    .make();

  return (
    <FlatChainedProviders>
      <App />
    </FlatChainedProviders>
  );
};

root.render(
  <React.StrictMode>
    <ChainedProvidersExample />
  </React.StrictMode>
);
