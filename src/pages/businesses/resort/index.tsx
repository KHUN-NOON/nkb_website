import { ReactElement } from "react"
import Container from "@/components/Container"
import HeaderNav from "@/components/HeaderNav"
import { NextPageWithLayout } from "@/pages/_app"
import { GetStaticPropsContext } from "next"
import Head from "next/head"
import Footer from "@/components/Footer"
import { useTranslations } from "use-intl"

const Resort: NextPageWithLayout = () => {
    const t = useTranslations('Businesses.Resort')

    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
        </>
    )
}

Resort.getLayout = function getLayout(page: ReactElement) {
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
        messages: (await import(`../../../messages/${context.locale}.json`)).default
      }
    }
}

export default Resort