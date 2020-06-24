import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import uno from '../../assets/img/ImgRedaccion/bienvenida.jpg'

class TemaUnoView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Actividad</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <p className="text-justify">
                El participante leerá el siguiente cuento y señalará las faltas
                de ortografía que se encuentren en él.
              </p>
            </Col>
            <Col xs="12" className="centrado-fila">
              <img
                src={uno}
                style={{ width: 300 }}
                alt="uno"
                className="img-fluid bordeImagen  animated  fadeInDown  delay-1s"
              />
            </Col>
          </Row>
          <Row className="centrado-fila">
            <Col xs="12" sm="12" md="8" className="animated zoomInUp delay-2s mt-3">
              <p>
                paco el chato vibia en un rrancho al cumplir ceis años paco
                devia entrar a la escuela
              </p>
              <p>
                Para eso su papa lo llebo a la ciudad donde vibia su abuelita.
              </p>
              <p>
                al llejar a la escuela el primer dia de claces la abuelita le
                digo a la salida me esperas en la puerta
              </p>
              <p>paco espero un rato despues empeso a caminar i ce perdio</p>
              <p>
                paco se asusto y empeso a llorar un polisia le prejunto su
                nombre su apeido i su direcion
              </p>
              <p>
                paco no savia ni su apeido ni su direcion el polisia llebo a
                paco a la estasion de rradio para qe abisaran que hay estava
              </p>
              <p>La abuelita de paco hoyo el abiso y fue a buscarlo</p>
              <p>
                paco se alegro y prometio aprender su nombre completo y direcion
                fin
              </p>
            </Col>
            <Col xs="12" sm="12" md="12" className="centrado-fila"></Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
