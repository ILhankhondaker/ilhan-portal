import React from 'react';
import './Item.css'


const Item = () => {
    return (
        <div className=' grid lg:grid-cols-6 grid-flow-raw gap-0 '>
            {/* ==============item 1 ============== */}
            <div class="card item w-5/5 bg-base-100  rounded-0 ">
                <figure class="pt-10">
                    <img src="https://samsapply.co.uk/landrick/images/Testimonial/university_collaboration.png" alt="Shoes" class="  image" />
                </figure>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title font-bold">University</h2>
                    <h2 class="card-title font-bold">Collaboration</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

            {/* ==============item 2 ============== */}
            <div class="card item w-5/5 bg-base-100  rounded-0 ">
                <figure class="pt-10">
                    <img src="https://samsapply.co.uk/landrick/images/Testimonial/entrepreneurial.png" alt="Shoes" class="  image" />
                </figure>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title font-bold">Entrepreneurial</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

            {/* ==============item 3 ============== */}
            <div class="card item w-5/5 bg-base-100  rounded-0 ">
                <figure class="pt-10">
                    <img src="https://samsapply.co.uk/landrick/images/Testimonial/agency_struggle.png" alt="Shoes" class="  image" />
                </figure>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title font-bold">Agency Struggle</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

            {/* ==============item 4 ============== */}
            <div class="card item w-5/5 bg-base-100  rounded-0 ">
                <figure class="pt-10">
                    <img src="https://samsapply.co.uk/landrick/images/Testimonial/new_destination.png" alt="Shoes" class="  image" />
                </figure>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title font-bold">New Destination</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

            {/* ==============item 5 ============== */}
            <div class="card item w-5/5 bg-base-100  rounded-0 ">
                <figure class="pt-10">
                    <img src="https://samsapply.co.uk/landrick/images/Testimonial/assurance.png" alt="Shoes" class="  image" />
                </figure>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title font-bold">Assurance</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>

            {/* ==============item 6 ============== */}
            <div class="card item w-5/5 bg-base-100  rounded-0 ">
                <figure class="pt-10">
                    <img src="https://samsapply.co.uk/landrick/images/Testimonial/investment.png" alt="Shoes" class=" image" />
                </figure>
                <div class="card-body items-center text-center ">
                    <h2 class="card-title font-bold">Investment</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
        </div>
    );
};

export default Item;