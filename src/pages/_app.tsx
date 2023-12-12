import { ReactElement, ReactNode } from 'react'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { NextIntlClientProvider } from 'next-intl'
import { useRouter } from 'next/router'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  const router = useRouter()

  return getLayout(
    <NextIntlClientProvider
      locale={router.locale}
      messages={pageProps.messages}
      timeZone='Asia/Yangon'
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  )
}
