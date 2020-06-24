import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'
import c from '../../assets/img/ImgRedaccion/siete-c.jpg'
import s from '../../assets/img/ImgRedaccion/siete-s.jpg'

class TemaSieteView extends Component {
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
              <h2>Uso de la “C”</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s">
              <p>Se escribe con “C”:</p>
              <ul>
                <li>
                  <span style={{ color: 'red' }}>Delante</span>
                  <b>de </b> <span style={{ color: 'red' }}>e, i.</span>
                  <b>(ce, ci)</b>
                </li>
                <li>
                  <b>Cuando suena como</b>
                  <span style={{ color: 'red' }}>q </span> <b>o</b>
                  <span style={{ color: 'red' }}>k</span>{' '}
                  <b>y cuando va antes de consonante o de </b>
                  <span style={{ color: 'red' }}>a, o, u.</span>
                </li>
                <li>
                  <b>
                    Los verbos que al sustantivarse (forman sustantivos a partir
                    de un verbo) terminan con
                  </b>
                  <span style={{ color: 'red' }}>ción</span>
                  <span style={{ color: 'gray' }}>
                    al cambiar las terminaciones
                  </span>
                  <span style={{ color: 'red' }}>do.</span>
                  <br />
                  <span style={{ color: 'red' }}>Ejemplo: terminación </span>
                  <span style={{ color: 'gray' }}>(de terminado) </span>
                  <span style={{ color: 'red' }}>excavación </span>
                  <span style={{ color: 'gray' }}>(de escavado) </span>
                  <span style={{ color: 'red' }}>extinción </span>
                  <span style={{ color: 'gray' }}>(de extinto).</span>
                </li>
              </ul>
            </Col>
            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-4s centrado-fila"
            >
              <img
                src={c}
                style={{ width: 360 }}
                alt="c"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-4s"
              />
            </Col>
            <Col xs="12" className="animated zoomInUp delay-3s">
              <h2>Uso de la “S”</h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-4s">
              <ul>
                <li>
                  Las palabras que incluyen esta letra cuando va antes de la
                  <span style={{ color: 'red' }}>
                    {' '}
                    d,f,g,l,m,n y q
                  </span> excepto <span style={{ color: 'red' }}>
                    exfoliar
                  </span>{' '}
                  y <span style={{ color: 'red' }}>exquisitos</span>.
                </li>
                <li>
                  <b>
                    {' '}
                    La terminación ísimo, del superlativo de los adjetivos
                    calificativos y adverbios.
                  </b>
                  <br />
                  <span style={{ color: 'red' }}>
                    Ejemplo: facilísimo, bellísimo, tempranísimo.
                  </span>
                </li>
                <li>
                  <span style={{ color: 'gray' }}>
                    Las voces cuya terminación sea
                  </span>
                  <span style={{ color: 'red' }}>oso</span>
                  <span style={{ color: 'gray' }}>
                    con significado de abundancia o consistencia.
                  </span>
                </li>
                <li>
                  <b>
                    Los adjetivos y verbos que al sustantivarse terminan en{' '}
                  </b>
                  <span style={{ color: 'red' }}>sión</span>
                  <span style={{ color: 'gray' }}>
                    y cuyos participios finalizan en{' '}
                  </span>
                  <span style={{ color: 'red' }}>so.</span>
                </li>
              </ul>
            </Col>
            <Col
              md="12"
              className="mt-4 animated zoomInUp delay-4s centrado-fila"
            >
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
export default TemaSieteView
