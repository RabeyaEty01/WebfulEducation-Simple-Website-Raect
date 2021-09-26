import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import './Shop.css';


const Shop = () => {

    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./courseData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    const handleAddToCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);

    }

    return (
        <div>
            <h2>All Upcoming Courses</h2>
            <div className="shop-container">
                <div className="course-container">
                    {
                        courses.map(course => <Courses
                            key={course.id}
                            course={course}
                            handleAddToCart={handleAddToCart}
                        ></Courses>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;