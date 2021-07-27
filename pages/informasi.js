import React from 'react'
import Head from 'next/head'
import { Col, Container, Image, Jumbotron, Nav, Row } from 'react-bootstrap'
import NavComponent from '../components/NavComponent'
import RelatedComponent from '../components/RelatedComponent'
import fire from '../config/firebase'
import moment from 'moment'
import FooterComponent from '../components/FooterComponent'
import SlideComponent from '../components/SlideComponent'
import TopComponent from '../components/TopComponent'
import SlideInfoComponent from '../components/SlideInfoComponent'

class Informasi extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: null
    }
  }

  componentDidMount() {
    fire.firestore().collection("news")
      .get()
      .then((querySnapshot) => {
        let listNews = []
        querySnapshot.forEach((doc) => {
          const newsData = {
            id: doc.id,
            data: doc.data()
          }
          listNews.push(newsData)
        });
        this.setState({ news: listNews })
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  render() {
    const { news } = this.state
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const dt = date + '/' + month + '/' + year
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

          <Row className="mt-4">
            <Col lg={9} sm={12} className="text-center mb-3">
              <SlideInfoComponent />
            </Col>
            <Col lg={3} sm={12} className="text-center">
              <RelatedComponent />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg={6} sm={12} className="text-center">
              <Row className="mb-3">
                <Col>
                  <Image src="../images/news/card1.png" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'center', width: '350px', height: '200px' }} thumbnail />
                  Kantor Dinas Penanaman Modal dan PTSP Kab.MBD
                </Col>
                <Col>
                  <Image src="../images/news/card2.jpg" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'center', width: '350px', height: '200px' }} thumbnail />
                  Dukungan Bupati Maluku Barat Daya kepada Si Pelita MBD
                </Col>
              </Row>
            </Col>
            <Col lg={6} sm={12} className="text-center">
              <Row>
                <Col>
                  <Image src="../images/news/card3.jpg" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'center', width: '350px', height: '200px' }} thumbnail />
                  Selamat Menunaikan Ibadah Puasa Ramadan 1442 Tahun 2021
                </Col>
                <Col>
                  <Image src="../images/news/card4.png" className="img-fluid" style={{ objectFit: 'cover', objectPosition: 'center', width: '350px', height: '200px' }} thumbnail />
                  Sukseskan Pendataan Keluarga Tahun 2021
                </Col>
              </Row>
            </Col>
          </Row>

        </Container>

        <FooterComponent />

      </>
    )
  }
}

export default Informasi