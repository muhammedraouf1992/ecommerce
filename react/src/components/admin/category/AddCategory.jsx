import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axiosClient from "../../../axios";
import { useNavigate } from "react-router-dom";
const AddCategory = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        title: "",
        slug: "",
        description: "",
        metaTitle: "",
        metaDescription: "",
        metaKeyword: "",
    });
    const handleChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
            status: e.target.checked,
        });
    };
    console.log(inputData);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { ...inputData };
        axiosClient
            .post("/category", data)
            .then((data) => {
                console.log(data);
                navigate("/admin/category");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <Form
                onSubmit={handleSubmit}
                method="post"
                encType="multipart/form-data"
            >
                <Tabs
                    defaultActiveKey="Category"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Category" title="Category">
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                name="title"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSlug">
                            <Form.Label>Slug</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter slug"
                                name="slug"
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
                                name="description"
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicCheckbox"
                        >
                            <Form.Check
                                type="checkbox"
                                label="Hide"
                                name="status"
                                onChange={handleChange}
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
                                name="metaTitle"
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
                                name="metaKeyword"
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
                                rows={3}
                                name="metaDescription"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Tab>
                </Tabs>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default AddCategory;
