import {ReactNode} from 'react';

export interface LayoutProps{
    children: ReactNode;
    title: string;
}

export interface GalleryCarouselImage{
    imageSrc: string | undefined,
    alt? : string,
}

export interface TestimonyType{
    imageSrc: string | undefined,
    alt?: string,
    name: string,
    testimony: string,
    occupation: string,
}

export interface TeacherCarouselType{
    imageSrc: string | undefined,
    alt?: string,
    name: string,
    description: string,
    placement?: string,
    education: string
}