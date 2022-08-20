import '../styles/reset.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />
}

export default App
