import React from 'react'
import Head from 'next/head'
import { Card, Col, Container, Image, Button, Row } from 'react-bootstrap'
import RelatedComponent from '../components/RelatedComponent'
import FooterComponent from '../components/FooterComponent'
import TopComponent from '../components/TopComponent'

class Profil extends React.Component {

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
          <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#17a2b8", width: "200px" }}>PROFIL</div>
          <Row className="my-3">
            <Col lg={9} sm={12} className="mb-3">
              <h3 className="mt-3">Visi</h3>
              <p>
                Terwujudnya Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Cerdas, Adil, Sejahtera, Tangguh, Dan Lestari Yang Dijiwai Budaya Kalwedo, Dalam Keutuhan Negara Kesatuan Republik Indonesia.</p>
              <h3>Misi</h3>
              <ol>
                <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Cerdas</li>
                <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Adil</li>
                <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Sejahtera</li>
                <li>Mewujudkan Kehidupan Manusia Dan Masyarakat Maluku Barat Daya Yang Tangguh</li>
              </ol>
              <hr />
              <h3>Struktur Organisasi</h3>
              <p>
                Dinas Penanaman Modal Dan Pelayanan Terpadu Satu Pintu Kabupaten Maluku Barat Daya Terbentuk Berdasarkan Peraturan Daerah Nomor 9 Tahun 2016 Tentang Pembentukan Dan Susunan Perangkat Daerah Kabupaten Maluku Barat Daya.
              </p>
              <Image src="../images/struktur.jpg" className="img-fluid" thumbnail />
              <hr />
              <h3>Tupoksi</h3>
              <p>
                Peraturan Bupati Nomor 14 Tahun 2017 Tentang Uraian Tugas dan Jabatan Struktural Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu Kabupaten Maluku Barat Daya.
              </p>
              <Button size="lg" href="../PERATURAN_BUPATI_MALUKU_BARAT_DAYA_NOMOR_14_TAHUN_2017.pdf" target="blank">Unduh Peraturan Bupati Nomor 14 Tahun 2017</Button>
            </Col>

            <Col lg={3} sm={12}>
              <RelatedComponent />
              <Card className="mt-3">
                <img src="../images/news/card1.png" className="img-fluid" />
                <Card.Body>
                  <Card.Text>
                    Alamat Kantor : Tiakur
                  </Card.Text>
                  <Card.Text>
                    Email Dinas : ptsp.dinas@gmail.com
                  </Card.Text>
                  <Card.Text>
                    Email Bidang Tenaga Kerja : nakertransmbd@yahoo.com.com
                  </Card.Text>
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

export default Profil