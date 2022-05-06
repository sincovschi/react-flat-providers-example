import * as React from 'react';

const NumberContext = React.createContext<number | undefined>(undefined);

export function NumberProvider({
  initialNumber = 0,
  children,
}: React.PropsWithChildren<{ initialNumber: number }>) {
  return (
    <NumberContext.Provider value={initialNumber}>
      {children}
    </NumberContext.Provider>
  );
}

export function useNumber() {
  const context = React.useContext(NumberContext);
  if (context !== undefined) return context;
  throw new Error('useNumber must be used within a NumberProvider');
}
