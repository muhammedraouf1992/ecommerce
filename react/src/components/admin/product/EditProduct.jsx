import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosClient from "../../../axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [inputImage, setInputImage] = useState();
    const [loading, setLoading] = useState(false);
    const [checked, setChecked] = useState({
        status: "",
        popular: "",
        featured: "",
    });
    const [inputData, setInputData] = useState({
        title: "",
        slug: "",
        description: "",
        meta_title: "",
        meta_description: "",
        meta_keywords: "",
        status: "",
        popular: "",
        featured: "",
        original_price: "",
        selling_price: "",
        category_id: "",
        quantity: "",
        brand: "",
    });

    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/visible")
            .then(({ data }) => {
                setCategoryList(data.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axiosClient
            .get(`/product/${params.id}`)
            .then(({ data }) => {
                setInputData(data.data);
                setChecked(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };
    const handleCheck = (e) => {
        setChecked({ ...checked, [e.target.name]: e.target.checked });
        console.log(checked);
    };
    const handleImage = (e) => {
        setInputImage({ image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("category_id", inputData.category_id);
        formData.append("title", inputData.title);
        formData.append("slug", inputData.slug);
        formData.append("description", inputData.description);
        formData.append("meta_title", inputData.meta_title);
        formData.append("meta_description", inputData.meta_description);
        formData.append("meta_keywords", inputData.meta_keywords);
        formData.append("status", checked.status ? "1" : "0");
        formData.append("popular", checked.popular ? "1" : "0");
        formData.append("featured", checked.featured ? "1" : "0");
        formData.append("original_price", inputData.original_price);
        formData.append("selling_price", inputData.selling_price);
        if (inputImage) {
            formData.append("image", inputImage.image);
        }
        formData.append("quantity", inputData.quantity);
        formData.append("brand", inputData.brand);

        axiosClient
            .post(`/product/${params.id}`, formData)
            .then((data) => {
                console.log(data);
                navigate("/admin/product");
                console.log(checked);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            {loading ? (
                <h1>loading.....</h1>
            ) : (
                <>
                    <Form
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                        method="post"
                    >
                        <Tabs
                            defaultActiveKey="Product"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="Product" title="Product">
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={handleChange}
                                    name="category_id"
                                    value={inputData.category_id}
                                >
                                    <option>Open this select menu</option>
                                    {categoryList.map((cat) => (
                                        <option value={cat.id} key={cat.id}>
                                            {cat.title}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicTitle"
                                >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter title"
                                        name="title"
                                        onChange={handleChange}
                                        value={inputData.title}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicSlug"
                                >
                                    <Form.Label>Slug</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter slug"
                                        name="slug"
                                        value={inputData.slug}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicBrand"
                                >
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Brand"
                                        name="brand"
                                        value={inputData.brand}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter Description"
                                        name="description"
                                        onChange={handleChange}
                                        value={inputData.description}
                                    />
                                </Form.Group>
                                <Form.Group
                                    controlId="formFile"
                                    className="mb-3"
                                >
                                    <Form.Label>Product Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="image"
                                        onChange={handleImage}
                                    />
                                </Form.Group>
                                <img
                                    src={
                                        `http://127.0.0.1:8000/` +
                                        inputData.image
                                    }
                                    width={"100px"}
                                    height={"100px"}
                                    className="my-3"
                                    alt=""
                                />
                            </Tab>
                            <Tab eventKey="SeoTags" title="Seo Tags">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicMetaTitle"
                                >
                                    <Form.Label>Meta Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Meta Title"
                                        name="meta_title"
                                        value={inputData.meta_title}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicMetaKeyword"
                                >
                                    <Form.Label>Meta Keyword</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Meta Keyword"
                                        name="meta_keywords"
                                        value={inputData.meta_keywords}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea2"
                                >
                                    <Form.Label>Meta Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Enter Meta Description"
                                        rows={3}
                                        name="meta_description"
                                        value={inputData.meta_description}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Tab>
                            <Tab eventKey="OtherDetails" title="Other Details">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicMetaKeyword"
                                >
                                    <Form.Label>Original Price</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Original Price"
                                        name="original_price"
                                        value={inputData.original_price}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicSellingPrice"
                                >
                                    <Form.Label>selling price</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Selling Price"
                                        name="selling_price"
                                        value={inputData.selling_price}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicSellingPrice"
                                >
                                    <Form.Label>quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="quantity"
                                        value={inputData.quantity}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox1"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Feature"
                                        name="featured"
                                        onChange={handleCheck}
                                        defaultChecked={
                                            checked.featured === 1
                                                ? true
                                                : false
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox2"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Popular"
                                        name="popular"
                                        onChange={handleCheck}
                                        defaultChecked={
                                            checked.popular === 1 ? true : false
                                        }
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox3"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Hide"
                                        name="status"
                                        onChange={handleCheck}
                                        defaultChecked={
                                            checked.status === 1 ? true : false
                                        }
                                    />
                                </Form.Group>
                            </Tab>
                        </Tabs>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </>
            )}
        </div>
    );
};

export default EditProduct;
