import Head from 'next/head'
import SlideComponent from '../components/SlideComponent'
import CardComponent from '../components/CardComponent'
import JumbotronComponent from '../components/JumbotronComponent'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'
import GraphComponent from '../components/GraphComponent'

function Home() {

  const cStyle = {
    position: 'fixed',
    padding: '10px',
    bottom: '60px',
    right: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    borderRadius: '50px',
    textAlign: 'center',
    zIndex: '1'
  }

  return (
    <>
      <Head>
        <title>Si Pelita MBD - Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya</title>
        <meta property="og:title" content="Si Pelita MBD - Dinas Penanaman Modal dan PTSP Kabupaten Maluku Barat Daya" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sipelitambd.com/" />
        <meta property="og:image" content="https://www.sipelitambd.com/images/pelantikan.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      <SlideComponent />
      <JumbotronComponent />
      <CardComponent />
      <GraphComponent />
      <FooterComponent />
      {/* <a href="https://wa.me/6281343418243" style={cStyle}><FaWhatsapp size={40} /></a> */}
    </>
  )
}

export default Home