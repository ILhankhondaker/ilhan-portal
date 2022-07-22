import React, { useEffect, useState } from "react";
import Partner from "./Partner";

const Partners = () => {

    const [partersData, setPartersData] = useState([]);
    useEffect(() => {
        fetch("partner.json")
            .then((res) => res.json())
            .then((data) => setPartersData(data));
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    partersData.map(partner => <Partner
                        key={partner.id}
                        partner={partner}
                    ></Partner>)
                }
            </div>
        </div>
    );
};

export default Partners;