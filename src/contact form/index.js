import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../content_option.js";

export default function ContactUs() {
    return (
        <Container>
            <Row class name="mb-5 mt-3">
                <Col lg='8'>
                    <h1 className="display-4 mb-4">
                        Contact Me
                    </h1>
                </Col>
            </Row>

            <Row className="sec_sp">
                <Col lg='5' className="mb-5">
                    <h3 className="color_sec py-4">Get in touch</h3>
                    <address>
                        <strong>Email : developer@javascript.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong>Phone: +65 XXX XXXX</strong>
                        </p>
                    </address>
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg='7' className="d-flex align-items-center">
                    <form className="contact_form w-100">
                        <Row>
                            <Col lg='6' className="form-group">
                                <input
                                    className="form-control rounded-0"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                />
                            </Col>

                        </Row>
                        <textarea
                            className="form-control rounded-0" id="message"
                            name="message"
                            placeholder="Message"
                            rows='5'
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg='12' className="form-group">
                                <button className="btn ac_btn" type="submit">Send</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}