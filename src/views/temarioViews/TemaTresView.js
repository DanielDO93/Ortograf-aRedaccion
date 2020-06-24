import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import flecha1 from '../../assets/img/ImgRedaccion/flecha1.png'
import flecha2 from '../../assets/img/ImgRedaccion/flecha2.png'

class TemaTresView extends Component {
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
            <Col xs="12" className="animated zoomInUp delay-0s">
              <h2>Importancia de la ortografía</h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="6" md="7">
              <div className="cajaA2 animated zoomInUp delay-0s">
                <p className="">
                  Es de gran importancia ya que si no escribimos correctamente
                  las palabras podemos cambiar su significado, originando un
                  gran error.
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className="cajaA2 animated zoomInUp delay-3s">
                <p className="">
                  Ya que una buena ortografía nos ayuda a lograr mayor alcance
                  de los conocimientos.
                </p>
              </div>
            </Col>
            <Col xs="12" sm="6" md="5">
              <img
                src={flecha1}
                style={{ width: 100 }}
                alt="flecha.png"
                className="img-fluid    animated  fadeInDown  delay-3s"
              />
              <div className="cajaA1 animated zoomInUp delay-4s">
                <p>
                  En la ortografía deben ser tomadas en cuenta los signos de
                  puntuación y el uso correcto de las letras.{' '}
                </p>
              </div>
              <img
                src={flecha2}
                style={{ width: 100 }}
                alt="flecha2"
                className="img-fluid    animated  fadeInDown  delay-3s"
              />
            </Col>
          </Row>
         
        </CardBody>
      </div>
    )
  }
}
export default TemaTresView
