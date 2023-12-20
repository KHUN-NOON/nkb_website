import { ReactElement } from "react"
import { NextPageWithLayout } from "@/pages/_app"
import Container from "@/components/Container"
import HeaderNav from "@/components/HeaderNav"
import Footer from "@/components/Footer"
import Head from "next/head"
import { useTranslations } from "next-intl"
import { GetStaticPropsContext } from "next"

const Milling: NextPageWithLayout = () => {
    const t = useTranslations("Businesses.Milling")

    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
        </>
    )
}

Milling.getLayout = function getLayout(page: ReactElement) {
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

export default Milling