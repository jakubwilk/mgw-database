import { useContext } from 'react'
import { Burger, Header, MediaQuery, Text } from '@mantine/core'
import { IContext } from '../../utils/interfaces/IContext'
import { AppContext } from '../../context/AppContext'

export const AppHeader = () => {
    const appContext = useContext<IContext>(AppContext)
    const { isSidebarOpen, setIsSidebarOpen } = appContext

    return (
        <Header height={70} padding={'md'}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
                    <Burger opened={isSidebarOpen} onClick={() => setIsSidebarOpen(!isSidebarOpen)} size={'sm'} mr={'xl'} />
                </MediaQuery>
                <Text>{'Application header'}</Text>
            </div>
        </Header>
    )
}
