import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'


class TemaNueveView extends Component {
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
              <h2>Recordémos…</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s">
              <div className="cajaA1">
                <p>
                  En los nombres propios no hay reglas de ortografía ya que
                  depende de cómo estén registrados.
                </p>
              </div>
              <div className="cajaA2 mt-3">
                <p>
                  En los apellidos se aplican las reglas de acentuación de
                  acuerdo al tipo de palabra pero puede existir González y
                  Gonzales.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Dominguez</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Leon</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
          </Row>
          <Row>
            <Col xs="2">
              <p>Perez</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Duran </p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Garcia</p>
            </Col>
            <Col xs="2">
              <p>Sanchez</p>
            </Col>
          </Row>
          <Row>
            <Col xs="2">
              <p>Lopez </p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Rodriguez</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Gonzalez</p>
            </Col>
          </Row>
          <Row>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Ramirez</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Martinez</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Alcantara</p>
            </Col>
          </Row>
          <Row>
            <Col xs="2">
              <p>Hernandez</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Cortes</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
            <Col xs="2">
              <p>Mejia</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
          </Row>
          <Row>
            <Col xs="2">
              <p>Gutierrez</p>
            </Col>
            <Col xs="2">
              <p>Alvarez</p>
            </Col>
            <Col xs="2">
              <p>Avila</p>
            </Col>
            <Col xs="2">
              <p>Ibañez</p>
            </Col>
            <Col xs="2">
              <p>Gomez</p>
            </Col>
            <Col xs="2">
              <p></p>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaNueveView
