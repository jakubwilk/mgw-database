import { useContext } from 'react'
import Image from 'next/image'
import { Burger, Header, MediaQuery, Text, useMantineTheme } from '@mantine/core'
import { IContext } from '../../utils/interfaces/IContext'
import { AppContext } from '../../context/AppContext'
import styles from './Header.module.scss'

export const AppHeader = () => {
    const appContext = useContext<IContext>(AppContext)
    const { isSidebarOpen, setIsSidebarOpen } = appContext
    const theme = useMantineTheme()

    return (
        <Header className={styles.header} height={120}>
            <div className={styles.headerContainer}>
                <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
                    <Burger
                        opened={isSidebarOpen}
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        color={theme.colors.gray[1]}
                        size={'lg'}
                        className={styles.menuButton}
                    />
                </MediaQuery>
                <div className={styles.logoWrapper}>
                    <Image
                        src={'/logo.png'}
                        alt={'Napis Mage Guild Wars - play by forum Fairy Tail'}
                        layout={'fill'}
                        className={styles.logoImage}
                    />
                </div>
            </div>
        </Header>
    )
}
