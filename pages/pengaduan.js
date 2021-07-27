import Head from 'next/head'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { FaWhatsapp, FaFacebookSquare, FaPhone, FaPhoneSquare, FaPhoneSquareAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'
import RelatedComponent from '../components/RelatedComponent'
import TopComponent from '../components/TopComponent'

function Pengaduan() {

  return (
    <>
      <Head>
        <title>Si Pelita MBD - Layanan Pengaduan</title>
        <meta property="og:title" content="Si Pelita MBD - Layanan Pengaduan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopComponent />

      <Container className="text-center">

        <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#dc3545", width: "200px" }}>LAYANAN PENGADUAN</div>

        <Row className="my-3 text-center">
          <Col lg={9} sm={12} className="mb-3">
            <Image src="../images/lapor.jpg" className="my-5 img-fluid w-50" />
            <h3 className="my-3">Layanan Aspirasi dan Pengaduan Tenaga Kerja</h3>
            <Image src="../images/pengaduan-online.jpg" className="mb-5 img-fluid w-50" />

            <div className="h3">
              <div className="mb-2"><FaPhoneSquareAlt size={32} className="mb-1" color="blue" /> 082189592765</div>
              <div className="my-2">
                <FaWhatsapp size={34} color="green" className="mb-1" /> <a href="https://wa.me/6281343418243"> 6281343418243</a>
              </div>
              <div className="my-2"><HiOutlineMail size={34} className="mb-1" color="red" /> <a href="mailto:nakertransmbd@yahoo.com">nakertransmbd</a></div>
              <div className="my-2">
                <FaFacebookSquare color="blue" size={32} className="mb-1" /> <a href="https://web.facebook.com/lowongankerja.mbd" target="blank">Lowongan Kerja MBD</a>
              </div>
            </div>
          </Col>

          <Col lg={3} sm={12}>
            <RelatedComponent />
            <Card className="mt-3">
              <Card.Body>
                <Image src="../images/pengaduan-masyarakat.jpg" className="img-fluid" thumbnail />
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      <FooterComponent />
    </>
  )
}

export default Pengaduan