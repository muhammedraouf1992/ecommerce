import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axiosClient from "../../../axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useAuthContext } from "../../../context/AuthContext";

const Products = () => {
    const { getFetcher, fetchedData, loading, errors } = useAuthContext();

    useEffect(() => {
        getFetcher("/product");
        console.log(fetchedData);
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
    if (loading) {
        return <h1 className="bg-danger">loading.......</h1>;
    }
    return (
        <div>
            {fetchedData.length <= 0 ? (
                <h1>there are not products to show</h1>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>Category name</th>
                            <th>slug</th>

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
                                <td>{d.category.title}</td>
                                <td>{d.slug}</td>

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
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, provident. Eligendi facere omnis officiis. Necessitatibus cumque natus ad assumenda at tenetur consequuntur illum dicta? Fugiat cupiditate est ullam, perspiciatis, officiis numquam beatae sint, iure voluptatibus deserunt architecto sequi! Dolor debitis tempora ipsa nemo corrupti. Error ad officiis quis maxime autem consequatur nemo quidem esse earum! Natus quidem voluptatem est repellendus laboriosam dicta error laborum sed vel quae, dolores iusto beatae nesciunt vero illum reiciendis quam, molestias dolorum doloribus fugiat numquam, totam vitae. Perferendis voluptas nesciunt nobis corrupti, quidem et similique quas a illum, facilis eaque distinctio sequi officiis ut, libero dolore quos laudantium voluptatum! Enim magnam vel hic iste dolor nulla, fugit soluta! Quae qui sequi, eligendi aliquam beatae earum, maiores magnam amet nesciunt accusamus mollitia nulla minima porro quibusdam, cumque voluptatum consequatur nisi aut quaerat est. Eveniet, nemo dolore. Cum, veritatis aliquam laboriosam officiis nemo, reiciendis ex iusto harum aut beatae quod rem! Magni omnis accusantium sapiente? Dolorem culpa vero similique perferendis molestiae aliquid in blanditiis, illum nihil sit repudiandae accusamus quaerat, tenetur deserunt? Alias, totam dignissimos vel soluta in illum, consequuntur ullam et rem enim voluptates aut nemo quasi ipsum consequatur delectus blanditiis, ducimus minus? Eos molestiae earum consequatur ut tempore blanditiis amet, suscipit deleniti minus nulla adipisci possimus sit repellendus ratione rem, voluptates dolorum cupiditate temporibus impedit, facere fuga? Cum unde id sint nam facere itaque. Excepturi hic iusto omnis odit ad cumque officia laborum eveniet tempora! Dicta aliquid, explicabo sunt ipsam laudantium earum eaque exercitationem nam nesciunt voluptatem cum reprehenderit veniam reiciendis expedita omnis nulla a numquam officiis molestiae iure, minus officia sit? Laborum fugiat temporibus optio ipsum odio sit doloremque minus quia, aliquam voluptates necessitatibus ipsa nostrum non ab aperiam cumque debitis illo dolore mollitia excepturi deserunt culpa? Quo architecto reprehenderit nulla quod qui cupiditate?
