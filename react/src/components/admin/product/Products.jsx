import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosClient from "../../../axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useAuthContext } from "../../../context/AuthContext";

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/product")
            .then(({ data }) => {
                setFetchedData(data.data);
                console.log(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    const onDelete = (id) => {
        alert("are you sure you want to delete this?");
        axiosClient
            .delete(`/product/${id}`)
            .then(() => {
                getFetcher("/product");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {loading ? (
                <h1 className="bg-danger">loading.......</h1>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>Category name</th>
                            <th>slug</th>
                            <th>description</th>
                            <th>original price</th>
                            <th>selling price</th>
                            <th>quantity</th>
                            <th>image</th>
                            <th>status</th>
                            <th>popular</th>
                            <th>featured</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchedData.map((d) => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.category_id}</td>
                                <td>{d.slug}</td>
                                <td>{d.description}</td>
                                <td>{d.original_price}</td>
                                <td>{d.selling_price}</td>
                                <td>{d.quantity}</td>
                                <td>
                                    <img
                                        src={"http://127.0.0.1:8000/" + d.image}
                                        alt=""
                                        width={"50px"}
                                        height={"50px"}
                                    />
                                </td>

                                <td>{`${d.status ? "Hidden" : "Visible"}`}</td>
                                <td>{`${d.popular ? "yes" : "no"}`}</td>
                                <td>{`${d.featured ? "yes" : "no"}`}</td>
                                <td className="d-flex ">
                                    <Link
                                        to={`/admin/product/edit/${d.id}`}
                                        className="btn btn-warning mx-2"
                                    >
                                        Edit
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

export default Products;
