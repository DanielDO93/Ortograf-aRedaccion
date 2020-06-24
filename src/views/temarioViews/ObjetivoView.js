import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import Objetivo from '../../assets/img/ImgRedaccion/objetivo.jpg'

class ObjetivoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Objetivo</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12" sm="7" md="8">
              <div className=" animated  fadeInDown  delay-0s">
                <p className="text-justify ">
                  El participante recordará las reglas básicas de ortografía y
                  redacción, para mejorar en la comunicación interna en su
                  operación, la atención y visualización al escribir: reportes,
                  tipificaciones, redacción de quejas, etc.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="5" md="4" className="centrado-fila">
              <img
                src={Objetivo}
                style={{ width: 400 }}
                alt="Objetivo"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
              />
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="12" className="mt-4 text-center">
              <h3 className="animated  fadeInDown  delay-3s">
                <b>¡COMENCEMOS!</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default ObjetivoView
