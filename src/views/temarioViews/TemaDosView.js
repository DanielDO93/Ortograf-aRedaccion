import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap'
import dos from '../../assets/img/ImgRedaccion/dos.jpg'

class TemaDosView extends Component {
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
              <h2>¿Qué es la ortografía?</h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="8" className="">
              <p>
                La ortografía es el conjunto de normas que regulan la escritura.
              </p>
              <p>
                Forma parte de la gramática normativa  ya que establece las
                reglas para el uso correcto de las letras y los signos de
                puntuación.
              </p>
            </Col>
            <Col xs="4">
              <img
                src={dos}
                style={{ width: 300 }}
                alt="dos.jpg"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
