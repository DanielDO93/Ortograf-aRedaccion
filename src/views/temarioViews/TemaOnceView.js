import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaOnceView extends Component {
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
              <h2>¿Cuándo debemos usar coma?</h2>
            </Col>

            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-2s "
            >
              <div className="cajaA2 mt-3">
                <p>
                  La coma (,) es un signo de puntuación que señala una breve
                  pausa dentro del enunciado. Se emplea para separar los
                  miembros de una enumeración o sucesión, ya sean palabras o
                  frases, y generalmente no se usa (salvo casos como lo
                  mencionado líneas abajo) en aquellos que vengan precedidos por
                  alguna de las conjunciones y, e, o, u o ni.
                </p>
              </div>
              <br/>
              <p>Vamos a comer niños.</p>
              <p>Vamos a comer, niños.</p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOnceView
