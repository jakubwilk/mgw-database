import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import '../styles/globals.scss'
import { AppProvider } from '../context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider
            theme={{
                colors: {
                    mage: ['#857A8B', '#796D7F', '#6C5E72', '#5D4E64', '#4D3C55', '#3B2844', '#301E38', '#2C1B33', '#28192E', '#24172A'],
                },
                primaryColor: 'mage',
            }}
            withNormalizeCSS={true}
        >
            <AppProvider>
                <Component {...pageProps} />
            </AppProvider>
        </MantineProvider>
    )
}

export default MyApp
