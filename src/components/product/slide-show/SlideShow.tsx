'use client';

import { useState } from "react";

import {Swiper as SwiperObject} from 'swiper';

import {Swiper, SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from 'next/image';



interface Props{
    images: string[];
    title: string;
    className?: string;
}

export const SlideShow = ({ images, title, className}: Props)  => {

    const [thumbsSwiper, setThumbsSwiper] = useState <SwiperObject> ();

    return(
    <div className={className}>

<Swiper
        style={{
          '--swiper-navigation-color': '#5D3FD3',
          '--swiper-pagination-color': '#5D3FD3',
        } as React.CSSProperties
    }
        spaceBetween={10}
        navigation={true}
        autoplay={{
            delay: 3500
        }}
        thumbs={{ 
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null

        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {
            images.map(image => (
                <SwiperSlide key={image}>
                    <Image
                    width={ 1024 }
                    height={ 800 }
                    src={`/products/${ image }`}
                    alt={title}
                    className="rounded-lg object-fill"
                    priority
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         {
            images.map(image => (
                <SwiperSlide key={image} className="slide">
                    <Image
                    width={ 300 }
                    height={ 300 }
                    src={`/products/${ image }`}
                    alt={title}
                    className="rounded-lg object-fill"
                    />
                </SwiperSlide>
            ))
        }
      </Swiper>

    </div>
    )
}