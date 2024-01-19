import { useTranslations } from "next-intl"
import QuickNavigationCard from "./QuickNavigationCard"
import { GetStaticPropsContext } from "next"
import { motion } from "framer-motion"

const QuickNavigation = () => {
    const t = useTranslations('Home.QuickNavigation')

    const quickNav = [
        { 
            imageUrl: 'https://images.pexels.com/photos/15113965/pexels-photo-15113965/free-photo-of-close-up-of-woman-hand-touching-blooming-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600', 
            href: '/businesses/resort', 
            title: t('navCard.resort')
        },
        { 
            imageUrl: 'https://images.pexels.com/photos/4110250/pexels-photo-4110250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            href: '/businesses/milling', 
            title: t('navCard.mill') 
        },
        { 
            imageUrl: 'https://images.pexels.com/photos/1272541/pexels-photo-1272541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            href: '/businesses/trading', 
            title: t('navCard.trading') 
        },
    ]

    return (
        <motion.div className="h-auto mt-8 px-8 py-4 mb-4 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: [ 0.5, 0.8, 1] }} transition={{ duration: 0.8 }}>
            <div id="quick-navigation-header" className="flex justify-center mt-8 mb-16">
                <h3 className="text-slate-950 text-2xl">{t('title')}</h3>
            </div>
            <div 
                id="quick-navigation-list" 
                className="flex gap-4 sm:gap-8 flex-col flex-wrap items-center sm:flex-row sm:justify-center"
            >
                {
                    quickNav.map( el => (
                        <QuickNavigationCard
                            key={el.href}
                            href={el.href}
                            imageUrl={el.imageUrl}
                            title={el.title}
                        />
                    ))
                }
            </div>
        </motion.div>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../../messages/${context.locale}.json`)).default
        }
    }
}

export default QuickNavigation