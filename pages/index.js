import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import MainBanner from '../components/home-four/MainBanner';
import About from '../components/home-four/About';
import Services from '../components/home-four/Services';
import Cta from '../components/home-four/Cta';
import WhyChoose from '../components/home-four/WhyChoose';

export default () => (
    <NoSSR>
        <Preloader>
            <Placeholder>
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            </Placeholder>
            <Header />
            <MainBanner />
            <About />
            <Services />
            <Cta />
            <WhyChoose />

            <Footer />
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
        </Preloader>
    </NoSSR>
)
