import Head from 'next/head'
import { Container, Button, Row, Col } from 'react-bootstrap'
import NavComponent from '../components/NavComponent'
import { useRouter } from 'next/router'
import RelatedComponent from '../components/RelatedComponent'
import FooterComponent from '../components/FooterComponent'

function Alurpendaftaran() {
  const router = useRouter()
  let userdata = null
  if (typeof window !== "undefined") {
    userdata = JSON.parse(localStorage.getItem('userdata'))
  }
  const handleRegist = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    const nik = user && user.nik
    if (user && nik !== null) {
      router.push("register")
    } else {
      router.push("login")
    }
  }
  return (
    <>
      <Head>
        <title>Si Pelita MBD - Alur Pendaftaran Pencari kerja</title>
        <meta property="og:title" content="Si Pelita MBD - Alur Pendaftaran Pencari kerja" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <Container className="text-center">
      <div className="mt-3 p-2 text-center font-weight-bold text-white" style={{ backgroundColor: "#ffc107", width: "200px" }}>ALUR PENDAFTARAN</div>
        <Row className="my-3">
          <Col lg={9} sm={12}>
            <div>
              <img src="../images/alurpendaftaran.jpg" className="img-fluid" width={600} />
            </div>
            <hr />
            <Button className="mb-3" variant="primary" size="lg" onClick={handleRegist}>{userdata ? 'Ubah Data' : 'Daftar Sekarang'}</Button>
          </Col>
          <Col lg={3} sm={12}>
            <RelatedComponent />
          </Col>
        </Row>
      </Container>
      <FooterComponent />
    </>
  )
}

export default Alurpendaftaran