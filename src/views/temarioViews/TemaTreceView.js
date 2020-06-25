import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import trece from '../../assets/img/ImgRedaccion/trece.jpg'

class TemaTreceView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>ORTOGRAFÍA Y REDACCIÓN</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="">
            <Col xs="12" className="animated zoomInUp delay-1s">
              <h2>Lla No hEzcRivAz hAcy, Se ve y se entiende mejor así. </h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>¡Muchas gracias!</h2>

              <div className="centrado-fila">
                <img
                  src={trece}
                  style={{ width: 360 }}
                  alt="trece"
                  className="img-fluid bordeImagen  animated  fadeInDown  delay-4s"
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaTreceView
