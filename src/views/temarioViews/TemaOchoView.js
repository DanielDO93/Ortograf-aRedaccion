import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import ocho from '../../assets/img/ImgRedaccion/ocho.jpg'

class TemaOchoView extends Component {
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
              <h2>Uso de la “Z”</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s">
              <p>Se escribe con “Z”:</p>
              <ul>
                <li>
                  <b>Delante de</b>
                  <span style={{ color: 'red' }}>a, o </span>
                  <b>y </b> <span style={{ color: 'red' }}>u </span>
                  <b> (za, zo y zu)</b>
                </li>
                <li>
                  <b>Las palabras con </b>
                  <span style={{ color: 'red' }}>plural</span> <b>en</b>
                  <span style={{ color: 'red' }}>–ces </span>{' '}
                  <b>acaban en z. </b>
                  <br />
                  <span style={{ color: 'red' }}>Ejemplo: Voz </span>{' '}
                  <span style={{ color: 'gray' }}>Voces. </span>
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaOchoView
