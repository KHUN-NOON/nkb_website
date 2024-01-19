import { ReactElement } from 'react'
import Head from 'next/head'
import { GetStaticPropsContext } from 'next'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/Home/HeroSection'
import Link from 'next/link'
import QuickNavigation from '@/components/Home/QuickNavigation'
const Container = dynamic(() => import('@/components/Container'))
const HeaderNav = dynamic(() => import('@/components/HeaderNav'))
const Footer = dynamic(() => import('@/components/Footer'))


export default function Home() {
  const t = useTranslations("DocTitle")
  const tHome = useTranslations("Home.meta")

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={tHome('description')} />
        <meta name="keywords" content={tHome('keywords')}/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href="/icons/site/Ngwe Ka Bar-logos_black.png"/>
      </Head>
      <div>
        <HeroSection/>
        <QuickNavigation/>
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Container>
      <HeaderNav/>
      {page}
      <Footer/>
    </Container>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {  
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default
    }
  }
}
