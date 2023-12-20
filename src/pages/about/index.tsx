import { ReactElement } from "react"
import { NextPageWithLayout } from "../_app"
import { useTranslations } from "next-intl"
import { GetStaticPropsContext } from "next"
import Head from "next/head"
import dynamic from 'next/dynamic'
const Container = dynamic(() => import('@/components/Container'))
const HeaderNav = dynamic(() => import('@/components/HeaderNav'))
const Footer = dynamic(() => import('@/components/Footer'))

const bgImg = 'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/410239320_380388221224563_6259781937789991878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHflFQ9BHgUXAnnbkTDCFakpek_bS_WjZyl6T9tL9aNnG2ASWj9SnxQkG6S2pvSQtAJUCTg1KhTN_n6KRNAJBSf&_nc_ohc=OfPzNOIqaRgAX-tq3Bn&_nc_ht=scontent-sin6-4.xx&oh=00_AfA8efGrK6FIuDZm6WkOs-qWGqacjRgMxpaXzO0YmSHPmA&oe=6587C5BC'
const bgImgFallback = 'https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/396524055_353344457262273_977321403270181677_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHUQ4vqtMkNuwRWn7OeWCSk6gScADFM9OjqBJwAMUz06NIp2SwOGgX7buNXL2v0rjh52WlzC6n9MHfGaNHo_P7-&_nc_ohc=mRjXSQtk05QAX98WbN3&_nc_ht=scontent-sin6-3.xx&oh=00_AfAZzikMhYYvCpjdojbNisoe8hRnEpIGCCjLik81T65ulA&oe=65871DAC'

const About: NextPageWithLayout = () => {
    const t = useTranslations('About')

    return (
        <>
            <Head>
                <title>
                    {t('title')}
                </title>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel='icon' href="/icons/site/Ngwe Ka Bar-logos_white.png"/>
            </Head>
            <div className="relative h-screen w-screen overflow-hidden">
                <div 
                    className="absolute top-0 left-0 content-none w-full h-full"
                    style={{ backgroundImage: `url(${bgImg}), url(${bgImgFallback})` }}
                >
                </div>
                <div className="absolute top-0 w-full h-full overflow-auto">
                    <div className={`flex justify-center items-center w-full h-[40vh] bg-gradient-to-r from-gray-700 to-transparent`}>
                        <p className="text-2xl font-semibold">
                            {t('title')}
                        </p>
                    </div>
                    <div className="flex w-full h-[300px] bg-white">

                    </div>
                    <div className="flex w-full h-[500px] bg-yellow-300">

                    </div>
                </div>
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