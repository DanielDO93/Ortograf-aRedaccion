import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import s from '../../assets/img/ImgRedaccion/siete-s.jpg'

class TemaDiezView extends Component {
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
              <h2>Ejemplo de mala redacción</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s centrado-fila">
            <img
                src={s}
                style={{ width: 360 }}
                alt="s"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-4s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDiezView
