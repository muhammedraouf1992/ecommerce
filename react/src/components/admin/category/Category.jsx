import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosClient from "../../../axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useAuthContext } from "../../../context/AuthContext";
const Category = () => {
    const { getFetcher, fetchedData, errors, loading } = useAuthContext();

    useEffect(() => {
        getFetcher("/category");
    }, []);

    const onDelete = (id) => {
        alert("are you sure you want to delete this?");
        axiosClient
            .delete(`/category/${id}`)
            .then(() => {
                getFetcher("/category");
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
                            <th>slug</th>
                            <th>description</th>
                            <th>image</th>
                            <th>status</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fetchedData.map((d) => (
                            <tr key={d.id}>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.slug}</td>
                                <td>{d.description}</td>
                                <td>
                                    <img
                                        src={`http://127.0.0.1:8000/${d.image}`}
                                        alt=""
                                        style={{ width: "100px" }}
                                    />
                                </td>
                                <td>{`${d.status ? "Hidden" : "Visible"}`}</td>
                                <td className="d-flex">
                                    <Link
                                        to={`/admin/category/edit/${d.id}`}
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

export default Category;
