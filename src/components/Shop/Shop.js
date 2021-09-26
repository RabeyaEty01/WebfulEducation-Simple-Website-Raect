import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import NameCard from '../NameCard/NameCard';
import './Shop.css';


const Shop = () => {

    const [courses, setCourses] = useState([]);
    const [cart, setCart] = useState([]);
    const [nameCard, setNameCard] = useState([]);

    useEffect(() => {
        fetch('./courseData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    const handleAddToCart = (course) => {
        //console.log(course.name);
        //for button clicked show  name
        const newCard =[...nameCard, course];
        setNameCard(newCard);
       //for change cart state 
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
                    {
                        nameCard.map(nameCard=> <NameCard nameCard={nameCard}></NameCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;