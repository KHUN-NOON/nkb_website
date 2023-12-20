import { useCallback, useEffect, useState } from "react"

export type CarouselTypes = {
    images: {
       url: string,
       fallback?: string 
    }[],
    navigation?: boolean
}

const Carousel = (props: CarouselTypes) => {
    const [ slideIndex, setSlideIndex ] = useState(1)
    const { images, navigation = false } = props

    const plusSlides = (n: number) => {
        setSlideIndex(slideIndex + n)
    }

    const showSlides = useCallback((n: number) => {

        if ( n > images.length ) {
            setSlideIndex(1)
        }

        if ( n < 1 ) {
            setSlideIndex(images.length)
        }

        setTimeout(() => {
            setSlideIndex(slideIndex + 1)
        }, 9500)
    }, [slideIndex])

    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>, fallbackUrl?: string) => {
        event.currentTarget.src = fallbackUrl ?? 'e'
    }

    useEffect(() => {
        showSlides(slideIndex)
    }, [slideIndex])

    return (
        <div className="w-[100vw] m-auto overflow-hidden">
            {
                images.map((el, index) => (
                    <div key={el.url} className={`animate-carousel-zoom-fade ${ slideIndex === index + 1 ? 'block' : 'hidden' }`}>
                        <img src={el.url} className="w-full h-[92.5vh] object-cover object-center" onError={(event) => handleImageError(event, el.fallback)}/>
                    </div>
                ))
            }
            <div className={`${navigation ? 'block' : 'hidden'}`}>
                <a onClick={() => plusSlides(-1)} className="absolute cursor-pointer top-[50%] w-auto p-[16px] -mt-[20px] color-white text-bold text-2xl transition duration-500 ease-in hover:bg-[rgba(0,0,0,0.8)]">
                    ❮
                </a>
                <a onClick={() => plusSlides(1)} className="absolute right-0 cursor-pointer top-[50%] w-auto p-[16px] -mt-[20px] color-white text-bold text-2xl transition duration-500 ease-in hover:bg-[rgba(0,0,0,0.8)]">
                    ❯
                </a>
            </div>
        </div>
    )
}

export default Carousel