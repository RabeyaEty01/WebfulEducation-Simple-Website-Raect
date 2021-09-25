import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import './Shop.css';


const Shop = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./courseData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    return (
        <div className="shop-container">
            <div className="course-container">
                {
                    courses.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
            </div>
            <div className="cart-container">
                <h1>This is from </h1>
            </div>
        </div>
    );
};

export default Shop;