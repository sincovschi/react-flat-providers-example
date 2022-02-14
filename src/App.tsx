import * as React from 'react';
import { useString } from './providers/string-provider';
import { useNumber } from './providers/number-provider';
import { useBoolean } from './providers/boolean-provider';

export function App() {
  const number = useNumber();
  const boolean = useBoolean();
  const string = useString();
  return (
    <div>
      <header>
        <h3>React flat providers example</h3>
        <h4>
          <a href="https://github.com/sincovschi/react-flat-providers">
            https://github.com/sincovschi/react-flat-providers
          </a>
        </h4>
      </header>
      <main>
        <ul>
          <li>useNumber(): {number}</li>
          <li>useBoolean(): {boolean ? 'true' : 'false'}</li>
          <li>useString(): {string}</li>
        </ul>
        <p>
          Inside <b>src</b> folder is available for preview the basic usages of
          Providers offered by package.
        </p>
        <p>
          <b>index.tsx</b> - the usage of the FlatProviders;
        </p>
        <p>
          <b>App.txs</b> - the consumption of providers;
        </p>
      </main>
    </div>
  );
}
