import { ReactElement } from 'react'

export interface IContext {
    isSidebarOpen: boolean
    setIsSidebarOpen: (value: boolean) => void
}

export interface IContextProviderProps {
    children: ReactElement | Array<ReactElement>
}
