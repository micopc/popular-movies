import '@assets/globals.css'
import { Layout } from '@ui'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
