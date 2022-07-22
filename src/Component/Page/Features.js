import React from 'react';
import './Features.css'

const Features = () => {
    return (
        <div className='mt-5 p-20'>
            <h1 className='text-center text-5xl m-2 font-bold heading'>Key Features of SAMS Apply</h1>
            <p className='text-center  mb-5'>These are our core strengths that make us stand out in the market and worthy of your attention.</p>

            <div className=' grid lg:grid-cols-3 grid-flow-raw gap-4 '>
                {/* ==============item 1 ============== */}
                <div class="card w-5/5 bg-base-100  rounded-0 hover:scale-110 duration-500 g-color">
                    <figure class="pt-10">
                        <img src="https://www.shareicon.net/data/2017/03/02/880210_images_512x512.png" alt="Shoes" class="  image" />
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold">Same Day <br />Application Submission</h2>
                        <p className='font-bold'>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                {/* ==============item 2 ============== */}
                <div class="card w-5/5 bg-base-100  rounded-0 hover:scale-110 duration-500 b-color">
                    <figure class="pt-10">
                        <img src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Png-icon.png" alt="Shoes" class="  image" />
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold text-white">One-Click <br />Apply</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                {/* ==============item 3 ============== */}
                <div class="card w-5/5 bg-base-100  rounded-0 hover:scale-110 duration-500 g-color">
                    <figure class="pt-10">
                        <img src="https://www.shareicon.net/data/2017/03/02/880210_images_512x512.png" alt="Shoes" class="  image" />
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold">Access to <br />Global Universities</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                {/* ==============item 4 ============== */}
                <div class="card w-5/5 bg-base-100  rounded-0 hover:scale-110 duration-500 b-color">
                    <figure class="pt-10">
                        <img src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Png-icon.png" alt="Shoes" class="  image" />
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold text-white">Attractive <br />Commission</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                {/* ==============item 5 ============== */}
                <div class="card w-5/5 bg-base-100  rounded-0 hover:scale-110 duration-500 g-color">
                    <figure class="pt-10">
                        <img src="https://www.shareicon.net/data/2017/03/02/880210_images_512x512.png" alt="Shoes" class="  image" />
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold">Quick Support <br />and Response</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

                {/* ==============item 6 ============== */}
                <div class="card w-5/5 bg-base-100  rounded-0  hover:scale-110 duration-500 b-color">
                    <figure class="pt-10">
                        <img src="https://icons.iconarchive.com/icons/icons8/windows-8/512/Files-Png-icon.png" alt="Shoes" class=" image" />
                    </figure>
                    <div class="card-body items-center text-center ">
                        <h2 class="card-title font-bold text-white">Real Time <br />Application Tracking</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;