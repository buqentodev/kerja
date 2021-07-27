import Head from 'next/head'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'
import RelatedComponent from '../components/RelatedComponent'
import TopComponent from '../components/TopComponent'

function Loker() {

  const data = [
    {
      title: 'Marketing Officer Bank Perkreditan Modern Ekspress',
      by: 'Bank Perkreditan Modern Ekspress',
      description: 'Bank Perkreditan Modern Ekspress membuka lowongan tenaga kerja profesional untuk posisi Marketing Officer. Lokasi kerja Kantor Cabang Tiakur. Pendaftaran ditutup pada tanggal 31 April 2021.',
      image: 'loker1.png',
      dateCreated: '20 April 2021'
    },
    {
      title: 'Staf administrasi, supervisor, dan fixed plant PT Batutua Kharisma Permai',
      by: 'PT Batutua Kharisma Permai',
      description: 'PT Batutua Kharisma Permai sedang mencari tenaga kerja profesional untuk bisa mengisi beberapa posisi kosong di perusahaan. Untuk posisi staf administrasi, supervisor, dan fixed plant.',
      image: 'loker3.png',
      dateCreated: '9 April 2021'
    }
  ]

  return (
    <>
      <Head>
        <title>Si Pelita MBD - Lowongan Kerja</title>
        <meta property="og:title" content="Si Pelita MBD - Lowongan Kerja" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopComponent />
      <Container>
        <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#28a745", width: "200px" }}>LOWONGAN KERJA</div>
        <Row className="my-3 text-center">
          <Col lg={9} sm={12}>
            {
              data.map((item, index) =>
                <div className="my-4" key={index}>
                  <h3 className="font-weight-bold text-capitalize">{item.title}</h3>
                  <div>
                    Tanggal posting: <strong>{item.dateCreated}</strong>
                  </div>
                  <div>{item.description}</div>
                  <div className="pb-3">Penyelenggara: <strong className="text-capitalize">{item.by}</strong></div>
                  <Image src={`../images/loker/${item.image}`} className="img-fluid" width={600} thumbnail />
                  <hr />
                </div>
              )
            }
          </Col>
          <Col lg={3} sm={12}>
            <RelatedComponent />
            <Card className="mt-3">
              <Card.Body>
                <Image src="../images/loker/lokerads1.png" className="img-fluid mb-3" thumbnail />
                <Image src="../images/loker/lokerads2.png" className="img-fluid" thumbnail />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Loker