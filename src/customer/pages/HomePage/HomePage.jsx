import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarousel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';

const HomePage = () => {
    return (
        <>
            <MainCarousel></MainCarousel>
            <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosel />
            </div>
        </>
    )
}

export default HomePage;
