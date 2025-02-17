import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button } from '@mui/material';
import card_data from '../../../data/card_data';

const HomeSectionCarosel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = card_data.slice(0, 13).map((item, index) => (
        <div className="item" key={index}>
            <HomeSectionCard product={item} />
        </div>
    ));

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className='border'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={syncActiveIndex}
                />

                <Button
                    variant="contained"
                    className="z-50"
                    onClick={slidePrev}
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
                    aria-label='next'
                >
                    <KeyboardArrowLeftIcon />
                </Button>

                {activeIndex !== items.length - 5 && <Button
                    variant="contained"
                    className="z-50"
                    onClick={slideNext}
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
