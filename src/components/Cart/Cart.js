import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faBook, faShoppingCart}from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const { cart } = props;
    //icon
    const dollerIcon = <FontAwesomeIcon className="text-success" icon={faDollarSign} />
    const bookIcon = <FontAwesomeIcon className="text-success" icon={faBook} />
    const cartIcon = <FontAwesomeIcon className="text-danger" icon={faShoppingCart} />

    const totalReducer = (previous, course) => previous + course.price;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div className="sticky-top">
             <h4 className="text-center fw-bold pb-3">Order Summery{cartIcon}</h4>
            <table class="table table-bordered border-primary">
                <thead>
                    <tr className="table-active">
                        <th scope="col">{bookIcon} Course Added :</th>
                        <th scope="col"> {props.cart.length}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">{dollerIcon} Total Cost :</th>
                        <td className="fw-bold"> ${total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;