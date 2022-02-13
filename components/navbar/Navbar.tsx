import { useContext } from 'react'
import Link from 'next/link'
import { IContext } from '../../utils/interfaces/IContext'
import { AppContext } from '../../context/AppContext'
import { Navbar, ScrollArea, Text } from '@mantine/core'
import styles from './Navbar.module.scss'

export const AppNavbar = () => {
    const appContext = useContext<IContext>(AppContext)
    const { isSidebarOpen } = appContext

    return (
        <Navbar padding={'md'} hiddenBreakpoint={'sm'} hidden={!isSidebarOpen} width={{ sm: 300, lg: 400 }} className={styles.sidebar}>
            <Navbar.Section>{'Nawigacja'}</Navbar.Section>
            <Navbar.Section grow component={ScrollArea}>
                <Link href={'/'}>{'Strona główna'}</Link>
                <Link href={'/guides'}>{'Poradniki'}</Link>
            </Navbar.Section>
            <Navbar.Section>{'Wróć na forum'}</Navbar.Section>
        </Navbar>
    )
}
