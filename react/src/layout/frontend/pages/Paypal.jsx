import React, { useEffect, useRef, useState } from "react";
import axiosClient from "../../../axios";
import { useNavigate } from "react-router-dom";

const Paypal = ({ price, order_data }) => {
    const paypal = useRef();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: "CAD",
                                    value: price,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    order_data.payment_id = order.id;
                    axiosClient
                        .post("/make-order", order_data)
                        .then((data) => {
                            console.log(data);
                            navigate("/");
                        })
                        .catch((error) => {
                            console.log(error);
                            setErrors(error.response.data);
                        });
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, []);

    return <div ref={paypal}></div>;
};

export default Paypal;
