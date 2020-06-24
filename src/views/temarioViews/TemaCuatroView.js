import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import cuatro02 from '../../assets/img/ImgErgonometria/cuatro02.png'

class TemaCuatroView extends Component {
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
          <Row>
            <Col xs="12">
              <h2 className="animated fadeInDown">
                <b>¿Cuáles son las reglas de acentuación?</b>
              </h2>
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="8">
              <Row className="centrado-fila">
                <Col xs="3">
                  <h2>Agudas</h2>
                </Col>
                <Col xs="9">
                  <div className="cajaA1">
                    <p>
                      Se acentúan en la última silaba <br />
                      Llevan tilde (acento gráfico) cuando terminan en N, S o
                      vocal{' '}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="centrado-fila mt-3">
                <Col xs="3">
                  <h2>Graves</h2>
                </Col>
                <Col xs="9">
                  <div className="cajaA2">
                    <p>
                      Se acentúan en la penúltima sílaba.
                      <br />
                      Llevan tilde cuando no terminal en N, S o vocal.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="centrado-fila mt-3">
                <Col xs="3">
                  <h2>Esdrújulas</h2>
                </Col>
                <Col xs="9">
                  <div className="cajaA1">
                    <p>
                      Se acentúan en la antepenúltima sílaba y siempre llevan
                      tilde.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaCuatroView
