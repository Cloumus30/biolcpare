import { GalleryCarouselImage } from '@/types';
import { Galleria } from 'primereact/galleria'
import React from 'react'

type Props = {}

const GalleryCarousel: React.FC = (props: Props) => {

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];
    
    const images: GalleryCarouselImage[] = [
      {
        imageSrc: "/images/1.webp",
        alt: "Image LC 1"
      },
      {
        imageSrc: "/images/2.webp",
        alt: "Image LC 2"
      },
      {
        imageSrc: "/images/3.webp",
        alt: "Image LC 3"
      },
      {
        imageSrc: "/images/4.webp",
        alt: "Image LC 4"
      },
      {
        imageSrc: "/images/8.webp",
        alt: "Image LC 8"
      },
      {
        imageSrc: "/images/9.webp",
        alt: "Image LC 9"
      },
      {
        imageSrc: "/images/11.webp",
        alt: "Image LC 11"
      },
      {
        imageSrc: "/images/12.webp",
        alt: "Image LC 12"
      },
    ];

    const itemTemplate = (item:GalleryCarouselImage) => {
        return <img src={item.imageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item: GalleryCarouselImage) => {
        return <img src={item.imageSrc} alt={item.alt} style={{ width: '40%', display: 'block' }} />
    }

  return (
    <Galleria className='w-11/12 md:w-6/12' value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnail={thumbnailTemplate} circular autoPlay transitionInterval={2500}/>
  )
}

export default GalleryCarousel