import React from 'react';
import { useNavigate } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselData from './MainCarouselData';

//const navigate = useNavigate();

const MainCarousel = () => {
    const items = carouselData.map((item) => (
        <div className="cursor-pointer">
            <img
                className='w-full'
                src={item.imageUrl}
                alt={item.title}
                role="presentation"
            />
        </div>
    ));

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
            disableDotsControls
        />
    );
};

export default MainCarousel;
