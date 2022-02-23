import { Fragment, useContext } from 'react'
import Link from 'next/link'
import { IContext } from '../../utils/interfaces/IContext'
import { AppContext } from '../../context/AppContext'
import { Navbar, ScrollArea, Text, ThemeIcon } from '@mantine/core'
import styles from './Navbar.module.scss'
import { BookmarkIcon, CommitIcon, HomeIcon, MagicWandIcon, RocketIcon } from '@modulz/radix-icons'
import { NavbarFooter } from './NavbarFooter'
import { useRouter } from 'next/router'

export const AppNavbar = () => {
    const appContext = useContext<IContext>(AppContext)
    const { isSidebarOpen } = appContext
    const router = useRouter()

    return (
        <Navbar padding={'md'} hiddenBreakpoint={'sm'} hidden={!isSidebarOpen} width={{ sm: 300, lg: 400 }} className={styles.sidebar}>
            <Navbar.Section className={styles.sectionTitle}>{'Nawigacja'}</Navbar.Section>
            <Navbar.Section grow component={ScrollArea}>
                <ul className={styles.menu}>
                    <Link href={'/'}>
                        <a className={`${styles.link} ${router.pathname === '/' ? styles.linkHomeActive : ''}`}>
                            <ThemeIcon variant={'light'} color={'blue'} size={'lg'}>
                                <HomeIcon />
                            </ThemeIcon>
                            <span>{'Strona główna'}</span>
                        </a>
                    </Link>
                    <Link href={'/guides'}>
                        <a className={`${styles.link} ${router.pathname.includes('/guides') ? styles.linkGuidesActive : ''}`}>
                            <ThemeIcon variant={'light'} color={'orange'} size={'lg'}>
                                <BookmarkIcon />
                            </ThemeIcon>
                            <span>{'Poradniki'}</span>
                        </a>
                    </Link>
                    <Link href={'/magic'}>
                        <a className={`${styles.link} ${router.pathname === '/magic' ? styles.linkMagicsActive : ''}`} aria-disabled={true}>
                            <ThemeIcon variant={'light'} color={'red'} size={'lg'}>
                                <RocketIcon />
                            </ThemeIcon>
                            <span>{'Magie'}</span>
                        </a>
                    </Link>
                    <Link href={'/spells'}>
                        <a
                            className={`${styles.link} ${router.pathname === '/spells' ? styles.linkSpellsActive : ''}`}
                            aria-disabled={true}
                        >
                            <ThemeIcon variant={'light'} color={'violet'} size={'lg'}>
                                <MagicWandIcon />
                            </ThemeIcon>
                            <span>{'Zaklęcia'}</span>
                        </a>
                    </Link>
                    <Link href={'/skills'}>
                        <a
                            className={`${styles.link} ${router.pathname === '/skills' ? styles.linkSkillsActive : ''}`}
                            aria-disabled={true}
                        >
                            <ThemeIcon variant={'light'} color={'green'} size={'lg'}>
                                <CommitIcon />
                            </ThemeIcon>
                            <span>{'Umiejętności'}</span>
                        </a>
                    </Link>
                </ul>
            </Navbar.Section>
            <Navbar.Section>
                <NavbarFooter />
            </Navbar.Section>
        </Navbar>
    )
}
