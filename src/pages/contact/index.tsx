import { ReactElement } from "react"
import { useTranslations } from "next-intl"
import Head from "next/head"
import Container from "@/components/Container"
import HeaderNav from "@/components/HeaderNav"
import Footer from "@/components/Footer"
import { GetStaticPropsContext } from "next"
import { NextPageWithLayout } from "../_app"

const Contact: NextPageWithLayout = () => {
    const t = useTranslations('Contact')
    return (
        <>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <p className="text-slate-900">{t('title')}</p>
        </>
    )
}

Contact.getLayout = function getLayout(page: ReactElement) {
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
            messages: (await import(`../../messages/${context.locale}.json`)).default
        }
    }
}

export default Contact