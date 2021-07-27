import React from 'react'
import Head from 'next/head'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import RelatedComponent from '../components/RelatedComponent'
import FooterComponent from '../components/FooterComponent'
import TopComponent from '../components/TopComponent'

class News extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     news: null
  //   }
  // }

  // componentDidMount() {
  //   fire.firestore().collection("news")
  //     .get()
  //     .then((querySnapshot) => {
  //       let listNews = []
  //       querySnapshot.forEach((doc) => {
  //         const newsData = {
  //           id: doc.id,
  //           data: doc.data()
  //         }
  //         listNews.push(newsData)
  //       });
  //       this.setState({ news: listNews })
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // }

  render() {
    const news = [
      {
        data: {
          title: 'Rapat Koordinasi Pembangunan Infrastruktur Transportasi Udara',
          description: 'Bupati Maluku Barat Daya, Benyamin Th. Noach, S.T, didampingi Sekretaris Daerah, Drs. A.Siamiloy, M.Si, Kepala Bappeda, Kepala Dinas PU dan Kepala Dinas Perhubungan menghadiri Rapat Koordinasi Pembangunan Infrastruktur Transportasi Udara dengan Deputi I Kepala Staf Kepresidenan Febry Calvin Tetelepta dan Direktur Bandara Kementerian Perhubungan, Nafthan Syaroni,  bertempat di Ruang Rapat Utama, Kantor Staf Kepresidenan, Jakarta Pusat, Senin (19/4/2021).',
          image: 'berita4.jpg',
          dateModified: '15 April 2021'
        }
      },
      {
        data: {
          title: 'Bupati MBD Hadiri Rapat Umum Pemegang Saham PT BPD Maluku dan Maluku Utara Tahun 2021',
          description: 'Bupati Maluku Barat Daya, Benyamin Th. Noach S.T, menghadiri Rapat Umum Pemegang Saham Tahunan dan Luar Biasa PT. Bank Pembangunan Daerah Maluku dan Maluku Utara. Rapat ini dihadiri oleh Gubernur Maluku, Murad Ismail selaku Pemegang Saham Pengendali dan  juga dihadiri oleh seluruh Bupati /Walikota se Provinsi Maluku, Dewan Komisaris dan Direksi PT. BPD Maluku-Maluku Utara  yang dilaksanakan di Hotel Mandarin, Jakarta Pusat, Selasa (6/4/2021).',
          image: 'berita3.jpg',
          dateModified: '17 April 2021'
        }
      },
      {
        data: {
          title: 'Cabut dari Blok Masela, Shell Negosiasi ke Pemegang Saham Baru',
          description: 'Jakarta. Shell Upstream Overseas Ltd akan hengkang dari proyek pengembangan Blok Masela. Perusahaan tersebut sedang melakukan divestasi participating interest (PI) atau hak kelolanya sebesar 35% di proyek yang berada di Kepulauan Tanimbar, Maluku tersebut. Menurut Deputi Bidang Koordinasi Kedaulatan Maritim dan Energi Kementerian Koordinator Bidang Kemaritiman dan Investasi (Kemenko Marves) Basilio D. Araujo, saat ini Shell sedang bidding atau tawar-menawar dengan pemegang saham baru.',
          image: 'berita2.jpg',
          dateModified: '31 April 2021'
        }
      },
      {
        data: {
          title: 'MBD Dijatahi 40 Unit BTS',
          description: 'Ambon, BKA- Kabupaten Maluku Barat Daya (MBD) kembali mendapat jatah pembangunan Base Transceiver Station (BTS) Bakti oleh Kementrian Komunikasi dan Informatika Republik Indonesia. Pembangun BTS Bakti akan dilakukan secara bertahap dalam kurun waktu dua tahun, yakni tahun ini hingga 2022 mendatang. Dalam dua tahun tersebut, Kabupaten MBD mendapat jatah sebanyak 82 unit BTS Bakti dan akan dibangun sebanyak kurang lebih 40 unit di tahun ini. Ini disampaikan Kepala Dinas Kominfo Kabupaten MBD, W.A.A. Petrusz, kepada koran ini, Sabtu (17/4).',
          image: 'berita1.jpg',
          dateModified: '1 Mei 2021'
        }
      }
    ]
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
          <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#17a2b8", width: "200px" }}>BERITA</div>

          <Row className="mt-3">

            <Col lg={6} sm={12} className="mb-3">
              {
                news && news.map((item, index) =>
                  <div className="mb-3" key={index}>
                    <h3 className="font-weight-bold text-capitalize">{item.data.title}</h3>
                    <div className="mb-3 small">{item.data.dateModified} | Oleh: Admin</div>
                    <Image src={`../images/news/${item.data.image}`} className="img-fluid mb-3" width={600} thumbnail />
                    <div dangerouslySetInnerHTML={{ __html: item.data.description }} />
                    <hr />
                  </div>
                )
              }
            </Col>

            <Col lg={3} sm={12} className="text-center">
              <Row className="mb-3">
                <Col>
                  <Image src="../images/news/card2.jpg" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'top', width: '350px', height: '200px' }} thumbnail />
                  Dukungan Bupati Maluku Barat Daya kepada Si Pelita MBD
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Image src="../images/news/card1.png" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'center', width: '350px', height: '200px' }} thumbnail />
                  Kantor Dinas Penanaman Modal dan PTSP Kab.MBD
                </Col>
              </Row>
            </Col>

            <Col lg={3} sm={12} className="text-center">
              <RelatedComponent />
              <Card className="mt-3">
                <Card.Body>
                  <img src="../images/vaksin.jpg" className="img-fluid mb-3" />
                  <img src="../images/pkk.jpg" className="img-fluid" />
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

export default News