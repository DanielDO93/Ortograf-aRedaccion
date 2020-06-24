import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import dos from '../../assets/img/ImgRedaccion/dos.jpg'

class TemaSeisView extends Component {
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
              <h2>Uso de la “B”</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s">
              <ul>
                <li>
                  <b>Verbos terminados en bir, excepto </b>{' '}
                  <span style={{ color: 'gray' }}>
                    {' '}
                    hervir, servir y vivir (escribir, recibir).
                  </span>{' '}
                </li>
                <li>
                  <b>
                    Palabras con bu, bur o bus , al principio, medio o final de
                    palabra{' '}
                  </b>
                  .<span style={{ color: 'red' }}> Excepto</span>{' '}
                  <span style={{ color: 'gray' }}>
                    párvulo, vuelo, vuelco, válvula, vulgar, vulnerar, vuelta
                    (buró, busto).{' '}
                  </span>{' '}
                </li>
                <li>
                  <b>
                    Las palabras en que el sonido b va delante de consonante{' '}
                  </b>{' '}
                  <span style={{ color: 'gray' }}>
                    (abdicación, absolver).{' '}
                  </span>{' '}
                </li>
                <li>
                  <b> Los</b>{' '}
                  <span style={{ color: 'red' }}>
                    pretéritos imperfectos (copretérito) en –aba: cantaban,
                    saltaba, soñábamos.{' '}
                  </span>{' '}
                </li>
              </ul>
            </Col>
            <Col xs="12" className="animated zoomInUp delay-3s">
              <h2>Uso de la “V”</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-4s">
              <ul>
                <li>
                  <b>Las palabras que </b>{' '}
                  <span style={{ color: 'red' }}>empiezan</span>
                  <b>por</b>
                  <span style={{ color: 'red' }}>
                    val-, vice-villa-, villar-. Excepto:
                  </span>
                  <span style={{ color: 'gray' }}>
                    bíceps y billar (vals, vicepresidente, villano, villarica.
                  </span>
                </li>
                <li>
                  <b>Los</b>
                  <span style={{ color: 'red' }}>
                    {' '}
                    adjetivos y sustantivos terminados en ava, avo, eva, eve,
                    evo, iva, ivo.
                    <br />
                    Excepto:
                  </span>{' '}
                  <span style={{ color: 'gray' }}>
                    árabe, sílaba y estribo (agrava, bravo, cueva, lleve, muevo,
                    archiva, expresivo).
                  </span>{' '}
                </li>
                <li>
                  <b>Las formas de</b>{' '}
                  <span style={{ color: 'red' }}>verbos</span>
                  <b>que en </b>
                  <span style={{ color: 'red' }}>en infinitivo no</span>
                  <b>tienen</b>
                  <span style={{ color: 'red' }}>
                    b ni v (tuvo, sostuvieron, anduvo). Excepto
                  </span>
                  <b>iba</b>
                  <span style={{ color: 'red' }}>de ir</span>.
                </li>
                <li>
                  <b> Los</b>{' '}
                  <span style={{ color: 'red' }}>
                    pretéritos imperfectos (copretérito) en –aba: cantaban,
                    saltaba, soñábamos.{' '}
                  </span>{' '}
                </li>
              </ul>
            </Col>
            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-4s centrado-fila"
            >
              <img
                src={dos}
                style={{ width: 360 }}
                alt="dos"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-4s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaSeisView
