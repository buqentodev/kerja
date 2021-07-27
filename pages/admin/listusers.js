import Head from 'next/head'
import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import fire from '../../config/firebase'
import NavAdmin from './NavAdmin'
import moment from 'moment'

class ListUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: null
    }
  }

  componentDidMount() {
    fire.firestore().collection("ak")
      .get()
      .then((querySnapshot) => {
        let listUser = []
        querySnapshot.forEach((doc) => {
          const user = {
            id: doc.id,
            data: doc.data()
          }
          listUser.push(user)
        });
        this.setState({ users: listUser })
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  render() {
    const { users } = this.state
    console.log(users);
    return (
      <>
        <Head>
          <title>Administrator - Daftar Kartu Pencari Kerja (AK/I)</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavAdmin />

        <Container className="mt-4">

          <h1 className="my-3">Daftar Kartu Pencari Kerja (AK/I)</h1>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th>NIK</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Tanggal Mendaftar</th>
                {/* <th className="text-center">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((user, indexOfKey) =>
                  <tr key={indexOfKey}>
                    <td className="text-center">{indexOfKey + 1}</td>
                    <td>{user.data.nik}</td>
                    <td>{user.data.namaLengkap}</td>
                    <td>{user.data.jenisKelamin}</td>
                    {/* <td className="text-center"><Button>Detail</Button></td> */}
                    <td>{moment(user.data.date_modified).lang('id').fromNow()}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </Container>
      </>
    )
  }
}

export default ListUsers