import React from 'react';

const Partner = ({ partner }) => {
    return (
        <div className="card lg:max-w-lg bg-gray-50 shadow-xl">
            <div className="card-body">

                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={partner.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{partner.name}</h4>
                        <p>{partner.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;