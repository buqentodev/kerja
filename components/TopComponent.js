import React from 'react'
import { Col, Container, Jumbotron, Nav, Row } from 'react-bootstrap'
import MarqueeComponent from './MarqueeComponent';

class TopComponent extends React.Component {

  render() {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const dt = date + '/' + month + '/' + year
    return (
      <>
        <Container>

          <Row>
            <Col className="mt-3 small">
              Hari ini: <strong>{dt}</strong>
            </Col>
          </Row>

          <Row className="text-left p-3">
            <Col lg={2} sm={12} style={{ backgroundColor: "red", color: "#fff" }} className="text-center font-weight-bold py-2">Breaking News
            </Col>
            <Col lg={10} sm={12} style={{ backgroundColor: "#555", color: "#fff" }} className="py-2">
              <MarqueeComponent />
            </Col>
          </Row>

          <Jumbotron fluid className="p-3">
            <h2>Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu</h2>
            <h4>Pemerintah Kabupaten Maluku Barat Daya</h4>
          </Jumbotron>

          <Row>
            <Col className="text-left text-uppercase font-weight-bold">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link href="/">Beranda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="profil" href="profil">Profil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="news" href="news">Berita</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="agenda" href="agenda">Agenda</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="regulasi" href="regulasi">Regulasi Terbaru</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="loker" href="loker">Lowongan Kerja</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="pengaduan" href="pengaduan">Layanan Pengaduan</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>

        </Container>

      </>
    )
  }
}

export default TopComponent