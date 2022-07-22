import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa'
import './About.css'

const About = () => {
    return (
        <div class="hero min-h-screen bg-base-200 about">
            <div class="hero-content flex-col lg:flex-row mt-10 ">

                <div>
                    <h1 className='lg:text-4xl  m-3  about-title'>About SAMS Apply</h1>
                    <h1 class="text-6xl lg:text-7xl font-bold  about-heading">FAST RESPONSE</h1>
                    <h1 class="lg:text-7xl font-bold  about-heading">RAPID REVENUE</h1>

                    {/* ==========p text ============ */}

                    <p class="pt-6 about-title "> SAMS Apply is world's first commission sharing platform, which helps CRM users (agents) to apply to global universities and colleges where they may not have an agreement but their leads are interested to apply. Our aim is to make the application process simpler and easier though SAMS Apply. We ensure data security and user privacy. SAMS CRM users can upload/apply via Application portal in seconds within the software.</p>

                    {/* ======button ===== */}
                    {/* <button class="btn btn-primary">Get Started</button> */}
                </div >

                {/* ====================banner img ============ */}

                <img src="https://samsapply.co.uk/landrick/images/Testimonial/Globe%20(2).png" class="max-w-sm rounded-lg " />

            </div>
        </div>
    );
};

export default About;