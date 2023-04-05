import React from 'react'
import { Card } from 'react-bootstrap'

export default function Footer() {
  return (
    <div>
      <div id="footer">
      <Card.Footer className="footerStyle">
        <div style={{ padding: "50px" }}>
          <p style={{ fontSize: "19px" }}>© 2022 React</p>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a href="#" target="_blank" className="btn-social btn-twitter">
                  <i className="fa fa-twitter"></i>
                </a>

                <a href="#" target="_blank" className="btn-social btn-linkedin">
                  <i className="fa fa-linkedin"></i>
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="btn-social btn-instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>

                <a href="#" target="_blank" className="btn-social btn-facebook">
                  <i className="fa fa-facebook"></i>
                </a>

                <a href="#" target="_blank" className="btn-social btn-email">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card.Footer>
    </div>
    </div>
  )
}
