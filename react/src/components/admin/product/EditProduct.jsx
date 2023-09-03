import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const EditProduct = () => {
    const params = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const [categoryList, setCategoryList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [inputImage, setInputImage] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        axiosClient
            .get("/visible")
            .then(({ data }) => {
                setCategoryList(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });

        axiosClient
            .get(`/product/${params.id}`)
            .then(({ data }) => {
                console.log(data);
                setSingleProduct(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleChange = (e) => {
        setSingleProduct({
            ...singleProduct,
            [e.target.name]: e.target.value,
            status: e.target.checked,
            popular: e.target.checked,
            featured: e.target.checked,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("category_id", singleProduct.category_id);
        formData.append("title", singleProduct.title);
        formData.append("slug", singleProduct.slug);
        formData.append("description", singleProduct.description);
        formData.append("meta_title", singleProduct.meta_title);
        formData.append("meta_description", singleProduct.meta_description);
        formData.append("meta_keyword", singleProduct.meta_keyword);
        formData.append("status", singleProduct.status);
        formData.append("popular", singleProduct.popular);
        formData.append("featured", singleProduct.featured);
        formData.append("original_price", singleProduct.original_price);
        formData.append("selling_price", singleProduct.selling_price);
        if (inputImage) {
            formData.append("image", inputImage.image);
        }
        formData.append("qty", singleProduct.qty);
        formData.append("brand", singleProduct.brand);

        axiosClient
            .put(`/product/${params.id}`)
            .then((data) => {
                navigate("/admin/product");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleImage = (e) => {
        setInputImage({ image: e.target.files[0] });
    };

    return (
        <div>
            <>
                {loading ? (
                    <h1>loading.....</h1>
                ) : (
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
                                >
                                    <option>Open this select menu</option>
                                    {categoryList.map((cat) => (
                                        <option
                                            value={cat.id}
                                            key={cat.id}
                                            selected={
                                                cat.id ===
                                                singleProduct.category_id
                                                    ? true
                                                    : false
                                            }
                                        >
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
                                        value={singleProduct.title}
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
                                        value={singleProduct.slug}
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
                                        value={singleProduct.brand}
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
                                        value={singleProduct.description}
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
                                    src={singleProduct.image}
                                    width={"150px"}
                                    height={"150px"}
                                    className="my-4"
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
                                        onChange={handleChange}
                                        value={singleProduct.meta_title}
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
                                        value={singleProduct.meta_keywords}
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
                                        value={singleProduct.meta_description}
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
                                        value={singleProduct.original_price}
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
                                        value={singleProduct.selling_price}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicSellingPrice"
                                >
                                    <Form.Label>quantity</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="qty"
                                        onChange={handleChange}
                                        value={singleProduct.quantity}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicCheckbox1"
                                >
                                    <Form.Check
                                        type="checkbox"
                                        label="Feature"
                                        name="feature"
                                        onChange={handleChange}
                                        checked={
                                            singleProduct.feature ? true : ""
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
                                        onChange={handleChange}
                                        checked={
                                            singleProduct.popular ? true : ""
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
                                        onChange={handleChange}
                                        checked={
                                            singleProduct.status ? true : ""
                                        }
                                    />
                                </Form.Group>
                            </Tab>
                        </Tabs>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                )}
            </>
        </div>
    );
};

export default EditProduct;
