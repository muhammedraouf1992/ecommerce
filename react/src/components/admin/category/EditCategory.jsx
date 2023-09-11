import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../axios";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const EditCategory = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [singleCategory, setSingeCategory] = useState({
        title: "",
        slug: "",
        description: "",
        metaTitle: "",
        metaDescription: "",
        metaKeyword: "",
        status: "",
    });
    const [loading, setLoading] = useState(false);
    const [inputImage, setInputImage] = useState();
    const [checked, setChecked] = useState({ status: "" });

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get(`/category/${params.id}`)
            .then(({ data }) => {
                setSingeCategory(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    const handleChange = (e) => {
        setSingeCategory({
            ...singleCategory,
            [e.target.name]: e.target.value,
        });
        console.log(singleCategory);
    };
    const handleCheck = (e) => {
        setChecked({ status: e.target.checked });
    };
    const handleImage = (e) => {
        setInputImage({ image: e.target.files[0] });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", singleCategory.title);
        formData.append("slug", singleCategory.slug);
        formData.append("description", singleCategory.description);
        formData.append("metaTitle", singleCategory.metaTitle);
        formData.append("metaDescription", singleCategory.metaDescription);
        formData.append("metaKeyword", singleCategory.metaKeyword);

        formData.append("status", checked.status ? "1" : "0");
        if (inputImage) {
            formData.append("image", inputImage.image);
        }

        axiosClient
            .post(`/category/${params.id}`, formData)
            .then((data) => {
                navigate("/admin/category");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div>
            {loading ? (
                <h1 className="bg-danger fs-1">loading</h1>
            ) : (
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
                                        value={singleCategory.title}
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
                                        value={singleCategory.slug}
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
                                        value={singleCategory.description}
                                    />
                                </Form.Group>
                                <Form.Group
                                    controlId="formFile"
                                    className="mb-3"
                                >
                                    <Form.Label>
                                        Default file input example
                                    </Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="image"
                                        onChange={handleImage}
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
                                        onChange={handleCheck}
                                        checked={
                                            singleCategory.status
                                                ? "checked"
                                                : ""
                                        }
                                        value={singleCategory.status}
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
                                        value={singleCategory.metaTitle}
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
                                        value={singleCategory.metaKeyword}
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
                                        value={singleCategory.metaDescription}
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

export default EditCategory;
