import { ReactElement, useMemo } from "react"
import { NextPageWithLayout } from "../_app"
import { useTranslations } from "next-intl"
import { GetStaticPropsContext } from "next"
import Head from "next/head"
import dynamic from 'next/dynamic'
import { motion } from "framer-motion"
import Profile from "@/components/About/Profile"
const Container = dynamic(() => import('@/components/Container'))
const HeaderNav = dynamic(() => import('@/components/HeaderNav'))
const Footer = dynamic(() => import('@/components/Footer'))

const bgImg = 'https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/410239320_380388221224563_6259781937789991878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHflFQ9BHgUXAnnbkTDCFakpek_bS_WjZyl6T9tL9aNnG2ASWj9SnxQkG6S2pvSQtAJUCTg1KhTN_n6KRNAJBSf&_nc_ohc=OfPzNOIqaRgAX-tq3Bn&_nc_ht=scontent-sin6-4.xx&oh=00_AfA8efGrK6FIuDZm6WkOs-qWGqacjRgMxpaXzO0YmSHPmA&oe=6587C5BC'
const bgImgFallback = 'https://images.pexels.com/photos/165537/pexels-photo-165537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

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
                    className="relative top-0 left-0 content-none w-full h-full"
                    style={{ backgroundImage: `url(${bgImg}), url(${bgImgFallback})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                >
                </div>
                <div id="about-content" className="absolute top-0 w-full h-full overflow-auto">
                    <div id="about-title-section" className={`flex justify-center items-center w-full h-[40vh] bg-gradient-to-r from-gray-700 to-transparent`}>
                        <p className="text-2xl font-semibold">
                            {t('title')}
                        </p>
                    </div>
                    <div className="relative flex flex-col sm:flex-row w-full h-auto py-20 px-4 sm:px-[10%] bg-white gap-8">
                        <motion.div id="images" className="relative flex flex-col justify-center items-center justify-items-center sm:flex-row gap-8 sm:my-8"
                            initial={{ opacity: 0 }} transition={{ duration: 3 }} animate={{ opacity: [0.3, 0.5, 0.8, 1] }}
                        >
                            <div 
                                className="sm:relative -bottom-10 h-[300px] w-[200px] rounded-md bg-red-400 bg-cover"
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/2252314/pexels-photo-2252314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
                            >

                            </div>
                            <div 
                                className="h-[300px] w-[200px] rounded-md bg-blue-400 bg-cover"
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
                            >

                            </div>
                            <div 
                                className="sm:relative -top-10 h-[300px] w-[200px] rounded-md bg-green-400 bg-cover"
                                style={{ backgroundImage: `url(https://images.pexels.com/photos/5650023/pexels-photo-5650023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}
                            >

                            </div>
                        </motion.div>
                        <motion.div id="text" className="flex flex-col flex-shrink gap-8">
                            <h5 className="text-slate-950 text-xl font-semibold">
                                {t('overview.title')}
                            </h5>
                            <h3 className="text-slate-950 text-2xl font-semibold">
                                {t('overview.sub_title')}
                            </h3>
                            <p className="text-slate-500">
                                {t('overview.content')}
                            </p>
                        </motion.div>
                    </div>
                    <div id="business-owner" className="w-full bg-white py-4 sm:py-8">
                        <motion.div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 sm:gap-8"
                            initial={{ opacity: 0 }} whileInView={{ opacity: [0.3, 0.5, 0.7, 0.8, 1] }} transition={{ duration: 2 }}
                        >
                            {
                                t.raw("profiles").map((profile: any) => (
                                    <Profile key={profile?.name} name={profile.name} position={profile.position} profileUrl={profile?.profileUrl}/>
                                ))
                            }
                        </motion.div>
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