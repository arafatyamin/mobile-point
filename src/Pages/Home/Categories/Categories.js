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
        <div className="text-blue-700 h-full flex flex-col ml-10">
        {
                        categories?.map(category => 
                            <Link key={category._id} to={`/categories/${category._id}`} className='text-lg text-start lg:text-xl font-semibold hover:link'>{category.category_name}
                            </Link>
                        )
                        }
                        </div>
    );
};

export default Categories;