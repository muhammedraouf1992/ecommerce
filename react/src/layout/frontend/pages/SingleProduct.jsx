import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../axios";

const SingleProduct = () => {
    const params = useParams();

    const [fetchData, setFetchData] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/product/${params.id}`)
            .then(({ data }) => {
                setFetchData(data.data);
                setLoading(false);
                console.log(data.data);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>loading.......</h1>;
    }

    return (
        <div>
            <h1>{fetchData.title}</h1>
            <h1>{fetchData.original_price}</h1>
            <h1>{fetchData.selling_price}</h1>
        </div>
    );
};

export default SingleProduct;
