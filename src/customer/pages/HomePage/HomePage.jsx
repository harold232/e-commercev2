import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarousel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import card_data from '../../../data/card_data';

const HomePage = () => {
    return (
        <>
            <MainCarousel></MainCarousel>
            <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel data={card_data} sectionName={"Polos"} />
                <HomeSectionCarosel data={card_data} sectionName={"Zapatillas"} />
            </div>
        </>
    )
}

export default HomePage;
