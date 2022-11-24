import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';

const AllMobiles = () => {
    const [phones, setPhones] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/mobiles')
        .then(res => res.json())
        .then(data => setPhones(data))
    })
    return (
        <div className="grid grid-cols-4 gap-4 mx-4">
            {
                phones.map(card => <Card card={card}></Card>)
            }
        </div>
    );
};

export default AllMobiles;