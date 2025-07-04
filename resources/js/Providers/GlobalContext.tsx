import React, { createContext, PropsWithChildren, useState } from 'react'

interface GlobalState {
  visibleModalConsul: boolean,
}

interface GlobalActions {
  setVisibleModalConsul: (visibleModalConsule:boolean)=>void,
}

interface GlobalContextType {
  state: GlobalState;
  actions: GlobalActions;
}

const GlobalContext = React.createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider: React.FC<PropsWithChildren> = ({children}: PropsWithChildren) => {
    const [globalState, setGlobalState] = React.useState<GlobalState>({visibleModalConsul: false});

    const actions: GlobalActions = {
        setVisibleModalConsul(visibleModalConsule) {
            setGlobalState(prevState => ({...prevState, visibleModalConsul:visibleModalConsule}));
        },
    };

    const contextValue: GlobalContextType = {state: globalState, actions: actions}

  return (
    <GlobalContext.Provider value={contextValue}>
        {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContext, GlobalProvider}