import React from 'react'
import Head from 'next/head'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import RelatedComponent from '../components/RelatedComponent'
import FooterComponent from '../components/FooterComponent'
import TopComponent from '../components/TopComponent'
import SlideInfoComponent from '../components/SlideInfoComponent'

class Agenda extends React.Component {

  render() {
    return (
      <>
        <Head>
          <title>Si Pelita MBD - Agenda</title>
          <meta property="og:title" content="Si Pelita MBD - Agenda" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sipelitambd.com/" />
          <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopComponent />

        <Container>
          <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#17a2b8", width: "200px" }}>AGENDA</div>

          <h3 className="mt-3">Seleksi Peserta Pelatihan di BLK Ambon</h3>
          <Row className="mt-4">
            <Col lg={9} sm={12} className="text-center mb-3">
              <Image src="../images/agenda/kantor_blk_ambon.jpg" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'center', width: '900px' }} thumbnail />
              <Image src="../images/agenda/seleksi_blk.jpg" className="img-fluid mt-3" style={{ objectFit: 'cover', objectPosition: 'center', width: '900px' }} thumbnail />
            </Col>
            <Col lg={3} sm={12} className="text-center">
              <RelatedComponent />
              <Card className="mt-3">
                <Card.Body>
                  <Image src="../images/agenda/ads.png" className="img-fluid mb-3" thumbnail />
                  <Image src="../images/agenda/fb_blk_ambon.jpg" className="img-fluid mb-3 w-100" thumbnail />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <FooterComponent />

      </>
    )
  }
}

export default Agenda