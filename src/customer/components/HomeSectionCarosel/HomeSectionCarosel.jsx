import React, { useRef, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';


const HomeSectionCarosel = ({ data, sectionName }) => {
    const carouselRef = useRef(null);
    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);

    const items = data.slice(0, 13).map((item, index) => (
        <div className="item" key={index}>
            <HomeSectionCard product={item} />
        </div>
    ));

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    /*const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);*/


    // Función para actualizar la visibilidad de los botones
    const updateButtonsVisibility = () => {
        if (carouselRef.current) {
            const currentIndex = carouselRef.current.state.activeIndex;
            setIsFirst(currentIndex === 0);
            setIsLast(currentIndex >= items.length - 5);
        }
    };

    useEffect(() => {
        updateButtonsVisibility();
    }, []);

    return (
        <div className='border'>
            <h2 className='text-2x1 font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    ref={carouselRef}
                    onSlideChanged={updateButtonsVisibility}
                />
                {!isFirst &&
                    <Button
                        variant="contained"
                        className="z-50"
                        onClick={() => carouselRef.current.slidePrev()}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            bgcolor: 'white',
                            color: 'black',
                            '&:hover': {
                                bgcolor: 'white',
                            }
                        }}
                        aria-label='previous'
                    >
                        <KeyboardArrowLeftIcon />
                    </Button>}

                {!isLast && <Button
                    onClick={() => carouselRef.current.slideNext()}
                    variant="contained"
                    className="z-50"
                    sx={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        bgcolor: 'white',
                        color: 'black',
                        '&:hover': {
                            bgcolor: 'white',
                        }
                    }}
                    aria-label='next'>
                    <KeyboardArrowRightIcon />
                </Button>}
            </div>
        </div>
    )
}

export default HomeSectionCarosel


//Revisar
/*
const HomeSectionCarosel = ({ data, sectionName }) => {
    const carouselRef = useRef(null); // Referencia al carrusel

    const items = .slice(0, 13).map((item, index) => (
        <div className="item" key={index}>
            <HomeSectionCard product={item} />
        </div>
    ));

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    infinite
                />

                {/* Botón para retroceder }
<Button
    variant="contained"
    className="z-50"
    onClick={() => carouselRef.current.slidePrev()}
    sx={{
        position: 'absolute',
        top: '50%',
        left: '1rem',
        transform: 'translateY(-50%)',
        bgcolor: 'white',
        color: 'black',
        '&:hover': { bgcolor: 'white' }
    }}
    aria-label='previous'
>
    <KeyboardArrowLeftIcon />
</Button>

{/* Botón para avanzar  }
<Button
    variant="contained"
    className="z-50"
    onClick={() => carouselRef.current.slideNext()}
    sx={{
        position: 'absolute',
        top: '50%',
        right: '1rem',
        transform: 'translateY(-50%)',
        bgcolor: 'white',
        color: 'black',
        '&:hover': { bgcolor: 'white' }
    }}
    aria-label='next'
>
    <KeyboardArrowRightIcon />
</Button>
            </div >
        </div >
    );
};

export default HomeSectionCarosel;*/
