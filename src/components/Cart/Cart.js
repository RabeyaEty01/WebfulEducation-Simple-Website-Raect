import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    const totalReducer = (previous, course) => previous + course.price;
    const total = cart.reduce(totalReducer, 0);

    return (
        <div className="sticky-top">
             <h4 className="text-center fw-bold pb-3">Order Summery</h4>
            <table class="table table-bordered border-primary">
                <thead>
                    <tr className="table-active">
                        <th scope="col">Course Added : </th>
                        <th scope="col"> {props.cart.length}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <th scope="row">Total Cost :</th>
                        <td className="fw-bold"> ${total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;