import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    console.log(categories);
    return (
        <div className="text-blue-700 h-full flex flex-col mt-10">
            <Link to='/allmobiles' className='text-xl font-semibold hover:link'>Mobiles</Link>
        {
                        categories?.map(category => 
                            <Link to={`/categories/${category._id}`} className='text-xl font-semibold hover:link'>{category.category_name}
                            </Link>
                        )
                        }
                        </div>
    );
};

export default Categories;