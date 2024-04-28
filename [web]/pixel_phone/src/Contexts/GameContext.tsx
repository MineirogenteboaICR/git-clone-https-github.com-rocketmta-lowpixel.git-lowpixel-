import React, { useContext, createContext, FC, ReactNode, useEffect } from 'react';

interface MtaContextType {
  addEventListener: (eventName: string, handler: (arg?: any) => void) => void;
}

const MtaContext = createContext<MtaContextType | undefined>(undefined);

export const useMta = (): MtaContextType => {
  const context = useContext(MtaContext);
  if (!context) {
    throw new Error('useMta must be used within a MtaProvider');
  }
  return context;
};

interface MtaProviderProps {
  children: ReactNode;
}

type EventHandler = {
  event: string,
  handler: Function
}

const MtaProvider: FC<MtaProviderProps> = ({ children }) => {
  const [registeredFunctions, setRegisteredFunctions] = React.useState<EventHandler[]>([]);

  const addEventListener = (eventName: string, handler: (arg?: any) => void) => {
    const eventAlreadyRegistered = registeredFunctions.some(event => event.event === eventName);
  

    if (!eventAlreadyRegistered) {

      setRegisteredFunctions(prev => [...prev, { event: eventName, handler: handler }]);
    }
  };
  

    const w = window as any;
  
    w.nuiCallFunction = (arg?: any) => {
      const data = JSON.parse(arg)[0];

      registeredFunctions.forEach(func => {
 
        if (func.event == data.event) {
          func.handler(data.data)
        }
      });
    };

    
  return (
    <MtaContext.Provider value={{ addEventListener }}>
      {children}
    </MtaContext.Provider>
  );
};

export default MtaProvider;
