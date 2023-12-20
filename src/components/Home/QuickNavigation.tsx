import { createTranslator, useTranslations } from "next-intl"
import QuickNavigationCard from "./QuickNavigationCard"
import en from '@/messages/en-US.json'
import mm from '@/messages/mm.json'
import { GetStaticPropsContext } from "next"

const QuickNavigation = () => {
    const t = useTranslations('Home.QuickNavigation.navCard')

    const quickNav = [
        { 
            imageUrl: 'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/397340602_355342053729180_3273924190869178951_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeENaSmNqP_c_jLuco4mAIs5LRh-oFnssDAtGH6gWeywMG8_iYbuxX0EI2TCOzr_0kkuCpG0F2CJtLHqx9QWwFbj&_nc_ohc=dkkQy9uUeaAAX-OIHBO&_nc_oc=AQnxQVIKwqgoyEBukPeUEAWw0a2RZONGsvM61lK482yeQ6PEYhSvpz9Y0MGL4zd3X45u_ttvPM4TRGJ6V4NRfusT&_nc_ht=scontent-sin6-2.xx&oh=00_AfDdfLE5ycwlee18xjrMUavatz0aI91K3c0mIeOqbG5HEw&oe=6586FADC', 
            href: '/businesses/resort', 
            title: t('resort')
        },
        { 
            imageUrl: 'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/387813735_342054895057896_5996658103927951441_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHMQt8xNcgoachev2EkpRvBYOtaLOFUF8Ng61os4VQXw5YYtu4j5R7xhfsKjUE9SFSRxvHMFGfI56PA5WJYl4zm&_nc_ohc=gTHoSO3fZmUAX9IOTws&_nc_ht=scontent-sin6-2.xx&oh=00_AfA65SU4BT1pYfYrviJ3Hw44N90oCyLEwQq7s1RSH5qFkA&oe=658799D3', 
            href: '/businesses/milling', 
            title: t('mill') 
        },
        { 
            imageUrl: 'https://images.pexels.com/photos/1272541/pexels-photo-1272541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            href: '/businesses/trading', 
            title: t('trading') 
        },
    ]

    return (
        <div className="h-auto mt-8 px-8 py-4 mb-4 w-full">
            <div id="quick-navigation-header" className="flex justify-center mt-8 mb-16">
                <h3 className="text-slate-950 text-2xl">Our Businesses</h3>
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
        </div>
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