import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosClient from "../../../axios";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const navigate = useNavigate();
    const [categoryList, setCategoryList] = useState([]);
    const [inputImage, setInputImage] = useState();
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
        meta_keyword: "",

        original_price: "",
        selling_price: "",
        category_id: "",
        quantity: "",
        brand: "",
    });
    useEffect(() => {
        axiosClient
            .get("/visible")
            .then(({ data }) => {
                setCategoryList(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleChange = (e) => {
        e.persist();
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
        console.log(inputData);
    };
    const handleImage = (e) => {
        setInputImage({ image: e.target.files[0] });
    };
    const handleCheck = (e) => {
        setChecked({ ...checked, [e.target.name]: e.target.checked });
        console.log(checked);
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
        formData.append("meta_keyword", inputData.meta_keyword);
        formData.append("status", checked.status);
        formData.append("popular", checked.popular);
        formData.append("featured", checked.featured);
        formData.append("original_price", inputData.original_price);
        formData.append("selling_price", inputData.selling_price);
        if (inputImage) {
            formData.append("image", inputImage.image);
        }
        formData.append("quantity", inputData.quantity);
        formData.append("brand", inputData.brand);

        axiosClient
            .post("/product", formData)
            .then((data) => {
                console.log(data);
                navigate("/admin/product");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <>
                <Form
                    onSubmit={handleSubmit}
                    method="post"
                    encType="multipart/form-data"
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
                                    onChange={handleChange}
                                    value={inputData.slug}
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
                                    onChange={handleChange}
                                    value={inputData.brand}
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
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Product Image</Form.Label>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    onChange={handleImage}
                                />
                            </Form.Group>
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
                                    onChange={handleChange}
                                    value={inputData.handleChange}
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
                                    name="meta_keyword"
                                    onChange={handleChange}
                                    value={inputData.meta_keyword}
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
                                    onChange={handleChange}
                                    value={inputData.meta_description}
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
                                    onChange={handleChange}
                                    value={inputData.original_price}
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
                                    onChange={handleChange}
                                    value={inputData.selling_price}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicSellingPrice"
                            >
                                <Form.Label>quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Quantity"
                                    name="quantity"
                                    onChange={handleChange}
                                    value={inputData.quantity}
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
                                    value={inputData.featured}
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
                                    value={inputData.popular}
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
                                    value={inputData.status}
                                />
                            </Form.Group>
                        </Tab>
                    </Tabs>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        </div>
    );
};

export default AddProduct;
