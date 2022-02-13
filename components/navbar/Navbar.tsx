import { useContext } from 'react'
import Link from 'next/link'
import { IContext } from '../../utils/interfaces/IContext'
import { AppContext } from '../../context/AppContext'
import { Navbar, Text } from '@mantine/core'

export const AppNavbar = () => {
    const appContext = useContext<IContext>(AppContext)
    const { isSidebarOpen } = appContext

    return (
        <Navbar padding={'md'} hiddenBreakpoint={'sm'} hidden={!isSidebarOpen} width={{ sm: 300, lg: 400 }}>
            <Link href={'/'}>{'Strona główna'}</Link>
            <Link href={'/guides'}>{'Poradniki'}</Link>
        </Navbar>
    )
}
