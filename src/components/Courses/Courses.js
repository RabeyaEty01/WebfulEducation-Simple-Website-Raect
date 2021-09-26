import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock,faCalendarAlt,faChalkboardTeacher,faBars ,faDollarSign}from '@fortawesome/free-solid-svg-icons';

const Courses = (props) => {
    const { name, img, startDate, duration, instructors, credit, price, } = props.course;
    //All icons
    const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />
    const clockIcon = <FontAwesomeIcon className="text-success" icon={faClock} />
    const calenderIcon = <FontAwesomeIcon className="text-success" icon={faCalendarAlt} />
    const teacherIcon = <FontAwesomeIcon className="text-success" icon={faChalkboardTeacher} />
    const barIcon = <FontAwesomeIcon className="text-success" icon={faBars} />
    const dollerIcon = <FontAwesomeIcon className="text-success" icon={faDollarSign} />

    return (
        <div>
            <div class="card h-100 rounded-3 bg-light shadow">
                <img className="img-fluid p-2" src={img} alt="" />
                <div class="card-body">
                    <h5 class="card-title text-primary fw-bold">{name}</h5>
                    <p class="card-text text-start"><small>{teacherIcon} Instructors: {instructors}</small></p>
                    <p class="card-text text-start"><small>{clockIcon} Start Date:  {startDate}</small></p>
                    <p class="card-text text-start"><small>{calenderIcon} Duration: {duration}</small></p>
                    <p class="card-text text-start"><small>{barIcon} Credit: {credit}</small></p>
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title fw-bold">Price: {dollerIcon}{price}</h5>
                        <button class="rounded-3 bg-warning border-1 fw-bold"  onClick={() => props.handleAddToCart(props.course)} >Enroll Now {arrowIcon}</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Courses;