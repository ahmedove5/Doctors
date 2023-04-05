import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav , Container ,NavDropdown,Button  ,
  Form,
  Col,
  Row,
  Offcanvas,} from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "./Img/logo1.jpg"

function Navigation() {
  return (
  
    <div>
      <div>
        <div>
          <Navbar
            className="px-3  Navbar sticky-top"
            variant="light"
            expand="lg"
          >
            <img
              src={logo1}
              style={{ height: "70px", width: "100px", borderRadius: "50%"  }}
            />
            <Navbar.Brand href="/"> React Hospital</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/d">Doctors</Nav.Link>
                <Nav.Link href="/">Services</Nav.Link>
                <Nav.Link href="/">Discover#</Nav.Link>
               
              </Nav>

              <div>
                <Button id="button" variant="primary" className="bg-dark">
                  <FaUserCircle />
                  <h4></h4>
                </Button>

                <Offcanvas >
                  <Offcanvas.Header
                    style={{ color: "white", background: "#2b472ecf" }}
                    closeButton
                  >
                    <Offcanvas.Title>
                      <h1></h1>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="text-center mt-5">
                  
                      <>
                        <h3>
                          الاسم: 
                        </h3>
                        <h3>الايميل:</h3>
                        <h3>الجوال: </h3>
                        <h3>المنطقة:</h3>
                        <hr />
                        <h2>Score points: </h2>
                        <hr />
                      </>
                      
                      <div className="formLogin">
                        <Form style={{ padding: "1rem" }} onSubmit="">
                          <h3>تسجيل الدخول</h3>
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Control
                                type="text"
                                placeholder="اسم المستخدم"
                             
                              />
                            </Form.Group>
                          </Row>

                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPassword">
                              <Form.Control
                                type="password"
                                placeholder="كلمة المرور"
                            
                              />
                            </Form.Group>
                          </Row>

                          <Button
                            id="button"
                            variant="primary"
                            onClick=""
                          >
                            دخول
                          </Button>
                          <Link to="/register">
                            <Button
                              id="button"
                              variant="primary"
                              type="submit"
                              onClick=""
                            >
                              سجل معنا
                            </Button>
                          </Link>
                        </Form>
                      </div>
               
                    <br />
                 
                      <>
                        <Button
                          id="button-danger"
                          variant="primary"
                       
                        >
                          الخروج
                        </Button>

                        <Button
                          id="button"
                          variant="primary"
                          onClick=""
                        >
                          معلومات الحساب
                        </Button>
                      </>
                  
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div className="wrapper">
          <ul>
            <li className="whatsapp">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              <div className="slider">
                <a
                  href="https://wa.me/+9665"
                  target="_blank"
                  className="linkTag"
                >
                  <p>whatsapp</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className="top">
            &#8593;
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default Navigation;
