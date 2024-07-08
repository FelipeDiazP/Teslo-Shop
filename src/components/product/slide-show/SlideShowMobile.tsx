'use client';

import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';

import Image from 'next/image'

import { Autoplay, FreeMode, Navigation, Pagination, } from "swiper/modules";



interface Props{
    images: string[];
    title: string;
    className?: string;
}

export const SlideShowMobile = ({ images, title, className}: Props)  => {


    return(
    <div className={className}>

<Swiper
        style={{
            width: '100vw',
            height: '500px'
        }}
        pagination
        autoplay={{
            delay: 3500
        }}

        modules={[FreeMode, Autoplay,Pagination]}
        className="mySwiper2"
      >
        {
            images.map(image => (
                <SwiperSlide key={image}>
                    <Image
                    width={ 600 }
                    height={ 500 }
                    src={`/products/${ image }`}
                    alt={title}
                    className="object-fill"
                    priority
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
    )
}