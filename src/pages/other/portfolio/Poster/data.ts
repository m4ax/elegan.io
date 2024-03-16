// type
import { GalleryItem, WorkImages } from '../types';

import auto from '../../../../assets/images/compare/auto-convert.jpeg'
import logo from '../../../../assets/images/compare/logoelegan.png'

const gallery: GalleryItem[] = [
    {
        id: 1,
        image: {
            src: auto,
            caption: 'Office Desks',
        },
    },
    {
        id: 2,
        image: {
            src: logo,
            caption: 'Office Desks',
        },
    },
];

const workImages: WorkImages[] = [
    {
        icon: 'clock',
        title: 'Date & Time', 
    },
    {
        icon: 'hexagon',
        title: 'Context awareness',
    },
    {
        icon: 'type',
        title: 'String manipulation',
    },
];

export { gallery, workImages };
