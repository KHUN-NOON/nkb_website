import Link from 'next/link'
import Carousel, { CarouselTypes } from '../Carousel'
import { useTranslations } from 'next-intl'

// const images: CarouselTypes['images'] = [
//     { url: 'https://scontent.fmdl4-3.fna.fbcdn.net/v/t39.30808-6/404689830_369045465692172_7702397941280461440_n.jpg?stp=dst-jpg_p960x960&_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFQ2jEpRjwfIOiOzDW5-v2TChsO8Dd_QV8KGw7wN39BXz0rjzWb9woBgpePNsRqONYsWBh7MjWhCFa0yJYQ6z1m&_nc_ohc=3mrJjyzbABUAX_nk8sP&_nc_ht=scontent.fmdl4-3.fna&oh=00_AfBT7THuqRj33iLFPbHItrSD2bEpzWqapwjIGxNZ0sHvGw&oe=658445C8' },
//     { url: 'https://scontent.fmdl4-2.fna.fbcdn.net/v/t39.30808-6/407662612_374006871862698_1180356876672075581_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHYjr5HRp1qbOZRe4CH7VABfwHfUJ1-9o5_Ad9QnX72jo4utFD-IPKkrcJpFyHt5Z5KRJ8q0tFJSha2m8pM4vXw&_nc_ohc=i5OYzU7PnkAAX8tHxTc&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfCYiWW0eUIZP3RWZbHx2GnXoILAJCoZzm6Jv_DK5IB3FQ&oe=65837E5E' },
//     { url: 'https://scontent.fmdl4-2.fna.fbcdn.net/v/t39.30808-6/407780527_374006381862747_3193817409875066170_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHjOMJmhbZ25hJa0FCgeTUojYd7t3D4TaaNh3u3cPhNpkKuH7r00FPRggKsaxh8Nj94-NIqHE3NwL7Ccaw7aQ60&_nc_ohc=iXwd-VQixSYAX_H8Uvp&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfAqKguisb7TIm3qGkr_EKiFcaRzcqEbKUbGGhDmjyQ1kA&oe=65833D2E' },
//     { url: 'https://scontent.fmdl4-4.fna.fbcdn.net/v/t39.30808-6/411077258_379035544693164_7120457593990358960_n.jpg?stp=dst-jpg_p960x960&_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEt6R7JED5dGwYXP9LeLsZcP_2uf0StAx0__a5_RK0DHbMBI6etpf768K_omMDSfT0WuxExHCXP5I-cw7Wic1Hv&_nc_ohc=Fmwiv4BZTkYAX-6D886&_nc_ht=scontent.fmdl4-4.fna&oh=00_AfBPVnnaBM5WhY6O_H-aDGiUyeRsKDYdGvW9CZxO2MM7iA&oe=6583DCA1',  fallback: '' },
//     { url: 'https://scontent.fmdl4-4.fna.fbcdn.net/v/t39.30808-6/409530852_376719684924750_2079330313792191411_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeF_9SdRdelwhHugJOCYU35Ahp4dMvTBCceGnh0y9MEJx02pV3oJtUO6wmlXHLoX8w83TtwAygkCoqGp-V6hXh4y&_nc_ohc=bSIfcqIMVOoAX8iv7Bq&_nc_ht=scontent.fmdl4-4.fna&oh=00_AfDJg0I2t062V_gMc6Q-Ivpe34v97Zeg37NKxHvfG0JKXw&oe=65843CF6' },
//     { url: 'https://scontent.fmdl4-2.fna.fbcdn.net/v/t39.30808-6/404777021_370010108929041_1609325386416636733_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGimdaUUMErTbb1tkeke3IbU_7erAY7I81T_t6sBjsjzR7xwIAPtKcU9gea_79a_X_-Nb27TNOritNvhxBGASO9&_nc_ohc=dKnHAP7KRIMAX_Hj7Ic&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfBEUyqloRky9UStT_obPkPDUGW0QfQ6xWVrGf_fCLNO7A&oe=658468B2' },
//     { url: 'https://scontent.fmdl4-2.fna.fbcdn.net/v/t39.30808-6/409651056_376153224981396_3406023695592719761_n.jpg?stp=dst-jpg_p600x600&_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFCT0EeK_CXT01vLyHtd4ZN7kJxsIZSLrHuQnGwhlIusRGOCYEPc6F9tMZccdOWoh16dbEpGBBoeRT169lwFoem&_nc_ohc=JDQH9G-VpJcAX-6-C6m&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfCZQgNr3DWV_R0cOAbdAnl1GJijNlUpr-gopUvE_KsCjg&oe=6584E567' },
//     { url: 'https://scontent.fmdl4-2.fna.fbcdn.net/v/t39.30808-6/408031585_374556588474393_6762003646302985094_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEfr26DnqUCScg1p5e_UOk1moOPp8TJmtOag4-nxMma0_PhQYAoyg0rd6ldTb1TRoRE6FZITTUfhM2OrTbEt5J3&_nc_ohc=g9dRwpwTrmAAX-xCuZv&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfBVJEnIirmfOjTLESTUoJq6G1hBwPQj_Ah-2fNQANbuMw&oe=6583E62B' },
//     { url: 'https://scontent.fmdl4-2.fna.fbcdn.net/v/t39.30808-6/407774508_374007088529343_953403987535123041_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeFsl-D-tTQOaapL5mMp98ajy5AxIJDmL3LLkDEgkOYvcgnKIqNrwc_Dfmfe4uclgBP9RBBLoy3zH1ATYc2L3Mt0&_nc_ohc=iaZ6u1E26awAX9rEmWl&_nc_ht=scontent.fmdl4-2.fna&oh=00_AfC5uC-dJw9ypgXszwBbi0QLmtEtaogZcwq38D3ldAqFPA&oe=6584538C' },
// ]

const images: CarouselTypes['images'] = [
  { url: 'https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { url: 'https://images.pexels.com/photos/2526105/pexels-photo-2526105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { url: 'https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { url: 'https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
]

const HeroSection = () => {
    const t = useTranslations("Home.HeroSection")

    return (
        <div className="h-auto w-[100vw]">
            <Carousel images={images}/>
            <div className="absolute px-5 sm:px-10 bottom-1/4 gap-y-5">
              <p className="text-2xl font-light mb-10">
                {t('title')}
              </p>
              <Link href="/about" className="p-3 border border-solid border-white w-auto hover:bg-black hover:bg-opacity-50">
                {t('explore_more')}
              </Link>
            </div>
        </div>
    )
}

export default HeroSection