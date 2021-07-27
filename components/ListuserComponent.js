import React from 'react'
import { Container, Table, Button, Breadcrumb } from 'react-bootstrap'
import moment from 'moment'

class ListuserComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }
  async componentDidMount() {
    const res = await fetch('https://607a5938bd56a60017ba295f.mockapi.io/users')
    const users = await res.json()
    this.setState({ users: users })
  }
  render() {
    const { users } = this.state
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Daftar Pencari Kerja</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <h1>Data Pendaftar AK.1 Pencari Kerja</h1>

          <Button varian="link" href="register" className="my-2">Pendaftaran AK1 (Kartu Kuning)</Button>
          <div>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {
                  users
                    .sort(
                      function compare(a, b) {
                        const dtModifiedA = b.createdAt;
                        const dtModifiedB = a.createdAt;
                        let comparison = 0;
                        if (dtModifiedA > dtModifiedB) {
                          comparison = 1;
                        } else if (dtModifiedA < dtModifiedB) {
                          comparison = -1;
                        }
                        return comparison;
                      }
                    )
                    .map((user, indexOfKey) =>
                      <tr key={indexOfKey}>
                        <td>{indexOfKey + 1}</td>
                        <td>{user.namaLengkap}</td>
                        <td>{moment(user.createdAt).lang('id').fromNow()}</td>
                      </tr>
                    )
                }
              </tbody>
            </Table>
          </div>
        </Container>
      </>
    )
  }
}

export async function getStaticProps() {
  const res = await fetch('https://607a5938bd56a60017ba295f.mockapi.io/users')
  const users = await res.json()
  return {
    props: {
      users
    }
  }
}

export default ListuserComponent