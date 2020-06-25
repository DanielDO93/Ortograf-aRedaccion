import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDoceView extends Component {
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
              <h2>Consejos para una buena redacción </h2>
            </Col>

            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>1.- Ordena tus ideas</h2>
              <div className="cajaA2 mt-3">
                <p>
                  Lo principal es tener muy en claro qué es lo que quieres decir
                  y cómo lo quieres decir antes de empezar a escribir.
                  Organízate haciendo un sencillo esquema con las ideas
                  principales y secundarias del texto.
                </p>
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>2.- Usa frases cortas </h2>
              <div className="cajaA2 mt-3">
                <p>
                  Escribe de forma sencilla, breve y concisa para lograr que los
                  lectores te entiendan, sobre todo si no tienes costumbre de
                  escribir. Transmitir de esta manera tus ideas siempre te dará
                  buenos resultados.
                </p>
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>3.- No abuses de los adjetivos</h2>
              <div className="cajaA2 mt-3">
                <p>
                  Un adjetivo bien usado te ayudará a describir lo que quieres
                  decir, le dará color a tu texto. Muchos adjetivos no van a
                  tapar los errores en la redacción, solo convertirán tu texto
                  en una rimbombante compilación de palabras.
                </p>
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>4.-Revisa, revisa y revisa</h2>
              <div className="cajaA2 mt-3">
                <p>
                  Lee y vuelve a leer tu texto las veces que sean necesarias
                  para detectar los errores ortográficos. Procura mantenerte
                  actualizado sobre las novedades del lenguaje y las reglas
                  ortográficas para no fallar.
                </p>
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>5.- No escribas como hablas</h2>
              <div className="cajaA2 mt-3">
                <p>
                  La construcción del lenguaje hablado y del escrito son
                  diferentes. Las frases no deben seguir el patrón de una
                  conversación, sino el de una redacción. Recuerda que cada
                  frase debe estar bien estructurada (sujeto, predicado y
                  complementos) y que cada idea debe estar correctamente
                  enunciada y concluida; no dejes nada en el aire.
                </p>
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>6.- Usa puntos y comas</h2>
              <div className="cajaA2 mt-3">
                <p>
                  Puntuar correctamente es indispensable para que el lector
                  pueda respirar y comprender. Además, te ayudará a organizar
                  mejor tus ideas (concluirlas, enumerarlas y/o explicarlas).
                </p>
              </div>
            </Col>
            <Col md="12" className="mt-4 animated zoomInUp delay-2s ">
              <h2>7.- No uses palabras rebuscadas</h2>
              <div className="cajaA2 mt-3">
                <p>
                  Usar muchas palabras “cultas” no te hace ver más inteligente.
                  Si no están integradas a tu vocabulario, puede que las uses
                  mal o que el texto se vea forzado. Antes de hacer el ridículo
                  usando un palabra rebuscada, mejor explica lo que quieres
                  decir de una manera simple y honesta.
                </p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDoceView
