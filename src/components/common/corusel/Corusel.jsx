import React from 'react'
import Carousel from 'better-react-carousel'

const Gallery = () => {
    return (
        <Carousel cols={6} rows={1} gap={10} loop>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/PWC.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/target.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/zoom.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/dropbox.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/paypal.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/pfizer.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/PWC.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/target.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/zoom.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/dropbox.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/paypal.svg" />
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" src="../../../../public/mock-imges/pfizer.svg" />
            </Carousel.Item>
        </Carousel>
    )
}
export default Gallery;