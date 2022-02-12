import { createContext, useState } from 'react'
import { IContext, IContextProviderProps } from '../utils/interfaces/IContext'

const initContext: IContext = {
    isSidebarOpen: false,
    setIsSidebarOpen: (value: boolean) => {},
}

export const AppContext = createContext<IContext>(initContext)

export const AppProvider = ({ children }: IContextProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

    return <AppContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>{children}</AppContext.Provider>
}
