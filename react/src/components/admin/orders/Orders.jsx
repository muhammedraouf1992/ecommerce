import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosClient from "../../../axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const Orders = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/orders")
            .then(({ data }) => {
                console.log(data.data);
                setData(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            {loading ? (
                <h1 className="text-danger">loading.......</h1>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>fullname</th>
                            <th>email</th>
                            <th>tracking number</th>
                            <th>Payment Method </th>
                            <th>status</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.first_name + " " + d.last_name}</td>
                                <td>{d.email}</td>
                                <td>{d.tracking_number}</td>
                                <td>{d.payment_method}</td>
                                <td
                                    className={`${
                                        d.status
                                            ? "text-success"
                                            : "text-danger"
                                    }`}
                                >{`${
                                    d.status ? "shipped" : "not shipped"
                                }`}</td>
                                <td className="d-flex ">
                                    <Link
                                        to={`/admin/order/edit/${d.id}`}
                                        className="btn btn-warning mx-2"
                                    >
                                        View
                                    </Link>
                                    <Button
                                        variant="danger"
                                        onClick={() => onDelete(d.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

export default Orders;
