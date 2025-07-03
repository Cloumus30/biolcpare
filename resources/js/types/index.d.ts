import {ReactNode} from 'react';

export interface LayoutProps{
    children: ReactNode;
    title: string;
}

export interface GalleryCarouselImage{
    imageSrc: string | undefined,
    alt? : string,

}