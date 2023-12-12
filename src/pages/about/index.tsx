import { ReactElement } from "react"
import { NextPageWithLayout } from "../_app"
import HeaderNav from "@/components/HeaderNav"
import Footer from "@/components/Footer"
import Container from "@/components/Container"
import { useTranslations } from "next-intl"
import { GetStaticPropsContext } from "next"
import Head from "next/head"

const About: NextPageWithLayout = () => {
    const t = useTranslations('About')

    return (
        <>
            <Head>
                <title>
                    {t('title')}
                </title>
            </Head>
            <div className="h-60">
                <p className="text-slate-800">
                {t('title')}
                </p>
            </div>
        </>
    )
}

About.getLayout = function getLayout(page: ReactElement) {
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

export default About