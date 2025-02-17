import React from 'react';
import { useNavigate } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselData from './MainCarouselData';

//const navigate = useNavigate();

const items = carouselData.
                map((item) =>
                <img className='curosr-pointer'
                src={item.imageUrl}
                alt={item.title}/> )

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarousel;
