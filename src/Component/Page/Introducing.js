import React from 'react';
import './Introducting.css'
import { FaArrowCircleRight } from 'react-icons/fa'

const Introducing = () => {
    return (
        <div class="hero min-h-screen bg-base-200 m-0 p-0">
            <div class="hero-content flex-col lg:flex-row mt-10 ">

                <div>
                    <h1 className='text-4xl text-white m-3 font-bold'>SAMS Global Introducing</h1>
                    <h1 class="text-5xl lg:text-8xl font-bold text-white">APPLICATION</h1>
                    <h1 class="text-4xl lg:text-8xl font-bold text-red-500">PORTAL</h1>

                    {/* ==========pont text ============ */}

                    <p class="pt-6 text-white font-bold text-2xl"><FaArrowCircleRight className='icon tex-3xl' /> One-Click Application Submission</p>
                    <p class=" text-white font-bold text-2xl"><FaArrowCircleRight className='icon tex-3xl' /> Real-Time Application </p>
                    <p class=" text-white font-bold text-2xl"><FaArrowCircleRight className='icon tex-3xl' /> Attractive Commission</p>
                    <p class=" text-white font-bold text-2xl"><FaArrowCircleRight className='icon tex-3xl' /> No Commitment Required</p>


                    {/* ======button ===== */}
                    {/* <button class="btn btn-primary">Get Started</button> */}
                </div>

                {/* ====================banner img ============ */}

                <img src="https://samsapply.co.uk/landrick/images/Testimonial/Apply-Web-Banner-Universities%20(1).png" class="max-w-sm  rounded-lg  " />

            </div>
        </div>
    );
};

export default Introducing;