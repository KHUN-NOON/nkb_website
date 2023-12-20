import { ReactElement, ReactEventHandler, SyntheticEvent, useState } from "react"
import { useTranslations } from "next-intl"
import Head from "next/head"
import { GetStaticPropsContext } from "next"
import { NextPageWithLayout } from "../_app"
import dynamic from 'next/dynamic'
import en from "../../messages/en-US.json"
const Container = dynamic(() => import('@/components/Container'))
const HeaderNav = dynamic(() => import('@/components/HeaderNav'))
const Footer = dynamic(() => import('@/components/Footer'))

const bgImgUrl = "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/397343852_354304313832954_7097997563596105398_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFQekiH4aphO4GH73P9SoVyEd4Ux7ImwGwR3hTHsibAbPoBqrYU4a9eEzJSy_26blDvkOc8lwnqa4tWSUrmGKCT&_nc_ohc=MZIE2RBzfXIAX-ZVQiC&_nc_ht=scontent-sin6-2.xx&oh=00_AfBwjqhQUXyV4MLCi70T8-eQE_HJQCwC2uITrLxu3qihcA&oe=65807F6C"

const Contact: NextPageWithLayout = () => {
    const [ bgUrl, setBgUrl ] = useState(bgImgUrl)
    const t = useTranslations('Contact')
    const Infot = useTranslations('Contact.Info')

    const phone_nums = en.Contact.Info.phone

    const bgImageOnError = () => {
        const imgUrl = 'https://images.pexels.com/photos/3560161/pexels-photo-3560161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        setBgUrl(imgUrl)
    }

    return (
        <>
            <Head>
                <title>{t('title')}</title>
                <meta name="description" content={`${Infot('visit_info')}`}/>
                <meta name="keywords" content={`${t('title')}`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <link rel='icon' href="/icons/site/Ngwe Ka Bar-logos_white.png"/>
            </Head>
            <div 
                className="relative h-screen w-screen px-5 sm:px-10 bg-center overflow-auto sm:overflow-hidden"
            >
                <img
                    alt=""
                    src={bgUrl}
                    className="absolute left-0 right-0 w-[100%] opacity-20 h-[100%] object-cover"
                    onError={bgImageOnError}
                />
                <div className="relative flex flex-col sm:flex-row sm:justify-center sm:items-center h-[100%] gap-8">
                    <div className="flex-1 p-8 pb-[10em]">
                        <h1 className="text-black text-2xl font-semibold">{Infot('title')}</h1>
                        <p className="text-black text-sm font-semibold mt-5">{Infot('sub_title')}</p>
                        <p className="text-slate-700 text-sm mt-5 leading-6">
                            {Infot('visit_info')}
                        </p>
                        <div className="mt-5">
                            <ul>
                                <li className="flex mt-5 gap-3 flex-wrap">
                                    <span className="basic-2/5 sm:w-3/12 text-black font-semibold">{Infot('phone_label')}</span>
                                    {
                                        phone_nums.map((el: string, index: number) => (
                                            <a href={`tel:${el}`} key={el} className="text-slate-700 hover:underline">
                                                {el} 
                                            </a>
                                        ))
                                    }
                                </li>
                                <li className="flex mt-5 gap-3 flex-wrap">
                                    <span className="basic-2/5 sm:w-3/12 text-black font-semibold">{Infot('email_label')}</span>
                                    <a href={`mailto:${Infot('email')}`} className="text-slate-700 hover:underline">{Infot('email')}</a>
                                </li>
                                <li className="flex mt-5 gap-3 flex-wrap">
                                    <span className="basic-2/5 sm:w-3/12 text-black font-semibold">{Infot('address_label')}</span>
                                    <p className="text-slate-700">{Infot('address')}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 pb-8">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d932.5817655953293!2d96.94368365051277!3d20.778052200914534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ce85d7f83c5443%3A0x87498635902ba790!2z4YCA4YCv4YCU4YC64YC44YCc4YC-4YCt4YCv4YCE4YC64YCe4YCs4YCe4oCL4YCU4YCx4YCs4YCS4YCa4YCV4YCb4YCt4YCa4YCQ4YC54YCQ4YCt4YCF4YCs4YCe4YCE4YC64YCQ4YCt4YCv4YCA4YC6!5e0!3m2!1sen!2smm!4v1702539957679!5m2!1sen!2smm" 
                            loading="lazy"
                            className="border border-zine-700 w-full h-[70vh]" 
                        >
                        </iframe>
                    </div>
                </div>
            </div>
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