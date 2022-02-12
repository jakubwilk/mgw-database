import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={{}}>
            <Component {...pageProps} />
        </MantineProvider>
    )
}

export default MyApp
