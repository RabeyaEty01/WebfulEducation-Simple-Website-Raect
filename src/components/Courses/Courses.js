import React from 'react';

const Courses = (props) => {
    const { name, img, startDate, duration, instructors, credit, price, } = props.course;

    return (
        <div>
            <div class="card h-100 rounded-3">
                <img className="img-fluid p-2" src={img} alt="" />
                <div class="card-body">
                    <h5 class="card-title text-primary fw-bold">{name}</h5>
                    <p class="card-text text-start"><small>Instructors: {instructors}</small></p>
                    <p class="card-text text-start"><small>Start Date: {startDate}</small></p>
                    <p class="card-text text-start"><small>Duration: {duration}</small></p>
                    <p class="card-text text-start"><small>Credit: {credit}</small></p>
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title fw-bold">Price: ${price}</h5>
                        <button class="rounded-3 bg-warning border-1 fw-bold">Enroll Now</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Courses;