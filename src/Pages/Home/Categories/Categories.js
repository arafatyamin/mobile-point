import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://mobile-resell-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="text-blue-700 h-full flex flex-col mt-10">
            <Link to='/allmobiles' className='text-xl font-semibold hover:link'>Mobiles</Link>
        {
                        categories?.map(category => 
                            <Link key={category._id} to={`/categories/${category._id}`} className='text-xl font-semibold hover:link'>{category.category_name}
                            </Link>
                        )
                        }
                        </div>
    );
};

export default Categories;