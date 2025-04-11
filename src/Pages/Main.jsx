import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Stats from '../components/Stats';
import Builder from '../components/Builder';
import FaqSection from '../components/FaqSection';
import ArticleList from '../components/ArticleList';
import HistoricalFacts from 'components/HistoricalFacts';

const Main = () => {




    return (
        <div className="min-h-screen bg-white">

            <Header />
            <div className="flex justify-center items-center mx-auto min-h-[740px] px-4 bg-cover relative bg-[url('/data/icons/Header.png')] ">
                <div className="bg-[#00161DCC] opacity-40 absolute top-0 left-0 w-full h-full z-0"></div>
                <HeroSection />
            </div>
            <div className="flex justify-center items-center bg-[#00161D] min-h-[400px]">
                <About />
            </div>
            <Stats />
            <div className='flex justify-center items-center bg-[#00161D] "'>
                <Builder />
            </div>
            <div className='flex justify-center items-center bg-[#00161D] min-h-[400px]"'>
                <FaqSection />
            </div>
            <div className='flex justify-center items-center bg-[#00161D] min-h-[400px]"'>
                <HistoricalFacts />
            </div>
            <div className='flex justify-center items-center bg-[#00161D] min-h-[400px]"'>
                <ArticleList />
            </div>
        </div>
    )
}

export default Main;

