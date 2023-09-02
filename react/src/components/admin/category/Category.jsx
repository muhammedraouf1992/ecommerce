import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosClient from "../../../axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
const Category = () => {
    const [fetchedData, setfetchedData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAllData = () => {
        axiosClient
            .get("/category")
            .then(({ data }) => {
                console.log(data.data);
                setfetchedData(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/category")
            .then(({ data }) => {
                console.log(data.data);
                setfetchedData(data.data);
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
            .delete(`/category/${id}`)
            .then(() => {
                getAllData();
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
                                <td>{`${d.status ? "Hidden" : "Visible"}`}</td>
                                <td className="d-flex ">
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