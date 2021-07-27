import React from 'react'
import Head from 'next/head'
import { Card, Col, Container, Image, Button, Row } from 'react-bootstrap'
import RelatedComponent from '../components/RelatedComponent'
import FooterComponent from '../components/FooterComponent'
import TopComponent from '../components/TopComponent'

class Regulasi extends React.Component {

  render() {
    return (
      <>
        <Head>
          <title>Si Pelita MBD - Berita dan Regulasi Terbaru</title>
          <meta property="og:title" content="Si Pelita MBD - Berita dan Regulasi Terbaru" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sipelitambd.com/" />
          <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TopComponent />
        <Container>
          <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#17a2b8", width: "200px" }}>REGULASI TERBARU</div>
          <Row className="my-3">
            <Col lg={9} sm={12}>
              <h3 className="mt-3">Perundang-undangan</h3>
              <ol>
                <li>Peraturan Menteri Nomor 59 Tahun 2021 tentang Pelaksanaan Pekerja Migran Indonesia.</li>
                <li>Peraturan Pemerintah Nomor 37 Tahun 2021 tentang Penyelenggaraan Program Jaminan Kehilangan Pekerjaaan.</li>
                <li>Peraturan Pemerintah Nomor 36 Tahun 2021  tentang Pengupahan.</li>
                <li>Peraturan Pemerintah Nomor 37 Tahun 2021 tentang Perjanjian  Waktu Tertentu, Alih Daya, Waktu Kerja dan Waktu Istirahat dan Pemutusan Hubungan Kerja.</li>
                <li>Peraturan Pemerintah Nomor 34 Tahun 2021 Tentang Penggunaan Tenaga Kerja Asing.</li>
              </ol>
              <Image src="../images/jdih.jpg" className="img-fluid mb-3" />
            </Col>

            <Col lg={3} sm={12}>
              <RelatedComponent />
              <Card className="mt-3">
                <Card.Body>
                  <Button variant="primary" href="https://jdih.kemnaker.go.id/" target="blank" block>jdih.kemnaker.go.id</Button>
                  <Image src="../images/ilustrasi.jpg" className="img-fluid w-100 mt-3" />
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

export default Regulasi