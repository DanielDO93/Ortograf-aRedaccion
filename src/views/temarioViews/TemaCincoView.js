import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaCincoView extends Component {
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
          <Row className="centrado-fila">
            <Col xs="12">
              <h2 className="animated fadeInDown delay-0s">
                <b>
                  Importancia de la acentuación en los apellidos y nombres
                  propios.
                </b>
              </h2>
            </Col>
          </Row>

          <Row className="centrado-fila">
            <Col xs="8">
              <Row className="centrado-fila">
                <Col xs="9">
                  <div className="cajaA1">
                    <p>
                      Los apellidos se acentúan de acuerdo con las reglas de
                      acentuación gráfica del español o castellano, ejemplo:
                    </p>
                  </div>
                  <div className="cajaA1 mt-3">
                    <p>
                      Acentúa los apellidos de acuerdo al uso que realizamos en
                      ellos. Todos llevan acento. Pero, ¿dónde lo llevan?
                    </p>
                  </div>
                </Col>
                <Col xs="3">
                  <h2>
                    <b>Cortes</b>
                  </h2>
                  <h2>
                    <b>Solis</b>
                  </h2>
                  <h2>
                    <b>Perez</b>
                  </h2>
                  <h2>
                    <b>Sanchez</b>
                  </h2>
                  <h2>
                    <b>Gonzalez</b>
                  </h2>
                  <h2>
                    <b>Diaz</b>
                  </h2>
                  <h2>
                    <b>Alvarez</b>
                  </h2>
                  <h2>
                    <b>Davila</b>
                  </h2>
                  <h2>
                    <b>Sainz</b>
                  </h2>
                  <h2>
                    <b>Ruiz</b>
                  </h2>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCincoView
