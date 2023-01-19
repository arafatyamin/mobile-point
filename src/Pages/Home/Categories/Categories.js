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
        <div className="text-blue-700 h-full grid grid-cols-4 lg:grid-cols-1  gap-4 lg:flex-cols-3 mx-6">
        {
                        categories?.map(category => 
                            <Link key={category?._id} to={`/categories/${category._id}`} className='flex gap-4 w-full h-full text-lg text-start lg:text-xl font-semibold hover:link'>{category.category_name}
                            </Link>
                        )
                        }
                        </div>
    );
};

export default Categories;