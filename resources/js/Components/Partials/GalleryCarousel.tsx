import { GalleryCarouselImage } from '@/types';
import { Galleria } from 'primereact/galleria'
import React from 'react'

type Props = {}

const GalleryCarousel: React.FC = (props: Props) => {

  // const [images, setImages] = useState(null);
  //   const [position, setPosition] = useState('bottom');
  //   const positionOptions = [
  //       {
  //           label: 'Bottom',
  //           value: 'bottom'
  //       },
  //       {
  //           label: 'Top',
  //           value: 'top'
  //       },
  //       {
  //           label: 'Left',
  //           value: 'left'
  //       },
  //       {
  //           label: 'Right',
  //           value: 'right'
  //       }
  //   ];
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
        imageSrc: "/images/8.webp",
        alt: "Image LC 8"
      },
      {
        imageSrc: "/images/9.webp",
        alt: "Image LC 9"
      }
    ];

    const itemTemplate = (item:GalleryCarouselImage) => {
        return <img src={item.imageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item: GalleryCarouselImage) => {
        return <img src={item.imageSrc} alt={item.alt} style={{ width: '20%', display: 'block' }} />
    }

  return (
    <Galleria style={{ maxWidth: '640px' }} value={images} responsiveOptions={responsiveOptions} numVisible={5} item={itemTemplate} thumbnail={thumbnailTemplate} />
  )
}

export default GalleryCarousel