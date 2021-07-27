import Head from 'next/head'
import React, { useRef, useState } from 'react';
import FooterComponent from '../components/FooterComponent'
import ReactToPrint from 'react-to-print';
import { Button, Container } from 'react-bootstrap';
import { BioPrint } from '../components/BioPrint';
import NavComponent from '../components/NavComponent';
import fire from '../config/firebase'
import { useRouter } from 'next/router'

function Biodata() {
  const router = useRouter()
  const componentRef = useRef();
  const [loading, setLoading] = useState(true)
  let nik = null
  if (typeof window !== "undefined") {
    const user = JSON.parse(localStorage.getItem('user'))
    nik = user && user.nik
  }
  let user = {}
  if (nik) {
    const docRef = fire
      .firestore().collection('ak')
      .where('nik', '==', nik)
    docRef.onSnapshot(snap => {
      const data = snap.docs.map(doc => ({
        id: doc.id, ...doc.data()
      }))
      data && setLoading(false)
      data.length > 0 && localStorage.setItem('userdata', JSON.stringify(data[0]))
    })

    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem('userdata'))
      if (userData && Object.keys(userData).length !== null) {
        let pendidikanFormal = {}
        if (userData.pendidikanFormal.sdSederajat) pendidikanFormal.sdSederajat = {
          nama: userData.pendidikanFormal.sdSederajat.nama,
          tahun: userData.pendidikanFormal.sdSederajat.tahun
        }
        if (userData.pendidikanFormal.smtpSederajat) pendidikanFormal.smtpSederajat = {
          nama: userData.pendidikanFormal.smtpSederajat.nama,
          tahun: userData.pendidikanFormal.smtpSederajat.tahun
        }
        if (userData.pendidikanFormal.smtaD1Akta1) pendidikanFormal.smtaD1Akta1 = {
          nama: userData.pendidikanFormal.smtaD1Akta1.nama,
          tahun: userData.pendidikanFormal.smtaD1Akta1.tahun
        }
        if (userData.pendidikanFormal.smD2d3) pendidikanFormal.smD2d3 = {
          nama: userData.pendidikanFormal.smD2d3.nama,
          tahun: userData.pendidikanFormal.smD2d3.tahun
        }
        if (userData.pendidikanFormal.akta2) pendidikanFormal.akta2 = {
          nama: userData.pendidikanFormal.akta2.nama,
          tahun: userData.pendidikanFormal.akta2.tahun
        }
        if (userData.pendidikanFormal.akta3) pendidikanFormal.akta3 = {
          nama: userData.pendidikanFormal.akta3.nama,
          tahun: userData.pendidikanFormal.akta3.tahun
        }
        if (userData.pendidikanFormal.s3PascaS1Akta4D4) pendidikanFormal.s3PascaS1Akta4D4 = {
          nama: userData.pendidikanFormal.s3PascaS1Akta4D4.nama,
          tahun: userData.pendidikanFormal.s3PascaS1Akta4D4.tahun
        }
        if (userData.pendidikanFormal.doktor2Akta5) pendidikanFormal.doktor2Akta5 = {
          nama: userData.pendidikanFormal.doktor2Akta5.nama,
          tahun: userData.pendidikanFormal.doktor2Akta5.tahun
        }

        var s = userData.tanggalLahir && userData.tanggalLahir.seconds
        var curdate = new Date(null);
        curdate.setTime(s * 1000);
        var date = new Date(curdate);
        var day = date.getDate()
        var month = date.getMonth()+1
        var year = date.getFullYear()
        const tLahir = day+'/'+month+'/'+year

        user = {
          noPendaftaran: userData.id,
          nik: userData.nik,
          namaLengkap: userData.namaLengkap,
          tempatLahir: userData.tempatLahir,
          tanggalLahir: tLahir,
          jenisKelamin: userData.jenisKelamin,
          status: userData.status,
          agama: userData.agama,
          alamat: userData.alamat,
          telepon: userData.telepon,
          keterampilan: {
            keterampilan1: userData.keterampilan.keterampilan1,
            keterampilan2: userData.keterampilan.keterampilan2,
            keterampilan3: userData.keterampilan.keterampilan3
          },
          pendidikanFormal: pendidikanFormal
        }



      } else {
        router.push('register')
      }
    }
  }

  return (
    <>
      <Head>
        <title>Daftar Pencari Kerja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent />
      {
        loading ?
          <Container className="mt-5 text-center">Menunggu data...</Container>
          :
          <div>
            <Container className="mt-4">
              <BioPrint ref={componentRef} user={user} />
              <ReactToPrint
                trigger={() => <Button block className="mb-4 lg" size="lg">Cetak</Button>}
                content={() => componentRef.current}
              />
            </Container>
            <FooterComponent />
          </div>
      }
    </>
  )
}

export default Biodata