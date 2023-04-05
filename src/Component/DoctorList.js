
import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import img3 from "./Img/img3.png";
import axios from 'axios'
import Moda from './Modal';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://642cc08f66a20ec9ce8db147.mockapi.io/id")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  data.sort((a, b) => b.rate - a.rate);
  

  return (
    <div id="achievement" style={{ textAlign: "center", margin: "10%" }}>
      <Row md={"3"} sm={"1"} className="g-4">
        {data.map((doctor) => (
          <Col key={doctor.id}>
            <div className="a-box">
              <div className="img-container">
                <div className="img-inner">
                  <div className="inner-skew">
                    <img src={img3} alt="Doctor Avatar" />
                  </div>
                </div>
              </div>
              <div className="text-container">
                <h3>Name :{doctor.name}</h3>
                <h2>Rate:{doctor.rate}%</h2>
                <Moda/>

              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;

