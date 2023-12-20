import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import { useTranslations } from "next-intl"

const defaultBgImg = 'https://images.pexels.com/photos/19070935/pexels-photo-19070935/free-photo-of-black-and-white-photo-of-rows-of-empty-seats.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

type QuickNavigationCardTypes = {
    imageUrl: string,
    href: string,
    title: string
}

const QuickNavigationCard = (props: QuickNavigationCardTypes) => {
    const { imageUrl, href, title } = props

    const [ srcImg, setSrcImg ] = useState(imageUrl)

    const t = useTranslations('Home.HeroSection')

    return (
        <div 
            className={`relative overflow-hidden group w-[300px] h-[400px] rounded-md transition ease-in-out duration-500 hover:scale-[1.05]`}
        >
            <Image
                src={srcImg}
                alt="Quick Navigations"
                width={500}
                height={500}
                className="relative w-full h-full object-cover rounded-md transition ease-in-out duration-500 group-hover:scale-[1.1]"
                onError={() => setSrcImg(defaultBgImg)}
            />

            <div
                id="linear-gradiant" 
                className="absolute w-full h-auto bottom-0 top-0 content-none bg-gradient-to-t from-gray-700 to-transparent"
            >

            </div>

            <div className="absolute w-full h-auto bottom-0 mb-8 px-8 py-4">
                <h4 className="text-xl font-semibold">{title}</h4>
                <Link href={href} className="flex items-center gap-4">
                    <FaArrowRight/>
                    {t('explore_more')}
                </Link>
            </div>
        </div>
    )
}

export default QuickNavigationCard