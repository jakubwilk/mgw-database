import { Fragment, useContext } from 'react'
import Link from 'next/link'
import { IContext } from '../../utils/interfaces/IContext'
import { AppContext } from '../../context/AppContext'
import { Navbar, ScrollArea, Text, ThemeIcon } from '@mantine/core'
import styles from './Navbar.module.scss'
import { BookmarkIcon, HomeIcon } from '@modulz/radix-icons'
import { NavbarFooter } from './NavbarFooter'

export const AppNavbar = () => {
    const appContext = useContext<IContext>(AppContext)
    const { isSidebarOpen } = appContext

    return (
        <Navbar padding={'md'} hiddenBreakpoint={'sm'} hidden={!isSidebarOpen} width={{ sm: 300, lg: 400 }} className={styles.sidebar}>
            <Navbar.Section>{'Nawigacja'}</Navbar.Section>
            <Navbar.Section grow component={ScrollArea}>
                <Link href={'/'}>
                    <a>
                        <ThemeIcon variant={'light'} color={'blue'}>
                            <HomeIcon />
                        </ThemeIcon>
                        {'Strona główna'}
                    </a>
                </Link>
                <Link href={'/guides'}>
                    <a>
                        <ThemeIcon variant={'light'} color={'orange'}>
                            <BookmarkIcon />
                        </ThemeIcon>
                        {'Poradniki'}
                    </a>
                </Link>
            </Navbar.Section>
            <Navbar.Section>
                <NavbarFooter />
            </Navbar.Section>
        </Navbar>
    )
}
